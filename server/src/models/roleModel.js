const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Role = sequelize.define("Role", {
  name: {
    type: DataTypes.STRING, // "user", "admin", "system"
    defaultValue: "user",
    allowNull: false,
  },
});

module.exports = Role;
