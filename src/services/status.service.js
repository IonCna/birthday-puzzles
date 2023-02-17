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
        const item = await this.getOne(id)
        const { _id } = item

        await status.findByIdAndUpdate(_id, { complete })

    }
}

module.exports = StatusService
