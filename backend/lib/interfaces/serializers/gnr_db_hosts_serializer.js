"use strict";

const _serializeSingleDbHost = (dbHost) => {
  return {
    id: dbHost.id,
    url: dbHost.url,
    createdAt: dbHost.created_at,
    updatedAt: dbHost.updated_at,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) throw new Error("Expect data to be not undefined nor null");
    if (Array.isArray(data)) return data.map(_serializeSingleDbHost);
    return _serializeSingleDbHost(data);
  }
};
