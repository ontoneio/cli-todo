const path = require('path')
const fs = require('fs')
const taskFilePath = path.resolve("./taskFile.json")

const exit = error => { 
    console.error(error)
    process.exit(1)
}

const isValidJSON = () => {
    console.log(fs.existsSync(taskFilePath))
    return fs.existsSync(taskFilePath)
}


const readJSONfile = () => {
    fs.readFile(taskFilePath, 'UTF-8',(error, json) => {
        if (error) { console.error(error) }
        else {console.log(JSON.parse(json)) }
    })
}

module.exports = {
    
}

// Invoking functions
// checkJSONExists()
isValidJSON()

readJSONfile()