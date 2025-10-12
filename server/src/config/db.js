// const { Pool } = require("pg");
// require("dotenv").config();
//
// const pool = new Pool({
//   user: ,
//   host: ,
//   database: ,
//   password: ,
//   port: process.env.DB_PORT,
// });
//
// module.exports = pool;

const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
);

module.exports = sequelize;
