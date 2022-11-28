const express = require("express")
const router = express.Router()

const birthday = require("./routes/birthday")

/**
 * 
 * @param { import("express").Express } app 
 */

function API(app) {
    app.use("/api", router)

    router.use("/birthday", birthday)
}

module.exports = API
