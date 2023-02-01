const express = require("express")
const router = express.Router()

const birthday = require("./routes/birthday")
const puzzle = require("./routes/puzzle")
const code = require("./routes/code")

/**
 * 
 * @param { import("express").Express } app 
 */

function API(app) {
    app.use("/api", router)

    router.use("/birthday", birthday)
    router.use("/code", code)

    app.use("/puzzle", puzzle)
}

module.exports = API
