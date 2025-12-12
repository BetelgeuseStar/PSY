const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Marker = sequelize.define("Marker", {
  value: {
    type: DataTypes.TEXT("long"),
  },
  info: {
    type: DataTypes.TEXT("long"),
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  psyFunction: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Will",
  },
  psyLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = Marker;
