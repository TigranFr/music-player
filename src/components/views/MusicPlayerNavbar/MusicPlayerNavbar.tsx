import React , {useState} from 'react'
import { AddAllButton, PlayAllButton, TrachNumberButton } from '..'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setSongs } from '../../../store/slices/songsListSlice'
import { SearchIcon } from '../../icons'
import './MusicPlayerNavbar.css'
import songs from '../../../utils/mockSongs';

const MusicPlayerNavbar = (): JSX.Element => {

  const [inputValue , setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  let songList = useAppSelector(state => state.songList.songs);

  const handleOnChange = (event: React. ChangeEvent<HTMLInputElement>):void => {
    setInputValue(event.target.value);
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue === '') {
      dispatch(setSongs(songs));
    }
    else{

      songList = songs;
      const filteredSong = songList.filter(song => {
        return song.songName.toLowerCase().includes(inputValue.toLowerCase());
      });
      dispatch(setSongs(filteredSong)); 
    }
  };
  

  return (
    <div className="MusicPlayerHeader">
      <div className="HeaderWrapperOne">
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className="HeaderWrapperTwo">
        <TrachNumberButton />
        <form 
          className="filterForm"
          onSubmit={handleOnSubmit}
        >
          <SearchIcon className="icon" />
          <input 
            type="text" 
            placeholder="Filter"
            value={inputValue}
            onChange={handleOnChange} 
          />
        </form>
      </div>
    </div>
  )
}

export default MusicPlayerNavbar
