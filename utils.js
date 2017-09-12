const faker = require('faker')


function isValidCommand(command) {
    const validCommands = ['add', 'complete', 'delete', 'list']    
    if (validCommands.indexOf(command !== -1)){
        throw new Error(console.log())
    }
}


function generateTestFixture(command) {

    const testInstance = {
        programName: './tasks',
        commands: command,
        taskToDo: 'Do ' + faker.lorem.sentence()        
    }
    return testInstance.programName +' '+ command +' '+ testInstance.taskToDo
}

module.exports = {
    isValid: isValidCommand
}