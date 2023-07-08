"use strict";

module.exports = async (id, { gnrDbHostsRepository }) => {
  const dbHosts = await gnrDbHostsRepository.getByFilter({ id });
  if (dbHosts === null) return 432;
  if (!dbHosts) return false;

  //Falta verificar que este host no se encuentre asociado a un proyecto

  return await gnrDbHostsRepository.remove(id);
};
