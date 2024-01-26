// Import necessary dependencies and the component
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SongList from './SongList'

const mockStore = configureStore([])

describe('SongList Component', () => {
  test('renders component with songs', () => {
    const initialState = {
      songList: {
        songs: [
          { id: 1, songName: 'Song 1', artistName: 'Artist 1', trackNumber: 1 },
          { id: 2, songName: 'Song 2', artistName: 'Artist 2', trackNumber: 2 },
        ],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <SongList />
      </Provider>
    )

    expect(screen.getByText('Song 1')).toBeInTheDocument()
    expect(screen.getByText('Artist 1')).toBeInTheDocument()
    expect(screen.getByText('Song 2')).toBeInTheDocument()
    expect(screen.getByText('Artist 2')).toBeInTheDocument()
  })
})
