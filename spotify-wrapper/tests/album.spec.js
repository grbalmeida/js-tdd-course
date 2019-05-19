import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index'

describe('Album', () => {
  let spotify
  let stubedFetch
  let promise

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    })
    stubedFetch = sinon.stub(global, 'fetch')
    promise = stubedFetch.returnsPromise()
  })

  afterEach(() => {
    stubedFetch.restore()
  })

  describe('Smoke tests', () => {
    it('Should have spotify.album.getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist
    })

    it('Should have spotify.album.getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist
    })

    it('Should have spotify.album.getTracks method', () => {
      expect(spotify.album.getTracks).to.exist
    })
  })

  describe('spotify.album.getAlbum', () => {
    it('Should call fetch method', () => {
      const album = spotify.album.getAlbum()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')

      const otherAlbum = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk')
    })

    it('Should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' })
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(album.resolveValue).to.be.eql({ album: 'name' })
    })
  })

  describe('spotify.album.getAlbums', () => {
    it('Should call fetch method', () => {
      const albums = spotify.album.getAlbums()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk'])
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk')
    })

    it('Should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk'])
      albums.then(data => {
        expect(data).to.be.eql({ album: 'name' })
      })
    })
  })

  describe('spotify.album.getTracks', () => {
    it('Should call fetch method', () => {
      const tracks = spotify.album.getTracks()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
        expect(stubedFetch).to.have.been
          .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks')
    })

    it('Should return the correct data from Promise', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
      tracks.then(data => {
        expect(data).to.be.eql({ album: name })
      })
    })
  })
})
