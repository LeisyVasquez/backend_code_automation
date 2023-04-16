'use strict'

module.exports = class {
  persist (domain) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  getByFilter (filter) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
}
