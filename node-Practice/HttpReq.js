// http module---for creating http server and making http req


// 2- step--
// 1. create server
// 2. listen server

const http = require('http');

const server = http.createServer( (req, res) => {
    res.end("Hello")
    res.on('data', console.log)

})


server.listen(3000, () => {
    console.log("Server started")
})
