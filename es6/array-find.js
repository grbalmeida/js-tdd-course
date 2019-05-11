const data = [
  {
    name: 'Willian',
    age: 26,
    city: 'Dublin'
  },
  {
    name: 'Jonas',
    age: 22,
    city: 'Cologne'
  }
]

const sampleArray = [4, -5, 0, -1]

const underZero = sampleArray.find(number => number < 0)
const underZeroIndex = sampleArray.findIndex(number => number < 0)
const will = data.find(person => person.name === 'Willian')
const jonas = data.find(person => person.name === 'Jonas')
const jonasIndex = data.findIndex(person => person.name === 'Jonas')

console.log(underZero)
console.log(underZeroIndex)
console.log(will)
console.log(jonas)
console.log(jonasIndex)
