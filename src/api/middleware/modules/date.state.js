const DateService = require("../../../services/Date.service")

const service = new DateService()

/**
 * @param { import("express").Request } req 
 * @param { import("express").Response } res 
 * @param { import("express").NextFunction } next 
 */

async function getDate(req, res, next) {
    try {
        const data = await service.getDate()

        const { date } = data

        const saved_date = new Date(date)
        const actual_date = new Date()

        const actual = {
            year: actual_date.getFullYear(),
            month: actual_date.getMonth(),
            day: actual_date.getDate()
        }

        const saved = {
            year: saved_date.getFullYear(),
            month: saved_date.getMonth(),
            day: saved_date.getDate() + 1
        }

        res.locals.date = { isDate: true, actual, saved }

        next()
    } catch (error) {
        console.log("no hay fecha guardada")
        res.locals.date = { isDate: false }
        next()
    }
}

module.exports = getDate