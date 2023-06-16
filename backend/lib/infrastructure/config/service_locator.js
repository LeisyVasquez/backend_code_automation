"use strict";

const constants = require("./constants");
const environment = require("./environment");
//Se importan todos los serializadores
//$1

function buildBeans() {
  const beans = {
    //Se instancian todos los serializadores
    //$2
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    //Importación e instancia de otros repositorios con BD diferentes
  } else if (
    environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO
  ) {
    //Importación e instancia de otros repositorios con BD diferentes
  } else if (
    environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES
  ) {
    //Se importan todos los repositorios correspondientes
    const AccessManager = require("../security/access_manager");
    //$3

    //Se instancian todos los repositorios agregandolos al objeto beans
    beans.accessManager = new AccessManager();
    //$4
  } else {
    //Importación e instancia de otros repositorios con BD diferentes
  }

  return beans;
}

module.exports = buildBeans();
