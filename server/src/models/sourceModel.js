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
    type: DataTypes.TEXT("long"),
  },
  photoUrl: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
});

module.exports = Source;
