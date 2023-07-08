"use strict";

const DbPort = require("../../../domain/gnr_db_ports/db_port");

module.exports = async (number, { gnrDbPortsRepository }) => {
  //Verificar que no se incumpla restricción única
  const checkNumberExist = await gnrDbPortsRepository.getByFilter({
    number
  });
  if (checkNumberExist) return 484;

  const dbPort = new DbPort(null, number);
  return await gnrDbPortsRepository.persist(dbPort);
};
