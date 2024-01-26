import { type Song } from '../Interfaces/Song'

const generateFakeResponse = (): Song => {
  const fakeResponse = {
    id: Date.now(),
    songName: 'Fake song',
    artistName: 'Fake Artist',
    trackNumber: 1,
  }
  return fakeResponse
}

export default generateFakeResponse
