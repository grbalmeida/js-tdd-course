function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

export function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber
}

function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}

function div(firstNumber, secondNumber) {
  if(secondNumber === 0) {
    throw new TypeError('Can not divide by zero')
  }

  return firstNumber / secondNumber
}

export { multiplication, div }

export default sum
