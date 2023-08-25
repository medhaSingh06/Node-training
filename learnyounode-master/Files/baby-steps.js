// console.log(process.argv0)
// console.log(process.arch)
// console.log(process.channel)

const arguments = process.argv
let sum =0
for(let i=2; i<arguments.length; i++)
{
    sum += +arguments[i]
}

console.log(sum)