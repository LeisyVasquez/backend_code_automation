'use strict'

module.exports = (uid, { accessManager }) => {
  return accessManager.revokeToken(uid);
}
