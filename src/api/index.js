const express = require("express")
const router = express.Router()

const birthday = require("./routes/birthday")
const puzzle = require("./routes/puzzle")
const code = require("./routes/code")
const gift = require("./routes/gift")
const status = require("./routes/status")

/**
 * 
 * @param { import("express").Express } app 
 */

function API(app) {
    app.use("/api", router)

    router.use("/birthday", birthday)
    router.use("/code", code)
    router.use("/status", status)

    app.use("/puzzle", puzzle)
    app.use("/gift", gift)
}

module.exports = API
