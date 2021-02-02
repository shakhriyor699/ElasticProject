const fs = require('fs'),
    path = './gulp/tasks',
    arrayPathFiles = fs.readdirSync(path).map(cell => cell = `${path}/${cell}`)

module.exports = arrayPathFiles