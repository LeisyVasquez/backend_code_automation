var DataTypes = require("sequelize").DataTypes;
var _general_projects = require("./GeneralProjects");
var _public_tests = require("./PublicTests");

function initModels(sequelize) {
  var general_projects = _general_projects(sequelize, DataTypes);
  var public_tests = _public_tests(sequelize, DataTypes);


  return {
    general_projects,
    public_tests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
