require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { batchData } = require("./mockDataGenerator");
const { ItemTitle } = require("./Schema");
const { TITLES_URL } = process.env;

const dataList = batchData(1000);

mongoose.connect(TITLES_URL, {
  useNewUrlParser: true
});

const con = mongoose.connection;

const batchInsert = data => {
  console.log("iserting data!!");
  ItemTitle.insertMany(data)
    .then(() => console.log("All done with this insert boss"))
    .then(() => mongoose.disconnect())
    .catch(err => console.error(err));
};

con.on("error", () => console.error("connection error boss"));
con.on("connected", () => batchInsert(dataList));
con.on("disconnected", () => {
  con.close(() => {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});
