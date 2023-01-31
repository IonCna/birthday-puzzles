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
    puzzle_id: Number,
    name: String,
    status: String,
});

const dateSchema = new mongoose.Schema({
    date: String,
    id: Number
})

const status = mongoose.model("status", statusSchema);
const date = mongoose.model("date", dateSchema)

module.exports = { status, date };
