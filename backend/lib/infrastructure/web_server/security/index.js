'use strict'

module.exports = {
  name: 'security',
  version: '1.0.0',
  register: server => {
    server.auth.scheme('scheme_public', require('./scheme_public'))
    server.auth.scheme('scheme_basic', require('./scheme_basic'))

    server.auth.strategy('public', 'scheme_public')
    server.auth.strategy('basic', 'scheme_basic')
  }
}
