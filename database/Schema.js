const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const titleSchema = new Schema({
  titleId: Number,
  title: String,
  model: String,
  sku: Number
});

const ItemTitle = mongoose.model("ItemTitle", titleSchema);

module.exports = { ItemTitle };
