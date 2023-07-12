"use strict";

const Joi = require("joi");
const gnrProjectsController = require("../controllers/gnr_projects_controller");
const {
  fetchGeneralResponseStatusCodes,
} = require("../../application/utilities/general_functions");
const {
  responseIdNotFoundScheme,
  responseUniqueViolatedScheme,
  responseBusinessRuleViolated,
} = require("../../application/utilities/schemes/general");
const { gnrProjects } = require("../../application/utilities/schemes/gnr");

module.exports = {
  name: "gnr_projects",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "POST",
        path: "/gnr_projects",
        handler: gnrProjectsController.create,
        options: {
          //auth: 'public',
          description: "Create project",
          tags: ["api", "Init project"],
          validate: {
            payload: Joi.object({
              description: Joi.string().max(100),
              name: Joi.string().max(200).required(),
              licenseId: Joi.number().integer().max(32767),
              nameRepository: Joi.string()
                .pattern(
                  /^[a-zA-Z_][a-zA-Z0-9_]*$/,
                  "projects_valid_name_repository"
                )
                .max(100)
                .required(),
              urlRepository: Joi.string()
                .pattern(
                  /^https?:\/\/(?:www\.)?github\.com\/.*\.git$/,
                  "projects_valid_url_repository"
                )
                .max(1000)
                .required(),
              nameBranchRepository: Joi.string()
                .pattern(/^\S+$/, "projects_valid_name_branch_repository")
                .max(250)
                .required(),
              nameDatabase: Joi.string()
                .pattern(
                  /^[a-zA-Z]+(_?[a-zA-Z]+)*$/,
                  "projects_valid_name_database"
                )
                .max(63)
                .required(),
              dbPortId: Joi.number().integer().max(32767).required(),
              dbHostId: Joi.number().integer().max(32767).required(),
              nameUserDba: Joi.string()
                .pattern(
                  /^[a-zA-Z]+(_?[a-zA-Z]+)*$/,
                  "projects_valid_name_user_dba"
                )
                .max(63)
                .required(),
              passwordUserDba: Joi.string().max(4000).required(),
              versionPackageJson: Joi.string()
                .pattern(
                  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
                  "projects_valid_version_package_json"
                )
                .max(20),
              nameDocumentation: Joi.string().max(200).required(),
              versionDocumentation: Joi.string()
                .pattern(
                  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
                  "projects_valid_version_documentation"
                )
                .max(20),
            }).label("gnr_projects_create_payload_post"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                201: {
                  description: "project successfully created",
                  schema: gnrProjects,
                },
                432: {
                  description: "license_id not found",
                  schema: responseIdNotFoundScheme(432),
                },
                433: {
                  description: "db_port_id not found",
                  schema: responseIdNotFoundScheme(433),
                },
                434: {
                  description: "db_host_id not found",
                  schema: responseIdNotFoundScheme(434),
                },
                484: {
                  description: "There is already a project with this name",
                  scheme: responseUniqueViolatedScheme(484),
                },
                485: {
                  description:
                    "There is already a project with this name user dba",
                  scheme: responseUniqueViolatedScheme(485),
                },
                486: {
                  description:
                    "There is already a project with this name database",
                  scheme: responseUniqueViolatedScheme(486),
                },
                487: {
                  description:
                    "There is already a project with this name repository",
                  scheme: responseUniqueViolatedScheme(487),
                },
                488: {
                  description:
                    "There is already a project with this url repository",
                  scheme: responseUniqueViolatedScheme(488),
                },
                489: {
                  description:
                    "The repository name field is not allowed because it is equal to the name of a dependency that will be used in the automation of the backend code.",
                  schema: responseBusinessRuleViolated(489),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "GET",
        path: "/gnr_projects",
        handler: gnrProjectsController.find,
        options: {
          //auth: 'public',
          description: "Get projects",
          tags: ["api", "Init project"],
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "projects successfully obtained",
                  schema: Joi.array()
                    .items(gnrProjects)
                    .label("gnr_projects_find_response_200"),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "GET",
        path: "/gnr_projects/{id}",
        handler: gnrProjectsController.get,
        options: {
          //auth: 'public',
          description: "Get a project by id",
          tags: ["api", "Init project"],
          validate: {
            params: Joi.object({
              id: Joi.number().integer().max(32767).required(),
            }).label("gnr_projects_get_params_get"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "project successfully obtained",
                  schema: gnrProjects,
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
      {
        method: "DELETE",
        path: "/gnr_projects/{id}",
        handler: gnrProjectsController.delete,
        options: {
          //auth: 'public',
          description: "Delete project",
          tags: ["api", "Init project"],
          validate: {
            params: Joi.object({
              id: Joi.number().integer().max(32767).required(),
            }).label("gnr_projects_delete_params_delete"),
          },
          plugins: {
            "hapi-swagger": {
              responses: {
                200: {
                  description: "project deleted",
                },
                432: {
                  description: "project id not exist",
                  schema: responseIdNotFoundScheme(432),
                },
                ...fetchGeneralResponseStatusCodes(),
              },
            },
          },
        },
      },
    ]);
  },
};
