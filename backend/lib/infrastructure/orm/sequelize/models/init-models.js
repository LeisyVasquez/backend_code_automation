var DataTypes = require("sequelize").DataTypes;
var _general_projects = require("./GeneralProjects");

function initModels(sequelize) {
  var general_projects = _general_projects(sequelize, DataTypes);


  return {
    general_projects,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
