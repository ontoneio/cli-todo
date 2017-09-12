const helpers = require('../utils')
const test = require('tape')

const list = require('../commands/list')
const add = require('../commands/add')
const complete = require('../commands/complete')
const remove = require('../commands/delete')

const validCommands = ['add','complete','delete','list']


test('Tests for valid command', function(testObj) {
    testObj.plan(1)

    const validTest = validCommands.every(function (element) {
        return helpers.isValid.call(element)
    })
    
    testObj.equal(validTest, true)
    
})

    



