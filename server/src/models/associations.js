const Token = require("./tokenModel");
const User = require("./userModel");
const Person = require("./personModel");
const Source = require("./sourceModel");
const Marker = require("./markerModel");

User.hasOne(Token);
Token.belongsTo(User);

User.hasMany(Person);
Person.belongsTo(User);

User.hasMany(Source);
Source.belongsTo(User);

//---------------------------

Source.hasMany(Person);
Person.belongsTo(Source);

Source.hasMany(Marker);
Marker.belongsTo(Source);

module.exports = { User, Token, Source, Person };
