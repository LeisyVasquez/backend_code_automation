"use strict";

module.exports = async (
  id,
  { gnrDbHostsRepository, gnrProjectsRepository }
) => {
  const dbHosts = await gnrDbHostsRepository.getByFilter({ id });
  if (dbHosts === null) return 432;
  if (!dbHosts) return false;

  //Verificar que este host no se encuentre asociado a un proyecto
  const project = await gnrProjectsRepository.getByFilter({ dbHostId: id });
  if (project) return 441;

  return await gnrDbHostsRepository.remove(id);
};
