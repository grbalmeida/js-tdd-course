import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import * as spotify from '../src/index'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  let fetchedStub
  let promise

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch')
    promise = fetchedStub.returnsPromise()
  })

  afterEach(() => {
    fetchedStub.restore()
  })

  describe('Smoke Tests', () => {
    it('Should exist the search method', () => {
      expect(spotify.search).to.exist
    })

    it('Should exist the searchArtists method', () => {
      expect(spotify.searchArtists).to.exist
    })

    it('Should exist the searchAlbums method', () => {
      expect(spotify.searchAlbums).to.exist
    })

    it('Should exist the searchTracks method', () => {
      expect(spotify.searchTracks).to.exist
    })

    it('Should exist the searchPlaylists method', () => {
      expect(spotify.searchPlaylists).to.exist
    })
  })

  describe('Generic Search', () => {
    it('Should call fetch function', () => {
      const artists = spotify.search()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should receive the correct url to fetch', () => {
      context('Passing one type', () => {
        const artists = spotify.search('Incubus', 'artist')

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

        const albums = spotify.search('Incubus', 'album')

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
      })

      context('Passing more than one type', () => {
        const artistsAndAlbuns = spotify.search('Incubus', ['artist', 'album'])

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
      })
    })

    it('Should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' })
      const artists = spotify.search('Incubus', 'artist')

      expect(artists.resolveValue).to.be.eql({ body: 'json' })
    })
  })

  describe('searchArtists', () => {
    it('Should call fetch function', () => {
      const artists = spotify.searchArtists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const artists = spotify.searchArtists('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const otherArtists = spotify.searchArtists('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    })
  })

  describe('searchAlbums', () => {
    it('Should call fetch function', () => {
      const albums = spotify.searchAlbums('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const albums = spotify.searchAlbums('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const otherAlbums = spotify.searchAlbums('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    })
  })

  describe('searchTracks', () => {
    it('Should call fetch function', () => {
      const tracks = spotify.searchTracks('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const tracks = spotify.searchTracks('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=tracks')

      const otherTracks = spotify.searchTracks('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=tracks')
    })
  })

  describe('searchPlaylists', () => {
    it('Should call fetch function', () => {
      const playlists = spotify.searchPlaylists('Incubus')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('Should call fetch with the correct URL', () => {
      const playlists = spotify.searchPlaylists('Incubus')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const otherPlaylists = spotify.searchPlaylists('Muse')
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    })
  })
})
