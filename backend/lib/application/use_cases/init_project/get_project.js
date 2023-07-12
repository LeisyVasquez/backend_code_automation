"use strict";

module.exports = async (id, { gnrProjectsRepository }) => {
  const [project] = await gnrProjectsRepository.getByFilter({ id });
  return project;
};
