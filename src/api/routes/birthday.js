const express = require("express")
const fs = require("fs")
const router = express.Router()

router.post("/", (req, res) => {
    const { date } = req.body

    fs.writeFileSync("date", date, () => console.log("data saved"))

    res.redirect("/api/birthday/redirect")
})

module.exports = router
