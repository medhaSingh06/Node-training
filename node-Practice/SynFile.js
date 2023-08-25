const fs = require('fs')


const readFile = fs.readFileSync('./Files/input.txt', 'utf8' )
console.log(readFile)

const writeFile = fs.writeFileSync('./Files/output.txt','hello')
// console.log(writeFile)

