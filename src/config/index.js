require("dotenv").config()

const config = {
    PORT: process.env.PORT,
    URL: process.env.URL,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    CODE: process.env.code
}

module.exports = config