'use strict'

const _serializeGeneralProject = GeneralProject => {
  return {
    id: GeneralProject.id,
    descripcion: GeneralProject.descripcion,
    name: GeneralProject.name,
    license: GeneralProject.license,
    name_repository: GeneralProject.nameRepository,
    url_repository: GeneralProject.urlRepository,
    name_branch_repository: GeneralProject.nameBranchRepository,
    name_database: GeneralProject.nameDatabase,
    host_database: GeneralProject.hostDatabase,
    port_database: GeneralProject.portDatabase,
    name_user_dba: GeneralProject.nameUserDba,
    password_user_dba: GeneralProject.passwordUserDba,
    version_package_json: GeneralProject.versionPackageJson,
    name_documentation: GeneralProject.nameDocumentation,
    version_documentation: GeneralProject.versionDocumentation,
    created_at: GeneralProject.createdAt,
    updated_at: GeneralProject.updatedAt
  }
}

module.exports = class {
  serialize(data) {
    if (!data) throw new Error('Expect data to be not undefined nor null')
    if (Array.isArray(data)) return data.map(_serializeGeneralProject)
    return _serializeGeneralProject(data)
  }
}

