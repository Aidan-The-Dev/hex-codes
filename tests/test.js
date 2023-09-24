const hex = require('../source/hex')
const blue = hex('blue')
const red = hex('red')
const random = hex('random')
console.log(blue)
console.log(red)
console.log(random)
console.log(hex('orange'))
console.log(hex('aqua'))

const tohex = require('../source/tohex')

let color = tohex("darkblue")
console.log(color)

