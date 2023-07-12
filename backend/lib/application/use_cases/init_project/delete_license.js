"use strict";

module.exports = async (id, { gnrLicensesRepository }) => {
  const license = await gnrLicensesRepository.getByFilter({ id });
  if (license === null) return 432;
  if (!license) return false;

  return await gnrLicensesRepository.remove(id);
};
