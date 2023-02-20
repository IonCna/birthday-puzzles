const StatusService = require("../../../services/status.service")

const service = new StatusService()

/**
 * 
 * @param { import("express").Request } req 
 * @param { import("express").Response } res 
 * @param { import("express").NextFunction } next 
 */

async function getPuzzleStates(req, res, next) {
    const progress = await service.getGlobalStatus()
    res.locals.progress = progress.sort((a,b) => a.id-b.id)
    next()
}

module.exports = getPuzzleStates