import { expect } from 'chai'
import fizzbuzz, { sum, subtraction, multiplication, division } from '../src/main.js'

describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('Should exist the method `sum`', () => {
      expect(sum).to.exist
    })

    it('Should exists the method `subtraction`', () => {
      expect(subtraction).to.exist
      expect(subtraction).to.be.a.function
    })

    it('Should exists the method `multiplication`', () => {
      expect(multiplication).to.exist
      expect(multiplication).to.be.a.function
    })

    it('Should exists the methodo `division`', () => {
      expect(division).to.exist
      expect(multiplication).to.be.a.function
    })
  })

  describe('Sum', () => {
    it('Should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })
  })

  describe('Subtraction', () => {
    it('Should return 4 when `subtraction(6, 2)`', () => {
      expect(subtraction(6, 2)).to.be.equal(4)
    })

    it('Should return -4 when `subtraction(6, 10)`', () => {
      expect(subtraction(6, 10)).to.be.equal(-4)
    })
  })

  describe('Multiplication', () => {
    it('Should return 4 when `multiplication()`', () => {
      expect(multiplication(2, 2)).to.be.equal(4)
    })
  })

  describe('Division', () => {
    it('Should return 2 when `division(4, 2)`', () => {
      expect(division(4, 2)).to.be.equal(2)
    })

    it('Should return `Can not divide by zero` when divide by zero', () => {
      expect(division(4, 0)).to.be.equal('Can not divide by zero')
    })
  })
})

describe('FizzBuzz', () => {
  it('Should return `Fizz` when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz')
    expect(fizzbuzz(6)).to.be.equal('Fizz')
  })

  it('Shoud return `Buzz` when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz')
    expect(fizzbuzz(10)).to.be.equal('Buzz')
  })

  it('Should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz')
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz')
  })

  it('Should return the number when non-multiple', () => {
    expect(fizzbuzz(7)).to.be.equal(7)
    expect(fizzbuzz(8)).to.be.equal(8)
  })
})
