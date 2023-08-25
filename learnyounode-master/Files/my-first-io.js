
const fs = require('fs');


const readFile = fs.readFileSync(process.argv[2], 'utf8')

console.log(readFile.split('\n').length-1)