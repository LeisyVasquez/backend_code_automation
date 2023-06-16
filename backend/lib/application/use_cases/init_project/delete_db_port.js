"use strict";

module.exports = async (id, { gnrDbPortsRepository, gnrD }) => {
  const dbPort = await gnrDbPortsRepository.getByFilter({ id });
  if (dbPort === null) return 432;
  if (!dbPort) return false;

  //Verificar que este puerto no se encuentre asociado a un proyecto
//   const project = await fuCategoryItemRepository.getByFilter({
//     itemId: id,
//   });
//   if (project) return 441;

  return await gnrDbPortsRepository.remove(id);
};
