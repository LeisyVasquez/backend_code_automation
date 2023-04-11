'use strict'

const Boom = require('@hapi/boom')
const createTest = require('../../application/use_cases/test/create_test')
const getTestByCampo1 = require('../../application/use_cases/test/get_test_by_campo1')
const deleteTest = require('../../application/use_cases/test/delete_test')
const updateTest = require('../../application/use_cases/test/update_test')
const listTests = require('../../application/use_cases/test/list_tests')

module.exports = {
  async create (request, h) {
    //Context
    const serviceLocator = request.server.app.serviceLocator

    //Input
    const { campo1, campo2 } = request.payload

    //Treatment
    const test = await createTest(campo1, campo2, serviceLocator)

    //Output
    if (!test) return new Boom.Boom(undefined, { statusCode: 503 })
    return h
      .response(serviceLocator.publicTestSerializer.serialize(test))
      .code(201)
  },

  
  async getByCampo1 (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    //Input
    const { campo1 } = request.params

    // Treatment
    const test = await getTestByCampo1(campo1, serviceLocator)
    console.log(test)
    //Output
    if (test === null) return h.response().code(204)
    if (!test) return new Boom.Boom(undefined, { statusCode: 503 })
    return h
    .response(serviceLocator.publicTestSerializer.serialize(test))
  }, 

  async find (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Treatment
    const tests = await listTests(serviceLocator)

    //Output
    if (tests === null) return h.response().code(204)
    if (!tests) return new Boom.Boom(undefined, { statusCode: 503 })
    return h
    .response(serviceLocator.publicTestSerializer.serialize(tests))
  }, 

  async delete (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    //Input
    const { id } = request.params

    //Treatment
    const test = await deleteTest(id, serviceLocator)

    //Output
    if (!test) return new Boom.Boom(undefined, { statusCode: 503 })
    if (test === 432)
      return new Boom.Boom('Id not found', { statusCode: 432 })
    return h.response('Test Deleted').code(200)
  },

  async update (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    //Input
    const { id } = request.params
    const fields = request.payload

    // Treatment
    const test = await updateTest(id, fields, serviceLocator)

    //Output
    if (!test) return new Boom.Boom(undefined, { statusCode: 503 })
    if (test === 432)
      return new Boom.Boom('Id not found', { statusCode: 432 })
    return serviceLocator.publicTestSerializer.serialize(test)
  }
}
