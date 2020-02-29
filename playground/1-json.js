const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // turns JS object into 'string'
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json') // buffer returned
const dataJSON = dataBuffer.toString() // converts buffer to string
const data = JSON.parse(dataJSON)
console.log(data.title)

// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author) // turns JSON back to JS object, attributes now accessible