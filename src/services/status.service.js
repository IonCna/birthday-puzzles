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

    async update(id, complete) {
        const data = await status.updateOne({id: id, complete: complete })
        return data
    }
}

module.exports = StatusService
