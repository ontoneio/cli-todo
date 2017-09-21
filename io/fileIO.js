const path = require('path')
const fs = require('fs')
const taskFilePath = path.resolve("./cli-todo/taskFile.json")

const exit = error => { 
    console.error(error)
    process.exit(1)
}

const checkJSONExists = () => {
    console.log(fs.existsSync(taskFilePath))
    return fs.existsSync(taskFilePath)
}
const isJSONexecutable = callback => {
    fs.access(taskFilePath, (error, data) => {
        if(error) {
             console.log(error) 
        }
        else { 
            callback(data)
        }
    })
}

const readJSONfile = (error, data) => {
    fs.readFile(JSON.parse(taskFilePath))
}

module.exports = {
    exists: checkJSONExists
}

// Invoking functions

checkJSONExists()

isJSONexecutable()