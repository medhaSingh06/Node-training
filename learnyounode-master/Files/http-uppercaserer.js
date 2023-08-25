// post
// return the data recivied in the post in uppercase

const map = require('through2-map')
const http = require('http');


const server = http.createServer((req, res) => {

     if(req.method !== 'POST')
        return res.end("No post")

        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
          })).pipe(res)
})


server.listen(Number(process.argv[2]))

