global.fetch = require('node-fetch')

import { TOKEN_API } from '../src/config'
import SpotifyWrapper from '../src/index'

const spotify = new SpotifyWrapper({
  token: TOKEN_API
})

const albums = spotify.search.albums('Incubus')

albums.then(data => console.log(data))
