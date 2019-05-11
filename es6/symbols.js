let foo = Symbol('name')
let bar = Symbol('name')

let object = {
  [Symbol('name')]: 'Willian',
  [Symbol('age')]: 26,
  city: 'Dublin'
}

console.log(Object.keys(object))
console.log(Object.getOwnPropertySymbols(object))

const symbols = Object.getOwnPropertySymbols(object)

const data = symbols.map(symbol => object[symbol])

console.log(data)

// Prevents conflict of keys in objects
