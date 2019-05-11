let map = new Map()

map.set('Willian', 26)
map.set('Jonas', 22)
map.set('Godoy', 30)

console.log(map.size)
console.log(map.get('Willian'))
console.log(map.has('Godoy'))

const it = map.values()

console.log(it.next())
console.log(it.next())
console.log(it.next())
