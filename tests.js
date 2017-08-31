const test = require('tape')
const fixFactory = require('fixture-factory')
const faker = require('faker')


const list = require('./commands/list')
const add = require('./commands/add')
const complete = require('./commands/complete')
const remove = require('./commands/delete')

const testModel = {
    mainCommand: './task',
    commands: ['list', 'add', 'complete','delete'],
    fakeTask: () => {
        const taskStr = 'Do ' + faker.lorem.sentence()
        return taskStr
    }   
}

fixFactory.register('addTest', testModel)
const addTestFixture = fixFactory.generate('addTest')



console.log(addTestFixture)






// test('Tests for valid argument', (testObj) => {
//     testObj.plan()



    
// })




