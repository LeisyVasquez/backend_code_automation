'use strict'

module.exports = async (accessToken, { accessManager }) => {
  const decoded = await accessManager.decode(accessToken)
  if (!decoded) throw new Error('Invalid access token')
  return { uid: decoded.uid }
}