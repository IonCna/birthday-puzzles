const express = require("express")
const router = express.Router()

router.get("/first", (req, res) => {
    res.render("puzzle/first")
})

router.get("/second", (req, res) => {
    res.render("puzzle/second")
})

router.get("/third", (req, res) => {
    res.render("puzzle/third")
})

router.get("/fourth", (req, res) => {
    res.render("error/inProgress")
})

router.get("/fifth", (req, res) => {
    res.render("puzzle/fifth")
})

router.get("/sixth", (req, res) => {
    res.render("puzzle/sixth")
})


module.exports = router