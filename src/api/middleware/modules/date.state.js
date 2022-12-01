const fs = require("fs")
const path = require("path")

const root = path.resolve(__dirname, "../../../../")

/**
 * 
 * @param { import("express").Request } req 
 * @param { import("express").Response } res 
 * @param { import("express").NextFunction } next 
 */

function getDate(req, res, next) {
    const files = fs.readdirSync(root)
    for (let i = 0; i < files.length; i++) {
        if (files[i] == "date") {
            res.locals.isDate = true
            res.locals.date = (fs.readFileSync(`${root}/date`)).toString()
            break
        } else res.locals.isDate = false
    }

    const date  = new Date(res.locals.date)

    const saved = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate() + 1
    }

    res.locals.saved = saved

    const actualDate = new Date()

    const actual = {
        year: actualDate.getFullYear(),
        month: actualDate.getMonth(),
        day: actualDate.getDate()
    }

    res.locals.actual = actual

    next()
}

module.exports = getDate