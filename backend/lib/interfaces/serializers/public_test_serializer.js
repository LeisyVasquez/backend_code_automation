'use strict'

const _serializeTest = test => {
  return {
    id: test.id,
    campo1: test.campo1, 
    campo2: test.campo2
  }
}

module.exports = class {
  serialize (data) {
    if (!data) throw new Error('Expect data to be not undefined nor null')
    if (Array.isArray(data)) return data.map(_serializeTest)
    return _serializeTest(data)
  }
}
