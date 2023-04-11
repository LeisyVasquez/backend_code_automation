'use strict'

module.exports = async (id, fields, { publicTestRepository }) => {
  const updateTest = await publicTestRepository.update(id, fields, {
    id
  })
  if(updateTest === null) return 432
  return updateTest
  
}
