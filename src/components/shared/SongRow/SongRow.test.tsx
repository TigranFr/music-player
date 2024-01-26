// Import necessary dependencies and the component
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SongRow from './SongRow'

const mockSong = {
  id: 1,
  songName: 'Example Song',
  artistName: 'Example Artist',
  trackNumber: 1,
}

describe('SongRow Component', () => {
  test('renders component with song details', () => {
    render(<SongRow song={mockSong} />)

    expect(screen.getByText('Example Song')).toBeInTheDocument()
    expect(screen.getByText('Example Artist')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
