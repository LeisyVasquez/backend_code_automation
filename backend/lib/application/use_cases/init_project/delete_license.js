"use strict";

module.exports = async (
  id,
  { gnrLicensesRepository, gnrProjectsRepository }
) => {
  const license = await gnrLicensesRepository.getByFilter({ id });
  if (license === null) return 432;
  if (!license) return false;

  //Verificar que esta licencia no se encuentre asociada a un proyecto
  const project = await gnrProjectsRepository.getByFilter({ licenseId: id });
  if (project) return 441;

  return await gnrLicensesRepository.remove(id);
};
