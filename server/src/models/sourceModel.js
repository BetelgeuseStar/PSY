const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Source = sequelize.define("Source", {
  title: {
    type: DataTypes.STRING,
  },
  isPublic: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  info: {
    type: DataTypes.STRING,
  },
  photoUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Source;
