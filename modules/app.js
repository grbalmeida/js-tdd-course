import react from 'react'
import reactDOM from 'react-dom'
import { union as junction, uniq as single } from 'ramda'
import sum, { subtraction, multiplication, div as division } from './utils'

const firstArray = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]
const secondArray = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]
const thirdArray = junction(firstArray, secondArray)
const fourthArray = single(firstArray)

console.log(thirdArray)
console.log(fourthArray)
console.log(sum(10, 20))
console.log(subtraction(10, 5))
console.log(multiplication(3, 2))
console.log(division(10, 2))

try {
  division(10, 0)
} catch(e) {
  console.log(e.message)
}
