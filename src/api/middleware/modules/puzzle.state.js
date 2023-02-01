const StatusService = require("../../../services/status.service")

const service = new StatusService()

/**
 * 
 * @param { import("express").Request } req 
 * @param { import("express").Response } res 
 * @param { import("express").NextFunction } next 
 */

async function getPuzzleStates(req, res, next) {
    res.locals.progress = await service.getGlobalStatus()
    next()
}

module.exports = getPuzzleStates