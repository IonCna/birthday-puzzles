const express = require("express")
const path = require("path")

const { PORT, URL } = require("./config")
const [getDate] = require("./api/middleware")
const API = require("./api")

const app = express()

app.use(express.json())

const views_path = path.join(__dirname, "views")

app.set("view engine", "pug")
app.set("views", views_path)

const static_path = path.resolve(__dirname, "static")
app.use(express.static(static_path))

app.get("/", getDate, (req, res) => {
    const { isDate } = res.locals

    if (isDate == false) return res.render("index", { title: "Regalo" })

    const { saved, actual } = res.locals

    if (
        actual.year >= saved.year &&
        actual.month >= saved.month &&
        actual.day >= saved.day
    ) {
        res.redirect(`${URL}/menu`)
    } else {
        res.redirect(`${URL}/notNow`)
    }
})

app.get("/menu", getDate, (req, res) => {
    const { isDate } = res.locals
    if (isDate == false) return res.render("error/403")
    res.render("menu", {
        title: "Menu",
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        five: 0,
        sixth: 0
    })
})

app.get("/notNow", getDate, (req, res) => {
    const { isDate } = res.locals

    if (isDate == false) {
        return res.redirect("/")
    }

    const oneDay = 24 * 60 * 60 * 1000

    const { actual, saved } = res.locals

    const first = new Date(actual.year, actual.month, actual.day)
    const second = new Date(saved.year, saved.month, saved.day)


    const difDays = Math.round(Math.abs((first - second) / oneDay))

    const text = difDays < 2 ? `${difDays} Dia` : `${difDays} Días`

    if (difDays <= 0) return res.redirect("/menu")

    res.render("error/notNow", { title: "Not now", daysLeft: text })
})

API(app)

app.listen(PORT, () => console.log(`Server listening on port http://26.89.117.213:${PORT}`))
