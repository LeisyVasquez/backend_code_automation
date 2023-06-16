"use strict";

module.exports = async (id, number, { gnrDbPortsRepository }) => {
  //Verificar que el id si exista
  const dbPortBefore = await gnrDbPortsRepository.getByFilter({ id });
  if (dbPortBefore === null) return 432;
  if (!dbPortBefore) return false;

  //Faltaría agregar la validación de que no se pueda actualizar
  //en caso de que ya este asociado a un proyecto 
   
  //Verificar que no se incumpla restricción única
  const checkNumberExist = await gnrDbPortsRepository.getByFilter({
    number,
  });
  if (checkNumberExist) return 484;

  return await gnrDbPortsRepository.update(id, { number });
};
