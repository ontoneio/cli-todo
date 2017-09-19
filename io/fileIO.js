const path = require('path')
const fs = require('fs')

const taskFile = path.resolve("./cli-todo/taskFile.json")

const exit = error => { 
    console.error(error)
    process.exit(1)
}

const readJSONFile = callback => { 
    fs.readFile(taskFile, (error, json) => {
        if (error) {
            if(error.message.includes("ENOENT")) {
                callback([])
            }
            else {
                exit(error)
            }
        }
        else {
            callback(JSON.parse(json))
        }           
    })    
}

const writeJSONFile = 

module.exports = {
    read: readJSONFile
}