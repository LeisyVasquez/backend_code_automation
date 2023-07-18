'use strict'

module.exports = async ({gnrDbPortsRepository}) => {
    return await gnrDbPortsRepository.find();
}