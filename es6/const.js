const secretNumber = 28
console.log(secretNumber)

// secretNumber = 28 -> TypeError: Assignment to constant variable

const will = {
  name: 'Willian',
  age: 53
}

Object.freeze(will)

console.log(will)

will.age = 26

console.log(will)
