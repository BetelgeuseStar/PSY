const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Person = sequelize.define("Person", {
  name: {
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
  type: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: [0, 0, 0, 0],
  },
});

module.exports = Person;
