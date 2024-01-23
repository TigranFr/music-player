import { type ISong } from "../Interfaces/ISong";

const generateFateResponse = ():ISong => {
    const fakeResponse ={
        id: Date.now(),
        songName: 'Fake song',
        artistName: 'Fake Artist',
        trackNumber: 1
    }
    return fakeResponse;
}

export default generateFateResponse;

