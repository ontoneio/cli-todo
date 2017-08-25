#!/usr/bin/env node

const list = require('./commands/list')
const add = require('./commands/add')
const complete = require('./commands/complete')
const remove = require('./commands/delete')

const firstParam = process.argv.slice[2]
const secondParam = process.argv.slice[3]

switch (firstParam) {
    case 'add':
        add(secondParam)        
        break;
    case 'complete':
        complete(secondParam)        
        break;
    case 'delete':
        remove(secondParam)
        break;
    case 'list':
        list(secondParam)
        break;
    default:
        console.log("Invalid Argument");
}