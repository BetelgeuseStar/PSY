const Token = require("./tokenModel");
const User = require("./userModel");

User.hasOne(Token);
Token.belongsTo(User);

module.exports = { User, Token };
