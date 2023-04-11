'use strict'

module.exports = class {
  persist (domain) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
  update (id, fields, condition) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
  getByFilter (filter) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
  remove (id) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
  find () {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
}
