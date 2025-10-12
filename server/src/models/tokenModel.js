const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Token = sequelize.define("Token", {
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Token;
