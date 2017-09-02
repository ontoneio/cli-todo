const { expect } = require('chai') 
const helpers = require('./todo-test-fixtures');

const list = require('../commands/list')
const add = require('../commands/add')
const complete = require('../commands/complete')
const remove = require('../commands/delete')

describe('Tests commmands for To-Do list', function () {

    context('Tests for invalid command', function () {
        
        // const validCommands = ['add', 'complete', 'delete', 'list']
        // const invalidCommands = ['flowers', 'yourname', 'eyeball', 'water']
        const validCommand1 = 'add'
        const invalidCommand1 = 'flower'
     
        it('should test for valid command', function () {
            expect(helpers.valid(validCommand1)).to.equal(true)
            expect(helpers.valid(invalidCommand1)).to.equal(false)
        
        })
 







    

        
    })








    
})


