"use strict";

const _serializeSingleLicense = (license) => {
  return {
    id: license.id,
    content: license.content,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) throw new Error("Expect data to be not undefined nor null");
    if (Array.isArray(data)) return data.map(_serializeSingleLicense);
    return _serializeSingleLicense(data);
  }
};
