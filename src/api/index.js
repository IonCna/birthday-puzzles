const express = require("express")
const router = express.Router()

const birthday = require("./routes/birthday")
const puzzle = require("./routes/puzzle")

/**
 * 
 * @param { import("express").Express } app 
 */

function API(app) {
    app.use("/api", router)

    router.use("/birthday", birthday)
    app.use("/puzzle", puzzle)
}

module.exports = API
