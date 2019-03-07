require("dotenv").config({ path: __dirname + "/../.env" });
const options = require("./knexfile");
const knex = require("knex")(options[process.env.DBOPTIONS || "development"]);

const insert = function(data) {
  knex.batchInsert("titles", data).catch(err => console.error(err));
};

module.exports = { knex, insert };
