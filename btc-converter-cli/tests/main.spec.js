const exec = require('child_process').exec
const expect = require('chai').expect

const btcConverter = './src/main.js'
const pkg = require('../package.json')

describe('Main CLI', () => {
  it('Should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (error, stdout, stderr) => {
      if(error) throw error
      expect(stdout.replace('\n', '')).to.equal(pkg.version)
      done()
    })
  })

  it('Should return the description when the btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (error, stdout, stderr) => {
      if(error) throw error
      expect(stdout.includes('Convert Bitcoin to any currency defined.')).to.be.true
      done()
    })
  })

  it('Should return the currency option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (error, stdout, stderr) => {
      if(error) throw error
      expect(stdout.includes('--currency')).to.be.true
      done()
    })
  })

  it('Should return the amount option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (error, stdout, stderr) => {
      if(error) throw error
      expect(stdout.includes('--amount')).to.be.true
      done()
    })
  })
})
