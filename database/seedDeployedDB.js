require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { batchData } = require("./mockDataGenerator");
const { ItemTitle } = require("./Schema");
const { TITLES_URL } = process.env;
const con = mongoose.connection;
Promise = require("bluebird");

Promise.all(batchData(1000))
  .then(datas => batchInsert(datas))
  .then(() => console.log("All done with this insert boss"))
  .then(() => mongoose.disconnect())
  .catch(console.error);

mongoose.connect(TITLES_URL, {
  useNewUrlParser: true
});

const batchInsert = data => {
  console.log("iserting data!!");
  ItemTitle.insertMany(data).catch(err => console.error(err));
};

con.on("error", () => console.error("connection error boss"));
con.on("connected", () => console.log("yayay"));
con.on("disconnected", () => {
  con.close(() => {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});
