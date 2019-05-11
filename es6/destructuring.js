const data = {
  name: 'Willian',
  surname: 'Justen',
  age: 25,
  blog: 'https://willianjusten.com.br',
  social: {
    twitter: '@Willian_Justen',
    facebook: '/willianjusten'
  }
}

const { name, surname, age, blog, social: { twitter, facebook }} = data

const { facebook: fb } = data.social

const { city = 'Dublin' } = data

console.log(name)
console.log(surname)
console.log(age)
console.log(blog)
console.log(twitter)
console.log(facebook)
console.log(fb)
console.log(city)
