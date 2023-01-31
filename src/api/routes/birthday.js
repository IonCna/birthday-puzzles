const express = require("express")
const DateService = require("../../services/Date.service")

const router = express.Router()

const service = new DateService()

router.get("/get", async (req, res) => {
    try {
        const data = await service.getDate()
        res.status(200).json({ data })
    } catch (error) {
        console.error(error)
        res.status(404).json({ message: "date not found" })
    }
})

router.post("/set", async (req, res) => {
    try {
        const { date } = req.body
        await service.setDate(date)

        res.status(200).json({ message: "fecha creada" })
    } catch (error) {
        console.error(error)
        res.status(404).json({ message: "algo salio mal" })
    }
})

module.exports = router
