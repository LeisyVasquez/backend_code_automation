'use strict'

module.exports = async (allowedRoleId, accessToken, { accessManager }) => {
  //Verifica que su token si sea correcto
  const decoded = await accessManager.decode(accessToken)
  if (!decoded) throw new Error('Invalid access token')

  //Obtiene el usuario de BD
  const userRole = await accessManager.getUserRol(decoded.uid)

  //Verifica que el usuario si se encuentre registrado
  if (userRole === null) return 409
  if (!userRole) return false

  //Verifica que si tenga el rol adecuado
  if (userRole.role_id === allowedRoleId)
    return {
      uid: decoded.uid,
      idRol: userRole.role_id,
      authUserId: userRole.auth_user_id,
      roleName: userRole.role_name
    }
  else throw new Error('Invalid access role')
}
