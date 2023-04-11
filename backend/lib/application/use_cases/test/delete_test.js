'use strict'

module.exports = async (id, { publicTestRepository }) => {
  const test = await publicTestRepository.getByFilter({ id })
  if (test === null) return 432
  if (!test) return test

  return await publicTestRepository.remove(id)
}
