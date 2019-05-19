import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
sinonStubPromise(sinon)
chai.use(sinonChai)

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index'

describe('SpotifyWrapper Library', () => {
  it('Should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({})
    expect(spotify).to.have.been.an.instanceof(SpotifyWrapper)
  })

  it('Should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla'
    })
    expect(spotify.apiURL).to.be.equal('blabla')
  })

  it('Should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({})
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1')
  })

  it('Should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo'
    })
    expect(spotify.token).to.be.equal('foo')
  })

  describe('request method', () => {
    let stubedFetch
    let promise

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch')
      promise = stubedFetch.returnsPromise()
    })

    afterEach(() => {
      stubedFetch.restore()
    })

    it('Should have request method', () => {
      const spotify = new SpotifyWrapper({})
      expect(spotify.request).to.exist
    })

    it('Should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo'
      })

      spotify.request('url')
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the right url passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo'
      })

      spotify.request('url')
      expect(stubedFetch).to.have.been
        .calledWith('url')
    })

    it('Should call fetch with the right headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo'
      })

      const headers = {
        headers: {
          Authorization: 'Bearer foo'
        }
      }

      spotify.request('url')
      expect(stubedFetch).to.have.been
        .calledWith('url', headers)
    })
  })
})
