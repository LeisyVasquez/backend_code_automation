"use strict";

const constants = require("./constants");
const environment = require("./environment");
//Se importan todos los serializadores
const GnrDbPortsSerializer = require('../../interfaces/serializers/gnr_db_ports_serializer.js')
const GnrDbHostsSerializer = require('../../interfaces/serializers/gnr_db_hosts_serializer.js')
//$1

function buildBeans() {
  const beans = {
    //Se instancian todos los serializadores
    gnrDbPortsSerializer: new GnrDbPortsSerializer(),
		gnrDbHostsSerializer: new GnrDbHostsSerializer(),
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
    const GnrDbPortsRepositoryPostgres = require('../repositories/gnr_db_ports_repository_postgres')
		const GnrDbHostsRepositoryPostgres = require('../repositories/gnr_db_hosts_repository_postgres')
		//$3

    //Se instancian todos los repositorios agregandolos al objeto beans
    beans.accessManager = new AccessManager();
    beans.gnrDbPortsRepository = new GnrDbPortsRepositoryPostgres()
		beans.gnrDbHostsRepository = new GnrDbHostsRepositoryPostgres()
		//$4
  } else {
    //Importación e instancia de otros repositorios con BD diferentes
  }

  return beans;
}

module.exports = buildBeans();
