let firstObject = {
  name: 'Willian',
  age: 26
}

let secondObject = {
  name: 'Jonas',
  age: 22
}

let weakMap = new WeakMap()

weakMap.set(firstObject, 'Willian Info')
weakMap.set(secondObject, 'Jonas Info')

console.log(weakMap)
