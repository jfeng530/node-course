// --- Importing Modules ---

// const fs = require('fs')
// // import/load 'fs' module and saves return value to const 'fs'

// // fs.writeFileSync('notes.txt', 'My name is Jacky.')
// // first arg: string => filename, second arg: string => data

// fs.appendFileSync('notes.txt', ' Testing append-file-sync')

// --- Importing Own Files ---

// const addFunc = require('./utils.js')
// // import from utils.js, save return values to const

// const sum = addFunc(4, -2)

// console.log(sum)

// --- Importing npm Modules ---
// Note: node currently does not support 'import', hence 'require' is used

// const validator = require('validator')
const getNotes = require('./notes')

const notes = getNotes()
console.log(notes)

// console.log(validator.isEmail('email.com'))
// console.log(validator.isURL('https/mead.io'))

const chalk = require('chalk')
const success = chalk.red.bold.inverse

console.log(success('Error!'))