'use strict'
const Joi = require('joi')
const {
  fetchGeneralResponseStatusCodes
} = require('../../application/utilities/general_functions')
const {
  publicgeneralProjectsScheme
} = require('../../application/utilities/schemes/public')
const publicGeneralprojectsController = require('../controllers/public_general.projects_controller')
const { responseIdNotFoundScheme } = require('../../application/utilities/schemes/general')

module.exports = {
  name: 'public_general.projects',
  version: '1.0.0',
  register: async server => {
    server.route([{
      method: 'POST',
      path: '/public_general.projects',
      handler: publicGeneralprojectsController.create, options: {
        description: 'Create general project', tags: ['api', 'Public'],
        validate: {
          payload: Joi.object({
            id: Joi.number().integer().required(),
            description: Joi.string().max(100),
            name: Joi.string().max(200).required(),
            license: Joi.string().max(4000),
            nameRepository: Joi.string().max(214).required(),
            urlRepository: Joi.string().max(1000).uri().required(),
            nameBranchRepository: Joi.string().max(255).required(),
            nameDatabase: Joi.string().max(63).required(),
            hostDatabase: Joi.string().max(39).ip().required(),
            portDatabase: Joi.number().integer().required(),
            nameUserDba: Joi.string().max(63).required(),
            passwordUserDba: Joi.string().max(4000).required(),
            versionPackageJson: Joi.string().max(20),
            nameDocumentation: Joi.string().max(200).required(),
            versionDocumentation: Joi.string().max(20).required(),
            createdAt: Joi.date().required(),
            updatedAt: Joi.date().required(),
          }).label('general_projects_create_payload_post')
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              201: {
                description: 'Project successfully created',
                schema: publicgeneralProjectsScheme
              },
              ...fetchGeneralResponseStatusCodes()
            }
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/public_general.projects/get_by_name/{name}',
      handler: publicGeneralprojectsController.getByname,
      options: {
        description: 'Get project by name',
        tags: ['api', 'Public'],
        validate: {
          params: Joi.object({
            name: Joi.string().max(200).required()
          }).label('general_projects_get_by_name_params_get')
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              200: {
                description: 'Project successfully obtained',
                schema: publicgeneralProjectsScheme
              },
              ...fetchGeneralResponseStatusCodes()
            }
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/public_general.projects',
      handler: publicGeneralprojectsController.find,
      options: {
        description: 'Get projects',
        tags: ['api', 'Public'],
        plugins: {
          'hapi-swagger': {
            responses: {
              200: {
                description: 'Projects successfully obtained',
                schema: Joi.array().items(publicgeneralProjectsScheme).label('general_projects_find_response_200')
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
