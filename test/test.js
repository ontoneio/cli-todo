const { exec } = require('child_process')
const test = require('tape')

const list = require('../commands/list')
const add = require('../commands/add')
const complete = require('../commands/complete')
const remove = require('../commands/delete')

