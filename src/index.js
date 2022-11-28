const express = require("express")
const path = require("path")
const fs = require("fs")

const { PORT, URL } = require("./config")
const API = require("./api")

const app = express()
const date_path = path.resolve(__dirname, "../", "date")

app.use(express.json())

const views_path = path.join(__dirname, "views")

app.set("view engine", "pug")
app.set("views", views_path)

const static_path = path.resolve(__dirname, "static")
app.use(express.static(static_path))

let isDate= false;

/**
 * 
 * @param { import("express").Request } req 
 * @param { import("express").Response } res 
 * @param { import("express").NextFunction } next 
 */

function getDate(req, res, next) {
    const files = fs.readdirSync(path.resolve(__dirname, "../"))

    for(let i = 0; i < files.length; i++) {
        if (files[i] == "date") {
            isDate = true
            res.locals.date = (fs.readFileSync(date_path)).toString()
            break
        } else isDate = false
    }

    next()
}

app.get("/", getDate ,(req, res) => {
    if (isDate == false) return res.render("index", { title: "Regalo" })

    const date = new Date(res.locals.date)
    const actualDate = new Date()

    const saved = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate() + 1
    }

    const actual = {
        year: actualDate.getFullYear(),
        month: actualDate.getMonth(),
        day: actualDate.getDate()
    }

    console.table([saved, actual])

    if (
        actual.year == saved.year &&
        actual.month == saved.month &&
        actual.day == saved.day
    ) {
        return res.redirect(`${URL}/menu`)
    } else res.redirect(`${URL}/notNow`)
})

app.get("/menu", getDate, (req, res) => {
    if (isDate == false) return res.render("error/403")
    res.render("menu", { title: "Menu" })
})

app.get("/notNow", (req, res) => {
    res.render("error/notNow", { daysLeft: `${0} Días` })
})

API(app)

app.listen(PORT, () => console.log(`Server listening on port http://26.89.117.213:${PORT}`))
