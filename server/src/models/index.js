const User = require("./userModel");
const Token = require("./tokenModel");
const Person = require("./personModel");
const Source = require("./sourceModel");
require("./associations");

module.exports = { User, Token, Person, Source };
