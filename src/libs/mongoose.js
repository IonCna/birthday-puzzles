const mongoose = require("mongoose")

const { DB_USER, DB_PASSWORD } = require("../config")

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@birthday.05z6shq.mongodb.net/test`;

(async function () {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(URI)

        console.log("Server connected to Database")
    } catch (error) {
        console.error(error)
        throw new Error("[DATABASE ERROR]", error)
    }
})();

const statusSchema = new mongoose.Schema({
    id: Number,
    complete: Boolean,
    difficulty: String,
    code: String,
    redirects: String
});

const dateSchema = new mongoose.Schema({
    date: String,
    id: Number
})

const codeSchema = new mongoose.Schema({
    code: String,
    id: Number
})

const status = mongoose.model("status", statusSchema);

(async function () {
    try {
        const db = await status.find()

        const { length } = db

        if (length < 1) {
            const { data } = require("../config/default.json")

            await status.insertMany(data)
            console.log("STATUS DEFAULT WAS CREATED")
        }
    } catch (error) {
        console.error(error)
    }
})();

const date = mongoose.model("date", dateSchema)
const code = mongoose.model("codes", codeSchema)

module.exports = { status, date, code };
