'use strict'

const { Sequelize, DataTypes } = require('sequelize')
const environment = require('../../config/environment')

//Conexión a la base de datos
const sequelize = new Sequelize(environment.database.url)

//Se importan todos los modelos
const modelDefiners = [
  require("./models/CrudConstrUq"),
  require("./models/CrudDbSchemas"),
  require("./models/CrudTableFields"),
  require("./models/CrudTables"),
  require("./models/CrudUqConstrFields"),
  require("./models/DocGroupsDoc"),
  require("./models/DocMethods"),
  require("./models/DocServices"),
  require("./models/DocServicesGroup"),
  require("./models/DocStatusCodes"),
  require("./models/DocStatusCodesServices"),
  require("./models/GnrDbHosts"),
  require("./models/GnrDbPorts"),
  require("./models/GnrLicenses"),
  require("./models/GnrProjects"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize, DataTypes)
}

module.exports = sequelize
