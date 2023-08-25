const http = require('http');
const bl = require('bl');

// in this question --
// first line---number of characters recieved by the server
// second line --complete data

http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
        if(err)
            return console.error(err)

            if(data)
            {
                const finaldata = data.toString();
                console.log(finaldata.length)
                console.log(finaldata)
            }
    }))
})