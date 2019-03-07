require("dotenv").config({ path: __dirname + "/../.env" });

const {
  DEV_DBURL,
  DEV_DBPORT,
  DEV_DBNAME,
  DEV_DBUSER,
  DEV_DBPASS,
  DBURL,
  DBPORT,
  DBNAME,
  DBUSER,
  DBPASS
} = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DEV_DBURL,
      port: DEV_DBPORT,
      database: DEV_DBNAME,
      user: DEV_DBUSER,
      password: DEV_DBPASS
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations"
    }
  },
  production: {
    client: "pg",
    connection: {
      host: DBURL,
      port: DBPORT,
      database: DBNAME,
      user: DBUSER,
      password: DBPASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations"
    }
  }
};
