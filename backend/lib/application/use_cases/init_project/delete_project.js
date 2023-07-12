"use strict";

module.exports = async (id, { gnrProjectsRepository }) => {
  const project = await gnrProjectsRepository.getByFilter({ id });
  if (project === null) return 432;
  if (!project) return false;

  return await gnrProjectsRepository.remove(id);
};
