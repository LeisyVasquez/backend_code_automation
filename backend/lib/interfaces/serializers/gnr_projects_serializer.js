"use strict";

const _serializeSingleProject = (project) => {
  return {
    id: project.id,
    description: project.description,
    name: project.name,
    licenseId: project.license_id,
    nameRepository: project.name_repository,
    urlRepository: project.url_repository,
    nameBranchRepository: project.name_branch_repository,
    nameDatabase: project.name_database,
    dbPortId: project.db_port_id,
    dbHostId: project.db_host_id,
    nameUserDba: project.name_user_dba,
    versionPackageJson: project.version_package_json,
    nameDocumentation: project.name_documentation,
    versionDocumentation: project.version_documentation,
    createdAt: project.created_at,
    updatedAt: project.updated_at,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) throw new Error("Expect data to be not undefined nor null");
    if (Array.isArray(data)) return data.map(_serializeSingleProject);
    return _serializeSingleProject(data);
  }
};
