const express = require("express")
const StatusService = require("../../services/status.service")
const router = express.Router()

const service = new StatusService()

router.put("/", async (req, res) => {
    const { index, complete } = req.query
    await service.update(parseInt(index), complete)

    res.status(200).json({ message: "status updated" })
})

module.exports = router
