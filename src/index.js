const express = require("express")
const path = require("path")

const { PORT, URL } = require("./config")
const [getDate, getPuzzleStates] = require("./api/middleware")
const API = require("./api")

const app = express()

app.use(express.json())

const views_path = path.join(__dirname, "views")

app.set("view engine", "pug")
app.set("views", views_path)

const static_path = path.resolve(__dirname, "static")
app.use(express.static(static_path))

// start

app.get("/", getDate, (req, res) => {
    const { isDate } = res.locals.date

    if (!isDate) return res.render("index")

    res.redirect("/menu")
})

// menu

app.get("/menu", getDate, getPuzzleStates, (req, res) => {
    const { isDate, actual, saved } = res.locals.date
    if (!isDate) return res.render("error/403")

    if (
        actual.year <= saved.year &&
        actual.month <= saved.month &&
        actual.day < saved.day) {
        return res.redirect("/notNow")
    }

    const { progress } = res.locals
    res.render("menu", { title: "Menu", status: progress })
})

// fuera de tiempo

app.get("/notNow", getDate, (req, res) => {
    const { isDate, actual, saved } = res.locals.date

    if (!isDate) {
        return res.redirect("/")
    }

    const oneDay = 24 * 60 * 60 * 1000

    const first = new Date(actual.year, actual.month, actual.day)
    const second = new Date(saved.year, saved.month, saved.day)


    const difDays = Math.round(Math.abs((first - second) / oneDay))

    const text = difDays < 2 ? `${difDays} Dia` : `${difDays} Días`

    if (difDays <= 0) return res.redirect("/menu")

    res.render("error/notNow", { title: "Not now", daysLeft: text })
})

API(app)

app.listen(PORT, () => console.log(`Server listening on port ${URL}:${PORT}`))
