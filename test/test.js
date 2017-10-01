const { exec } = require('child_process')
const expect = require('chai').expect()
const path = require('path')

const list = require('../commands/list')
const add = require('../commands/add')
const complete = require('../commands/complete')
const remove = require('../commands/delete')

const fileIO = require('../io/fileIO')
const testDataPath = path.resolve("./testData.json")

const testTasks = function() {
    return {
        "taskID": 
        "taskDescription": ,
        "taskPriority":


    }
}

describe('Tests fileIO.js functions', function() {
    
    context('createJSONFile()', function () {
        
        it('creates given file name in json format', function () {
                const validTest = fileIO.create.call('/TEST-FILE', )

                expect(validTest).to.equal('./TEST-FILE.json')
        })
    })
    


})


