// create a raw tcp server---- net

// port---[2]
// data and tim

const net = require('net');

const addZero =(i) => {
    
        return (i<10 ? '0' : '') + i
}
const currentTime =() => {
    const date =new Date()

    return date.getFullYear() + '-' + 
            addZero(date.getMonth()+1) + '-' +
            addZero(date.getDate()) + ' ' +
            addZero(date.getHours()) + ":" + 
            addZero(date.getMinutes()) 

}

const server = net.createServer( (socket) => {

    socket.end(currentTime() + '\n')
})

server.listen(Number(process.argv[2]))