const fs = require('fs')
// import/load 'fs' module and saves return value to const 'fs'

fs.writeFileSync('notes.txt', 'My name is Jacky.')
// first arg: string => filename, second arg: string => data