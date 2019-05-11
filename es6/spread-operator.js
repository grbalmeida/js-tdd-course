let front = ['react', 'vue', 'angular']
let back = ['python', 'ruby', 'nodejs']

let fullStack = front.concat(back)
let fullStackWithSpreadOperator = [...front, 'RxJS', ...back]

console.log([...'will'])
console.log(...front)
console.log(...back)
console.log(...fullStack)
console.log(...fullStackWithSpreadOperator)
