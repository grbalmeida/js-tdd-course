let mySet = new Set(['willian', 'jonas', 'godoy'])

console.log(mySet.size)

mySet.add('marcio')
mySet.add('marcio')

console.log(mySet.size)

mySet.delete('willian')
console.log(mySet.size)

console.log(mySet.has('willian'))

let it = mySet.values()

console.log(it.next())
console.log(it.next())

for(let name of it) {
  console.log(name)
}
