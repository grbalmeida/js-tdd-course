class Animal {
  constructor(kind, sound) {
    this.kind = kind
    this.sound = sound
  }

  hello() {
    console.log(`${this.sound} I'm a ${this.kind}!`)
  }

  static info() {
    console.log('This is a class to create animals!')
  }

  get name() {
    console.log('My name is Jake!')
  }

  set nickname(nick) {
    this.nick = nick
  }
}

const dog = new Animal('dog', 'auau')
const cat = new Animal('cat', 'meow')

dog.hello()
cat.hello()
Animal.info()
dog.name
cat.name
dog.nickname = 'J'
console.log(dog.nick)
