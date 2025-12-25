const Token = require("./tokenModel");
const User = require("./userModel");
const Person = require("./personModel");
const Source = require("./sourceModel");
const Marker = require("./markerModel");
const PickedMarkers = require("./pickedMarkersModel");
const Role = require("./roleModel");

User.hasOne(Token);
Token.belongsTo(User);

User.hasMany(Person);
Person.belongsTo(User);

User.hasMany(Source);
Source.belongsTo(User);

User.belongsTo(Role);
Role.hasMany(User);

//---------------------------

Source.hasMany(Person);
Person.belongsTo(Source);

Source.hasMany(Marker);
Marker.belongsTo(Source);

Source.belongsToMany(Person, { through: PickedMarkers });
Person.belongsToMany(Source, { through: PickedMarkers });

module.exports = { User, Token, Source, Person };
