const express = require("express")
const CodeService = require("../../services/code.service")

const router = express.Router()

const service = new CodeService()

router.post("/", async (req, res) => {
    try {
        const { code } = req.body
        const access_code = await service.getCode();

        code === access_code.code 
            ? res.status(200).json({ message: "code correct", status: 0 }) 
            : res.status(200).json({ message: "code incorrect", status: 1 })

    } catch (error) {
        console.error(error)
        res.status(404).json({ message: "code not found" })
    }
})

module.exports = router