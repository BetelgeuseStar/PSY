const User = require("./userModel");
const Token = require("./tokenModel");
const Person = require("./personModel");
const Source = require("./sourceModel");
const Marker = require("./markerModel");

require("./associations");

module.exports = { User, Token, Person, Source, Marker };
