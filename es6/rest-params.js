function multiply(multiplier, ...args) {
  return args.map(arg => arg * multiplier)
}

console.log(multiply(2, 1, 2, 3))
