require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { ItemTitle } = require("./Schema");
const { LOCAL_URL } = process.env;

mongoose
  .connect(LOCAL_URL, {
    useNewUrlParser: true,
    authSource: "admin"
  })
  .then(() => console.log("success!!!!"))
  .catch(console.error);

const con = mongoose.connection;

con.on("error", () => console.error("connection error boss"));
con.on("connected", () => console.log("connected to DB boss!"));
mongoose.connection.on("disconnected", () => {
  mongoose.connection.close(() => {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});

const batchInsert = data => {
  ItemTitle.insertMany(data)
    .then(() => console.log("All done with the insert boss"))
    .then(() => mongoose.disconnect())
    .catch(err => console.error(err));
};

const getItemTitle = (id, cb) => {
  console.log("id :", id);
  ItemTitle.findOne({ titleId: id }).exec(cb);
};

module.exports = { batchInsert, getItemTitle };
