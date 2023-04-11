'use strict'

const Boom = require('@hapi/boom')
const revokeToken = require('../../application/use_cases/authorization/revoke_token')
const verifyBasicAccess = require('../../application/use_cases/authorization/verify_basic_access')
const verifyAccessWithRole = require('../../application/use_cases/authorization/verify_access_with_role')
const { ROLES_ID } = require('../../infrastructure/config/constants')
const {
  getAccesToken,
  verifySignature,
  // compareTimeToken
} = require('../../application/utilities/general_functions')

module.exports = {
  async accessManagerBasic (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const { uid } = await verifyBasicAccess(accessToken, serviceLocator)

      // Output
      return h.authenticated({
        credentials: { uid }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_basic'))
    }
  },

  async accessManagerLogistics (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const checkAccess = await verifyAccessWithRole(
        ROLES_ID.LOGISTICS_AND_PURCHASING_ID,
        accessToken,
        serviceLocator
      )

      // Output
      if (!checkAccess) return new Boom.Boom(null, { statusCode: 503 })
      if (checkAccess === 409)
        return new Boom.Boom('Conflict', { statusCode: 409 })

      const { uid, idRol, authUserId, roleName } = checkAccess
      return h.authenticated({
        credentials: { uid },
        artifacts: { authUserId, idRol, roleName }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_logistics'))
    }
  },

  async accessManagerBusinessConsultant (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const checkAccess = await verifyAccessWithRole(
        ROLES_ID.BUSINESS_CONSULTANT,
        accessToken,
        serviceLocator
      )

      // Output
      if (!checkAccess) return new Boom.Boom(null, { statusCode: 503 })
      if (checkAccess === 409)
        return new Boom.Boom('Conflict', { statusCode: 409 })

      const { uid, idRol, authUserId, roleName } = checkAccess
      return h.authenticated({
        credentials: { uid },
        artifacts: { authUserId, idRol, roleName }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_logistics'))
    }
  },

  async accessManagerEducationalCoordinator (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const checkAccess = await verifyAccessWithRole(
        ROLES_ID.EDUCATIONAL_COORDINATOR,
        accessToken,
        serviceLocator
      )

      // Output
      if (!checkAccess) return new Boom.Boom(null, { statusCode: 503 })
      if (checkAccess === 409)
        return new Boom.Boom('Conflict', { statusCode: 409 })

      const { uid, idRol, authUserId, roleName } = checkAccess
      return h.authenticated({
        credentials: { uid },
        artifacts: { authUserId, idRol, roleName }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_logistics'))
    }
  },

  async accessManagerCurriculumDesigner(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const checkAccess = await verifyAccessWithRole(
        ROLES_ID.CURRICULUM_DESIGNER,
        accessToken,
        serviceLocator
      )

      // Output
      if (!checkAccess) return new Boom.Boom(null, { statusCode: 503 })
      if (checkAccess === 409)
        return new Boom.Boom('Conflict', { statusCode: 409 })

      const { uid, idRol, authUserId, roleName } = checkAccess
      return h.authenticated({
        credentials: { uid },
        artifacts: { authUserId, idRol, roleName }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_logistics'))
    }
  },

  async accessManagerBusinessCoordinator(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const checkAccess = await verifyAccessWithRole(
        ROLES_ID.BUSINESS_COORDINATOR,
        accessToken,
        serviceLocator
      )

      // Output
      if (!checkAccess) return new Boom.Boom(null, { statusCode: 503 })
      if (checkAccess === 409)
        return new Boom.Boom('Conflict', { statusCode: 409 })

      const { uid, idRol, authUserId, roleName } = checkAccess
      return h.authenticated({
        credentials: { uid },
        artifacts: { authUserId, idRol, roleName }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_logistics'))
    }
  },

  async accessManagerSuperUser (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const accessToken = getAccesToken(request.headers.authorization)

    // Treatment
    try {
      const checkAccess = await verifyAccessWithRole(
        ROLES_ID.SUPER_USER_ID,
        accessToken,
        serviceLocator
      )

      // Output
      if (!checkAccess) return new Boom.Boom(null, { statusCode: 503 })
      if (checkAccess === 409)
        return new Boom.Boom('Conflict', { statusCode: 409 })

      const { uid, idRol, authUserId, roleName } = checkAccess
      return h.authenticated({
        credentials: { uid },
        artifacts: { authUserId, idRol, roleName }
      })
    } catch (err) {
      if (err.code == 'auth/id-token-expired')
        throw new Boom.Boom('Token expired', { statusCode: 412 })
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_super_user'))
    }
  },

  async logout (request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator

    // Input
    const uid = request.params.uid

    const resultRevokeToken = await revokeToken(uid, serviceLocator)
    // Output
    if (resultRevokeToken === false) {
      return new Boom.Boom('Revoke unsucessfuly', {
        statusCode: 401
      })
    }
    return h.response('Log out successfully')
  },

  async accessManagerPublic (request, h) {
    const signature = request.headers['public-signature']
    const { time, code } = request.headers
    const { path } = request
    if (signature) {
      const isValid = verifySignature(
        signature,
        { time, code, path },
        process.env.SECRET_TOKEN_PUBLIC,
        false
      )
      if (!isValid)
        throw new Boom.boomify(Boom.unauthorized(null, 'scheme_public'))
      // const isValidTime = compareTimeToken(time);
      // if(!isValidTime) throw new Boom.boomify(Boom.unauthorized(null, 'scheme_public'));
      return h.authenticated({
        credentials: signature
      })
    } else {
      throw new Boom.boomify(Boom.unauthorized(null, 'scheme_public'))
    }
  }
}
