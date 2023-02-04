const express = require("express")
const CodeService = require("../../services/code.service")
const router = express.Router()

const service = new CodeService()

router.get("/", async (req, res) => {
    const { code } = req.query
    access_code = await service.getCode()

    if (code != access_code.code) {
        return res.render("error/403")
    }

    res.render("gift")
})

module.exports = router