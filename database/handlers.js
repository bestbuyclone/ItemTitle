require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { ItemTitle } = require("./Schema");
const { db } = require("./connection");
const { DBURI, DBPORT, DBNAME } = process.env;

db(`mongodb://${DBURI}:${DBPORT}/${DBNAME}`);

const batchInsert = data => {
  ItemTitle.insertMany(data)
    .then(() => console.log("All done with the insert boss"))
    .then(mongoose.disconnect())
    .catch(err => console.error(err));
};

const getItemTitle = (id, cb) => {
  console.log("id :", id);
  ItemTitle.findOne({ titleId: id }).exec(cb);
};

module.exports = { batchInsert, getItemTitle };
