module.exports = class {
  decode (accessToken) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  getUserRol (uid) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  revokeToken (uid) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
}
