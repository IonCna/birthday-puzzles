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
    res.render("error/inprogress")
})

router.get("/fifth", (req, res) => {
    res.render("error/inprogress")
})

router.get("/sixth", (req, res) => {
    res.render("error/inprogress")
})


module.exports = router