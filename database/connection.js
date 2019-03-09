const mongoose = require("mongoose");

const db = options => {
  mongoose.connect(options, {
    useNewUrlParser: true
  });

  let con = mongoose.connection;

  con.on("error", () => console.error("connection error boss"));
  con.on("connected", () => console.log("connected to DB boss!"));
  mongoose.connection.on("disconnected", () => {
    mongoose.connection.close(() => {
      console.log("done with this DB, bye now");
      process.exit(0);
    });
  });
};

module.exports = { db };
