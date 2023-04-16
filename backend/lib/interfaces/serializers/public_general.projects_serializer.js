'use strict'

const _serializeGeneralProject = GeneralProject => {
  return {
    id: GeneralProject.id,
    description: GeneralProject.description,
    name: GeneralProject.name,
    license: GeneralProject.license,
    nameRepository: GeneralProject.name_repository,
    urlRepository: GeneralProject.url_repository,
    nameBranchRepository: GeneralProject.name_branch_repository,
    nameDatabase: GeneralProject.name_database,
    hostDatabase: GeneralProject.host_database,
    portDatabase: GeneralProject.port_database,
    nameUserDba: GeneralProject.name_user_dba,
    passwordUserDba: GeneralProject.password_user_bba,
    versionPackageJson: GeneralProject.version_package_json,
    nameDocumentation: GeneralProject.name_documentation,
    versionDocumentation: GeneralProject.version_documentation,
    createdAt: GeneralProject.created_at,
    updatedAt: GeneralProject.updated_at
  }
}

module.exports = class {
  serialize(data) {
    if (!data) throw new Error('Expect data to be not undefined nor null')
    if (Array.isArray(data)) return data.map(_serializeGeneralProject)
    return _serializeGeneralProject(data)
  }
}

