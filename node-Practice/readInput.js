// read input for node
// node doesn't have any input prompt
// use readline module




const readline = require('readline')

const r1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

r1.question("Enter your name", (name) => {
    console.log(`the name is ${name}`)
    r1.close();
})

r1.on("close", () => {
    console.log("INterface is closed")
    process.exit(0)
})