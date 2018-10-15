var Chapter3 = require('./Chapter3.js')

console.group('All for One')

var result = ['17', '30', '45'].map(parseInt)
console.log(result)
var result = ['17', '30', '45'].map(Chapter3.unary(parseInt))
console.log(result)

console.groupEnd('All for One')

//////////////////

console.group('One on One')

var words = '   Now is the time for all...  '.split( /\s|\b/ )
var words = words.filter(Chapter3.identity)
console.log(words)

console.groupEnd('One on One')

//////////////////

console.group('Unchanging one')

var promise =  new Promise(resolve => {
  setTimeout(() => { resolve('data') }, 0)
})

promise.then(console.log).then(Chapter3.constant(1)).then(console.log)

console.groupEnd('Unchanging one')
