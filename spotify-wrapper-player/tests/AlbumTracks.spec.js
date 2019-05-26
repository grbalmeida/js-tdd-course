import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('AlbumTracks', () => {
  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const data2 = [...data, ...data];

  const firstMarkup = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertToHumanTime(238733)}</p>
  </div>`;

  const secondMarkup = [...firstMarkup, ...firstMarkup].join('');

  it('Should create and append the markup given the correct data', () => {
    const firstElement = document.createElement('div');
    renderAlbumTracks(data, firstElement);
    expect(firstElement.innerHTML).to.be.eql(firstMarkup);
  });

  it('Should create and append the markup when more than 1 data', () => {
    const secondElement = document.createElement('div');
    renderAlbumTracks(data2, secondElement);
    expect(secondElement.innerHTML).to.be.eql(secondMarkup);
  });
});
