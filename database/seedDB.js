const mongoose = require("mongoose");
const { db } = require("./connection");
require("dotenv").config({ path: __dirname + "/../.env" });
const { DBURI, DBPORT, DBNAME } = process.env;
const { batchData } = require("./mockDataGenerator");
const { batchInsert } = require("./handlers");

db(`mongodb://${DBURI}:${DBPORT}/${DBNAME}`);

const dataList = batchData(1000);

batchInsert(dataList);
