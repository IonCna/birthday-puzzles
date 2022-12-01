const fs = require("fs")
const path = require("path")

const files_path = path.resolve(__dirname, "modules")

const files = fs.readdirSync(files_path)

const plugins = []

files.map(name => {
    const plugin = require(`./modules/${name}`)
    plugins.push(plugin)
})

module.exports = plugins