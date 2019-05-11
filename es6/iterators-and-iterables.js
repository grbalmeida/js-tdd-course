let text = 'Ireland' // iterable

let iterator = text[Symbol.iterator]() // iterator

for(let counter = 0; counter <= text.length; counter++) {
  console.log(iterator.next())
}

for(let letter of text) {
  console.log(letter)
  if(letter === 'a') break
}
