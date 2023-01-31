const { date } = require("../libs/mongoose")

class DateService {
    async getDate() {
        const data = await date.findOne({ id: 0 })

        if(!data) return null

        return data
    }

    async setDate(user_date) {
        const isDate = await this.getDate()

        if(isDate) return { message: "fecha ya existente", date: isDate.date }

        const data = await date.create({ id: 0, date: user_date })

        if (data) {
            return { message: "fecha creada" }
        }

        throw new Error("Algo salio mal al crear la fecha")
    }
}

module.exports = DateService
