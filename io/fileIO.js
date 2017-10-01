const path = require('path')
const fs = require('fs')
const taskFilePath = path.resolve("./taskFile.json")

const exit = error => { 
    console.error(error)
    process.exit(1)
}

const createJSONFile = (fileName, dataObj) => {
    let jsonFile = fileName + '.json'
    let jsonData = JSON.stringify(dataObj)

    fs.appendFile(jsonFile, jsonData ,(error) => {
        if(error) console.error(`No Data to append to ${jsonFile}`);
        
        console.log(`${jsonData} was appended to ${jsonFile}`);
        return jsonFile
    })
}

const isValidJSON = (filePath) => {
    console.log(fs.existsSync(filePath))
    return fs.existsSync(filePath)
}


const readJSONfile = () => {
    fs.readFile(taskFilePath, 'UTF-8',(error, json) => {
        if (error) { console.error(error) }
        else {console.log(JSON.parse(json)) }
    })
}



module.exports = {
    create: createJSONFile,
    isValid: isValidJSON
}

// Invoking functions

isValidJSON()
