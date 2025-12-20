const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const PickedMarkers = sequelize.define("PickedMarkers", {
  pickedIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: [],
  },
});

module.exports = PickedMarkers;
