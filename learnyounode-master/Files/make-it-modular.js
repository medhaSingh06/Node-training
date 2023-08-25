// call the function

const  lf  = require("./mymodule");

// return err and data

lf(process.argv[2], process.argv[3] ,(err,list) => {
    if(err)
        return console.log(err)
    
    list.forEach(file => {
        console.log(file)
    });
} )