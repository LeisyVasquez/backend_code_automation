'use strict'

const accessManagerAbstract = require('../../application/security/access_manager_abstract')
const admin = require('../../application/utilities/firebase_config')
const { auth_user, auth_role } = require('../orm/sequelize/relational_models')

module.exports = class extends accessManagerAbstract {
  constructor () {
    super()
  }

  decode (accesToken) {
    return admin.auth().verifyIdToken(accesToken, true)
  }

  async getUserRol (uid) {
    try {
      const seqGetUser = await auth_user.findOne({
        where: { info: { uid } },
        include: [
          {
            model: auth_role,
            as: 'role'
          }
        ]
      })
      if (!seqGetUser) return null
      return {
        auth_user_id: seqGetUser.id,
        role_id: seqGetUser.role_id,
        role_name: seqGetUser.role.info.role_name
      }
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async revokeToken (uid) {
    return await admin
      .auth()
      .revokeRefreshTokens(uid)
      .then(() => {
        return admin.auth().getUser(uid)
      })
      .then(userRecord => {
        return new Date(userRecord.tokensValidAfterTime).getTime() / 1000
      })
      .then(timestamp => {
        return true
      })
      .catch(err => {
        console.log(err)
        return false
      })
  }
}
