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
            descripcion: Joi.string().max(100),
            name: Joi.string().max(200).required(),
            license: Joi.string().max(4000),
            name_repository: Joi.string().max(214).regex(/^[a-z_]+$/).required(),
            url_repository: Joi.string().max(1000).uri().required(),
            name_branch_repository: Joi.string().max(255).required(),
            name_database: Joi.string().max(63).regex(/^[a-zA-Z_][a-zA-Z0-9_$]*$/).required(),
            host_database: Joi.string().max(39).ip().required(),
            port_database: Joi.number().integer().required(),
            name_user_dba: Joi.string().max(63).regex(/^[^0-9]\S*$/).required(),
            password_user_dba: Joi.string().max(4000).required(),
            version_packaje_json: Joi.string().max(20),
            name_documentation: Joi.string().max(200).required(),
            version_documentation: Joi.string().max(20).required(),
            created_at: Joi.date().required(),
            updated_at: Joi.date().required(),
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
