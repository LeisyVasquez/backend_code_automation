'use strict';

const authorizationController = require('../../../interfaces/controllers/authorization_controller');

module.exports = (server, options) => {
  return {
    authenticate: authorizationController.accessManagerBasic
  };
};