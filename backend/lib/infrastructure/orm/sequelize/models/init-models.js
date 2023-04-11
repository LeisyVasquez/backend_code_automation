var DataTypes = require("sequelize").DataTypes;
var _public_tests = require("./PublicTests");

function initModels(sequelize) {
  var public_tests = _public_tests(sequelize, DataTypes);


  return {
    public_tests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
