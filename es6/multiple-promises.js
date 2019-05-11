const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ currency: 'euro', value: 3.50 })
  }, 2000)
})

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Ireland', 'England', 'Scotland'])
  }, 600)
})

Promise
  .all([currency, countries])
  .then(responses => {
    console.log(responses)
  })

Promise
  .race([currency, countries]) // Ignore the other promises
  .then(responses => {
    console.log(responses)
  })
