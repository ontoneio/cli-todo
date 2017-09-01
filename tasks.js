#!/usr/bin/env node

const list = require('./commands/list')
const add = require('./commands/add')
const complete = require('./commands/complete')
const remove = require('./commands/delete')

const commandArg = process.argv[2]
const taskArg = process.argv.slice(3).join(" ")

// console.log('command is  '+commandArg + '\n Task Arg is  '+ taskArg )

switch (commandArg) {
    case 'add':
        // add(taskArg) 
        console.log(taskArg)       
        break;
    case 'complete':
        // complete(taskArg)
        console.log(taskArg)        
        break;
    case 'delete':
        // remove(taskArg)
        console.log(taskArg)
        break;
    case 'list':
        // list(taskArg)
        console.log(taskArg)
        break;
    default:
        console.log("Invalid Argument");
}