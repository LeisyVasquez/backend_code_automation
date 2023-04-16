'use strict'

const constants = require('./constants')
const environment = require('./environment')
//Se importan todos los serializadores
const PublicTestSerializer = require('../../interfaces/serializers/public_test_serializer')
const PublicGeneralProjectSerializer = require('../../interfaces/serializers/public_general.projects_serializer')

function buildBeans () {
  const beans = {
    //Se instancian todos los serializadores
    publicGeneralProjectSerializer: new PublicGeneralProjectSerializer()
  }

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
    const AccessManager = require('../security/access_manager')
    const PublicTestRepositoryPsqlOracle = require('../repositories/public_test_repository_psql_oracle')
    const PublicGeneralProjectsRepositoryPsqlOracle = require('../repositories/public_general.project_repository_psql_oracle')

    //Se instancian todos los repositorios agregandolos al objeto beans
    beans.accessManager = new AccessManager()
    beans.publicTestRepository = new PublicTestRepositoryPsqlOracle()
    beans.publicGeneralProjectsRepository =
      new PublicGeneralProjectsRepositoryPsqlOracle()
  } else {
    //Importación e instancia de otros repositorios con BD diferentes
  }

  return beans
}

module.exports = buildBeans()
