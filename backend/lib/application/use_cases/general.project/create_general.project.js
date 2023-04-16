"use strict";

const GeneralProjects = require("../../../domain/public_general.projects/general.projects");

module.exports = async (
  id,
  description,
  name,
  license,
  nameRepository,
  urlRepository,
  nameBranchRepository,
  nameDatabase,
  hostDatabase,
  portDatabase,
  nameUserDba,
  passwordUserDba,
  versionPackageJson,
  nameDocumentation,
  versionDocumentation,
  createdAt,
  updatedAt,
  { publicGeneralProjectsRepository }
) => {
  const generalProjects = new GeneralProjects(
    id,
    description,
    name,
    license,
    nameRepository,
    urlRepository,
    nameBranchRepository,
    nameDatabase,
    hostDatabase,
    portDatabase,
    nameUserDba,
    passwordUserDba,
    versionPackageJson,
    nameDocumentation,
    versionDocumentation,
    createdAt,
    updatedAt
  );
  return await publicGeneralProjectsRepository.persist(generalProjects);
};
