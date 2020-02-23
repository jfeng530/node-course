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

const getNotes = require('./notes')

const notes = getNotes()

console.log(notes)