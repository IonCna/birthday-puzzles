const express = require("express")
const fs = require("fs")
const router = express.Router()

router.post("/", (req, res) => {
    const { date } = req.body
    fs.writeFileSync("date", date, () => console.log("data saved"))
    res.status(200)
})

module.exports = router
