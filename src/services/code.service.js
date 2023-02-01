const { code } = require("../libs/mongoose")

class CodeService {
    async getCode() {
        const data = await code.findOne({ id: 0 })
        return data
    }
}

module.exports = CodeService

