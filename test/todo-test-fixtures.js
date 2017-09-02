const faker = require('faker')


function validCommand(command) {
   if (command === 'add'|'list'|'delete'|'complete') {
        return true
    }  else {
        return false
    } 
}


function generateTestFixture(command) {
    if(!validCommand(command)) {
        throw new Error(`Command not valid, Please use 'add', 'list', 'delete', 'complete'.`)
    }
    const testInstance = {
        programName: './tasks',
        commands: command,
        taskToDo: 'Do ' + faker.lorem.sentence()        
    }
    return testInstance.programName +' '+ command +' '+ testInstance.taskToDo
}

module.exports = {
    valid: validCommand
}