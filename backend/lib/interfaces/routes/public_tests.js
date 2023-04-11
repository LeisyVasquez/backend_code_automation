'use strict'
const Joi = require('joi')
const {
  fetchGeneralResponseStatusCodes
} = require('../../application/utilities/general_functions')
const {
  publicTestsScheme
} = require('../../application/utilities/schemes/public')
const publicTestsController = require('../controllers/public_tests_controller')
const { responseIdNotFoundScheme } = require('../../application/utilities/schemes/general')

module.exports = {
  name: 'public_test',
  version: '1.0.0',
  register: async server => {
    server.route([
      {
        method: 'POST',
        path: '/public_tests',
        handler: publicTestsController.create,
        options: {
          description: 'Create public tests',
          tags: ['api', 'Public'],
          validate: {
            payload: Joi.object({
              campo1: Joi.string().max(10).required(),
              campo2: Joi.number().integer().required()
            }).label('public_tests_create_payload_post')
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                201: {
                  description: 'Test successfully created',
                  schema: publicTestsScheme
                }, 
                ...fetchGeneralResponseStatusCodes()
              }
            }
          }
        }
      },
      {
        method: 'GET',
        path: '/public_tests/get_by_campo1/{campo1}',
        handler: publicTestsController.getByCampo1,
        options: {
          description: 'Get test by campo1',
          tags: ['api', 'Public'],
          validate: {
            params: Joi.object({
              campo1: Joi.string().max(15).required()
            }).label('public_tests_get_by_campo1_params_get')
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                200: {
                  description: 'Test successfully obtained',
                  schema: publicTestsScheme
                },
                ...fetchGeneralResponseStatusCodes()
              }
            }
          }
        }
      }, 
      {
        method: 'GET',
        path: '/public_tests',
        handler: publicTestsController.find,
        options: {
          description: 'Get tests',
          tags: ['api', 'Public'],
          plugins: {
            'hapi-swagger': {
              responses: {
                200: {
                  description: 'Tests successfully obtained',
                  schema: Joi.array().items(publicTestsScheme).label('public_tests_find_response_200') 
                },
                ...fetchGeneralResponseStatusCodes()
              }
            }
          }
        }
      }, 
      {
        method: 'DELETE',
        path: '/public_tests/{id}',
        handler: publicTestsController.delete,
        options: {
          description: 'Delete test',
          tags: ['api', 'public'],
          validate: {
            params: Joi.object({
              id: Joi.number().integer().required()
            }).label('public_tests_delete_params')
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                200: {
                  description: 'Item deleted'
                },
                432: {
                  description: 'Item id does not exist',
                  schema: responseIdNotFoundScheme(432)
                }, 
                ...fetchGeneralResponseStatusCodes()
              }
            }
          }
        }
      },
    ])
  }
}
