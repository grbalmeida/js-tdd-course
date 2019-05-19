import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import * as spotify from '../src/index'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Album', () => {
  let stubedFetch
  let promise

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch')
    promise = stubedFetch.returnsPromise()
  })

  afterEach(() => {
    stubedFetch.restore()
  })

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(spotify.getAlbum).to.exist
    })

    it('Should have getAlbums method', () => {
      expect(spotify.getAlbums).to.exist
    })

    it('Should have getAlbumsTracks method', () => {
      expect(spotify.getAlbumsTracks).to.exist
    })
  })

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      const album = spotify.getAlbum()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const album = spotify.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')

      const otherAlbum = spotify.getAlbum('4aawyAB9vmqN3uQ7FjRGTk')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk')
    })

    it('Should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' })
      const album = spotify.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(album.resolveValue).to.be.eql({ album: 'name' })
    })
  })

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      const albums = spotify.getAlbums()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const albums = spotify.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk'])
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk')
    })

    it('Should return the correct data from Promise', () => {
      const albums = spotify.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk'])
      albums.then(data => {
        expect(data).to.be.eql({ album: 'name' })
      })
    })
  })

  describe('getAlbumsTracks', () => {
    it('Should call fetch method', () => {
      const tracks = spotify.getAlbumsTracks()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const tracks = spotify.getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy')
        expect(stubedFetch).to.have.been
          .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks')
    })

    it('Should return the correct data from Promise', () => {
      const tracks = spotify.getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy')
      tracks.then(data => {
        expect(data).to.be.eql({ album: name })
      })
    })
  })
})
