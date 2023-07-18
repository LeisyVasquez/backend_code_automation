'use strict'

module.exports = class {
  constructor (id, url, created_at, updated_at) {
    this.id = id
    this.url = url
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
