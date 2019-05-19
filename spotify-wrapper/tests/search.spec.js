import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import SpotifyWrapper from '../src/index'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  let spotify
  let fetchedStub
  let promise

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    })
    fetchedStub = sinon.stub(global, 'fetch')
    promise = fetchedStub.returnsPromise()
  })

  afterEach(() => {
    fetchedStub.restore()
  })

  describe('Smoke Tests', () => {
    it('Should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist
    })

    it('Should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist
    })

    it('Should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist
    })

    it('Should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist
    })
  })

  describe('searchArtists', () => {
    it('Should call fetch function', () => {
      const artists = spotify.search.artists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const artists = spotify.search.artists('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const otherArtists = spotify.search.artists('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    })
  })

  describe('spotify.search.albums', () => {
    it('Should call fetch function', () => {
      const albums = spotify.search.albums('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const albums = spotify.search.albums('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const otherAlbums = spotify.search.albums('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    })
  })

  describe('spotify.search.tracks', () => {
    it('Should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const tracks = spotify.search.tracks('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

      const otherTracks = spotify.search.tracks('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
    })
  })

  describe('spotify.search.playlists', () => {
    it('Should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const playlists = spotify.search.playlists('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const otherPlaylists = spotify.search.playlists('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    })
  })
})
