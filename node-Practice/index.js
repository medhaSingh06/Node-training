
const fsPromises = require('fs').promises;


// using promises
const fileOperations = async () => {

    try {

        const data =  await fsPromises.readFile('./Hello.txt', 'utf8')
            console.log(data);

            await fsPromises.writeFile('./Hello.txt', 'File re-written')
            await fsPromises.appendFile('./Hello.txt', "File appended")
            await fsPromises.unlink('./Hello.txt')
        // const newFile  = await fsPromises.rename('./Hello.txt', './RenamedHello.txt')
        // console.log(newFile)
    }catch(err){
            console.error(err)
    }
}

fileOperations()

// fs.readFile('./Hello.txt', 'utf8', (err, data) => {

//     if(err) throw err;
//     console.log(data)
// })


// write file
// fs.writeFile( './Hello.txt', 'Hey it really nice to meet you',  (err) => {
//     if(err) throw err;

//     console.log("Successfully written")
// })

process.on('uncaughtException', (error) => {
    console.error(error)
    process.exit(0)
})