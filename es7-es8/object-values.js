const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5
}

console.log(Object.values(animals))
console.log(Object.values(animals).reduce((accumulator, current) => accumulator + current))
