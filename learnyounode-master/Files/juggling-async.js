// in this we have to make sure that the data of first url comes first

// we will put the result of  that  data in a aray

const http = require('http');
const bl = require('bl');
const results = []
let count = 0;


const fetchDataHttp = (index) => {


    http.get(process.argv[2+index], (response) => {

        response.pipe(bl( (err, data) => {
            if(err)
                return console.error(err)

            results[index] = data.toString()
            count++;

            if(count === 3)
            printData();
        } ))

        
    })
}

for(let i=0; i<3; i++)
{
    fetchDataHttp(i)
}

const printData =( ) => {
    for(let i=0; i<3; i++)
    {
       console.log(results[i]) 
    }
}
