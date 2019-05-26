import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('Should be an object', () => {
    expect(spotify).to.be.an.object;
  });

  it('Should have search methods', () => {
    expect(spotify.search).to.exist;
  });

  it('Should have album methods', () => {
    expect(spotify.album).to.exist;
  });
});
