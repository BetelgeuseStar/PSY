const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const PickedMarkers = sequelize.define("PickedMarkers", {
  pickedIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: [],
  },
  type: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: [0, 0, 0, 0],
  },
});

module.exports = PickedMarkers;
