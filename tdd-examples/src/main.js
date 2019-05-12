const sum = (firstNumber, secondNumber) => firstNumber + secondNumber
const subtraction = (firstNumber, secondNumber) => firstNumber - secondNumber
const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber

const division = (firstNumber, secondNumber) => {
  return (secondNumber === 0) ? 'Can not divide by zero' : firstNumber / secondNumber
}

const fizzbuzz = (number) => {
  if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
  if(number % 3 === 0) return 'Fizz'
  if(number % 5 === 0) return 'Buzz'

  return number
}

export {
  sum,
  subtraction,
  multiplication,
  division
}

export default fizzbuzz
