const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // turns JS object into 'string'
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // buffer returned
// const dataJSON = dataBuffer.toString() // converts buffer to string
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Jacky'
user.age = 25

const newUser = JSON.stringify(user)
fs.writeFileSync('1-json.json', newUser)

// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author) // turns JSON back to JS object, attributes now accessible