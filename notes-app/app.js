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
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const notes = getNotes()
// console.log(notes)

// console.log(validator.isEmail('email.com'))
// console.log(validator.isURL('https/mead.io'))

// const success = chalk.green.bold.inverse
// console.log(success('Success!'))

// process.argv => Arguments from inputs
// const command = process.argv[2]

// Customize yargs version
yargs.version('1.1.0')

// if (command === 'add') {
//   console.log('Adding note...')
// } else if (command === 'remove') {
//   console.log('Removing note...')
// }

// Create 'add' command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Title of note',
      demandOption: true, // forces 'title' to be required
      type: 'string' // forces datatype to be a 'string'
    },
    body: {
      describe: 'Body of note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create 'remove' commmand
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note...')
  }
})

// Create 'list' command
yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: function () {
    console.log('Listing out all notes...')
  }
})

// Create 'read' command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note...')
  }
})

yargs.parse() // parsing arguments with config details