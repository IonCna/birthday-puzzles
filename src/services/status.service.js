const { status } = require("../libs/mongoose")

class StatusService {
    async getGlobalStatus() {
        const data = await status.find()
        return data
    }

    async getOne(id) {
        const data = await status.findOne({ id: id })
        return data
    }
}

module.exports = StatusService
