"use strict";

const _serializeSingleDbPort = (dbPort) => {
  return {
    id: dbPort.id,
    number: dbPort.number,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) throw new Error("Expect data to be not undefined nor null");
    if (Array.isArray(data)) return data.map(_serializeSingleDbPort);
    return _serializeSingleDbPort(data);
  }
};
