const express = require("express")
const StatusService = require("../../services/status.service")
const router = express.Router()

const service = new StatusService()

router.put("/", async (req, res) => {
    try {
        const { index, complete } = req.query
        let isComplete = Boolean(complete)
        await service.update(parseInt(index), isComplete)
    
        res.status(200).json({ message: "status updated" })
    } catch (error) {
        res.status(500).json({ message: "no se pudo actualizar" })
    }
})

module.exports = router
