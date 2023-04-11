const moment = require('moment-timezone')
const Boom = require('@hapi/boom')
const crypto = require('crypto-js')

const {
  response503Scheme,
  response400Scheme,
  response401Scheme,
  response500Scheme,
  response412Scheme
} = require('./schemes/general')

exports.generateCurrentDate = async () => {
  const dateCurrent = await moment()
  return new Date(
    Date.UTC(
      dateCurrent.format('YYYY'),
      dateCurrent.format('MM') - 1,
      dateCurrent.format('DD'),
      dateCurrent.format('HH'),
      dateCurrent.format('mm'),
      dateCurrent.format('ss')
    )
  )
}

exports.getAccesToken = authorizationHeader => {
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer '))
    throw new Boom.Boom(null, { statusCode: 401 })
  return authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '')
}

//Verify if param: object is an real object 
exports.isObject = (object) => {
  try {
    if (typeof object === 'object' && !Array.isArray(object) && (new Date(object).toString() === 'Invalid Date')) {
      return true;
    } else return false
  } catch (err) {
    return false;
  }
}

//Convert the object keys in format snake case
exports.convertCamelToSnakeCase = object => {
  let result = {}
  for (const property in object) {
    const newProperty = property.replace(
      /[A-Z]/g,
      letter => `_${letter.toLowerCase()}`
    )
    if (this.isObject(object[property])) {
      result[newProperty] = this.convertCamelToSnakeCase(object[property])
    } else {
      result[newProperty] = object[property]
    }
  }
  return result
}

exports.fetchGeneralResponseStatusCodes = () => {
  return {
    204: {
      description: 'There is no information to return, the content is empty.'
    },
    400: {
      description: 'Body or params are incorrectly sent',
      schema: response400Scheme
    },
    409: {
      description: 'User email not found'
    },
    412: {
      description: 'Token Id expired',
      schema: response412Scheme
    },
    503: {
      description: 'Service Unavailable',
      schema: response503Scheme
    },
    401: {
      description: 'Unauthorized',
      schema: response401Scheme
    },
    500: {
      description: 'Unknown fatal error',
      schema: response500Scheme
    }
  }
}

//Revisar que esta función si se use 
exports.validateAccess = (
  authorizedRoleIds,
  currentRoleId,
  isWithSuperUser,
  currentSuperUser
) => {
  if (isWithSuperUser) {
    if (currentSuperUser) return true
    else return false
  } else if (Array.isArray(authorizedRoleIds)) {
    let resultValidate = false
    authorizedRoleIds.map(roleId => {
      if (roleId === currentRoleId) resultValidate = true
    })
    return resultValidate
  } else {
    return false
  }
}

exports.verifySignature = (receivedSignature, data, token, type) => {
  const payload = type ? `${JSON.stringify(data)}\u000a` : JSON.stringify(data)
  const hash = `sha256=${crypto.enc.Base64.stringify(
    crypto.HmacSHA256(payload, token)
  )}`
  return receivedSignature === hash
}

exports.compareTimeToken = time => {
  const currenDate = moment()
    .tz('America/Bogota')
    .toDate()
  const timePlusResult = moment(time).add(process.env.TIME_TOKEN, 'seconds')
  return moment(currenDate).isBefore(timePlusResult)
}


exports.getParamsOfMessage = text => {
  let values = text.match(/({{)([A-Z]|[a-z]|_|[0-9]|-|[.])*(}})/g)
  return values !== null
    ? values.map(param => param.replace(/({{)|(}})/g, ''))
    : []
}

exports.replaceAll = (cadena, search, replace) =>
  cadena.replace(new RegExp(search, 'g'), replace)

exports.replaceParamsForMessage = (paramsList, params, text) => {
  let textAux = text
  if (params) {
    paramsList.forEach(element => {
      if (params[`${element}`])
        textAux = this.replaceAll(
          textAux,
          `{{${element}}}`,
          params[`${element}`]
        )
      else textAux = this.replaceAll(textAux, `{{${element}}}`, '')
    })
  }
  textAux = textAux.replace(/({{)([A-Z]|[a-z]|_|[0-9]|-|[.])*(}})/g, '')
  return textAux
},

  exports.convertCamelToSnakeCaseValue = value => {
    return value?.replace(
      /[A-Z]/g,
      letter => `_${letter.toLowerCase()}`
    )
  }

exports.mergeObjects = (obj1, obj2) => {
  obj1 = this.convertCamelToSnakeCase(obj1)
  obj2 = this.convertCamelToSnakeCase(obj2)
  const merged = {};
  for (let key in obj1) {
    if (this.isObject(obj1[key]) && this.isObject(obj2[key])) {
      merged[key] = this.mergeObjects(obj1[key], obj2[key]);
    } else {
      merged[key] = obj1[key];
    }
  }
  for (let key in obj2) {
    if (obj1[key] === undefined) {
      merged[key] = obj2[key];
    }
  }
  return merged;
}