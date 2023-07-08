"use strict";

const DbHosts = require("../../../domain/gnr_db_hosts/db_hosts");

module.exports = async (url, { gnrDbHostsRepository }) => {
  //Verificar que no se incumpla restricción única
  const checkUrlExist = await gnrDbHostsRepository.getByFilter({
    url: url.toLowerCase(),
  });
  if (checkUrlExist) return 484;

  const dbHosts = new DbHosts(null, url, null, null);
  return await gnrDbHostsRepository.persist(dbHosts);
};
