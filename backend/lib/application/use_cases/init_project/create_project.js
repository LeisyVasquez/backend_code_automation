"use strict";
const fs = require("fs");
const fileWithNameDependencies = fs.readFileSync(
  process.env.FILE_NAME_DEPENDENCIES,
  "utf-8"
);

const Project = require("../../../domain/gnr_projects/project");

module.exports = async (
  description,
  name,
  licenseId,
  nameRepository,
  urlRepository,
  nameBranchRepository,
  nameDatabase,
  dbPortId,
  dbHostId,
  nameUserDba,
  passwordUserDba,
  versionPackageJson,
  nameDocumentation,
  versionDocumentation,
  {
    gnrLicensesRepository,
    gnrDbPortsRepository,
    gnrDbHostsRepository,
    gnrProjectsRepository,
  }
) => {
  /*Validar que las claves foráneas si existan*/
  if (licenseId) {
    const license = await gnrLicensesRepository.getByFilter({ id: licenseId });
    if (license === null) return 432;
    if (!license) return false;
  }

  const dbPort = await gnrDbPortsRepository.getByFilter({ id: dbPortId });
  if (dbPort === null) return 433;
  if (!dbPort) return false;

  const dbHost = await gnrDbHostsRepository.getByFilter({ id: dbHostId });
  if (dbHost === null) return 434;
  if (!dbHost) return false;

  /*Validar que las restricciones únicas no se incumplan*/
  const checkNameExist = await gnrProjectsRepository.getByFilter({
    name,
  });
  if (checkNameExist) return 484;

  const checkNameUserDBAExist = await gnrProjectsRepository.getByFilter({
    nameUserDba,
  });
  if (checkNameUserDBAExist) return 485;

  const checkNameDatabaseExist = await gnrProjectsRepository.getByFilter({
    nameDatabase,
  });
  if (checkNameDatabaseExist) return 486;

  const checkNameRepositoryExist = await gnrProjectsRepository.getByFilter({
    nameRepository: nameRepository.toLowerCase(),
  });
  if (checkNameRepositoryExist) return 487;

  const checkURLRepositoryExist = await gnrProjectsRepository.getByFilter({
    urlRepository: urlRepository.toLowerCase(),
  });
  if (checkURLRepositoryExist) return 488;

  /*Validar que el nombre del repositorio no coincida con algún nombre de librería
   El nombre de las dependencias en el archivo de texto debe de estar en minúscula.
   y no debe de contener espacios*/
  const arrayNameDependencies = fileWithNameDependencies.split("\n");
  for (let i = 0; i < arrayNameDependencies.length; i++) {
    const line = arrayNameDependencies[i];
    const dependence = line.trim();
    if (dependence === nameRepository.toLowerCase()) return 489;
  }

  /* Creación de proyectos */
  const project = new Project(
    null,
    description,
    name,
    licenseId,
    nameRepository,
    urlRepository,
    nameBranchRepository,
    nameDatabase,
    dbPortId,
    dbHostId,
    nameUserDba,
    passwordUserDba,
    versionPackageJson,
    nameDocumentation,
    versionDocumentation
  );

  return await gnrProjectsRepository.persist(project);
};
