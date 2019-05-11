function* generatorNames() {
  console.log('Calling first name')
  yield 'Willian'
  console.log('Calling second name')
  yield 'Jonas'
  console.log('Calling third name')
  yield 'Gabriel'
}

const names = generatorNames()

console.log(names.next())
console.log(names.next())
console.log(names.next())
