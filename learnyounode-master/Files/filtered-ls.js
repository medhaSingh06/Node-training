// we have to read all the files in that directory
// first argu--argv[2]-dir name
// second argu  - argv[3]--extenrsion
const fs = require('fs');
const path = require('path');

const dir = process.argv[2]
const file ='.'+ process.argv[3]
// console.log(file)
fs.readdir(dir, 'utf8', (err, data) => {
   
    
       data.forEach(val => {
            if(path.extname(val) === file)
                console.log(val)
        }  )
    
})