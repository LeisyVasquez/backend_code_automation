'use strict'

const { Sequelize, DataTypes } = require('sequelize')
const environment = require('../../config/environment')

//Conexión a la base de datos
const sequelize = new Sequelize(environment.database.url)

//Se importan todos los modelos
const modelDefiners = [
  require('./models/GeneralProjects')
 
]

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize, DataTypes)
}

module.exports = sequelize
