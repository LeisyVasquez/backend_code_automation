'use strict';

require('dotenv').config();

const constants = require('./constants');
const environment = require('./environment');

module.exports = {

  async init() {
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
      //Config mongo
    }
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES || environment.database.dialect === constants.SUPPORTED_DATABASE.SQLITE || environment.database.dialect === constants.SUPPORTED_DATABASE.ORACLE ) {
      const sequelize = require('../orm/sequelize/sequelize');
      try {
        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  }
};
