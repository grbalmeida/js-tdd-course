function makeSandwich(bread, cheese, sauce) {
  console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`)
}

const ingredients = ['White', 'Cheddar', 'Barbecue']

makeSandwich(...ingredients)
