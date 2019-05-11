let object = {
  name: 'Willian',
  age: 26
}

let proxy = new Proxy(object, {
  get(target, name) {
    console.log('Someone is asking for the name')
    return target[name]
  },

  set(target, name, value) {
    console.log('Someone is changing the name')
    target[name] = value
  }
})

console.log(proxy.name)
proxy.name = 'Jonas'
console.log(proxy.name)

console.log(object)
