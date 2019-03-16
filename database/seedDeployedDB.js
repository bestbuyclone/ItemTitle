require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { batchData } = require("./mockDataGenerator");
const { ItemTitle } = require("./Schema");
const { TITLES_URL } = process.env;
const con = mongoose.connection;
Promise = require("bluebird");

mongoose.connect(TITLES_URL, {
  useNewUrlParser: true
});

con.on("error", () => console.error("connection error boss"));
con.on("connected", () => console.log("yayay"));
con.on("disconnected", () => {
  con.close(() => {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});

Promise.all(batchData(1000))
  .then(dataArray => batchInsert(dataArray))
  .catch(console.error);

const batchInsert = data => {
  console.log("iserting data!!");
  ItemTitle.insertMany(data)
    .then(() => console.log("All done with this insert boss"))
    .then(() => mongoose.disconnect())
    .catch(err => console.error(err));
};
