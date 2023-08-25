// all the work 
// function


// export--three argument
// dir name
// externsion-name
// callback


const fs = require('fs');
const path = require('path');


module.exports = function(dir, fileString, callback) {
    
    fs.readdir(dir, 'utf-8', (err, data) => {

        if(err)
        return  callback(err)


        // here for each doesn't work 
        // as in callback, we will be passing an array, 
        // filter  creates and array
        // while for each just iterate over it.

        const list = data.filter((val) =>  path.extname(val) === '.' + fileString)

        callback(null,list)
    })

}