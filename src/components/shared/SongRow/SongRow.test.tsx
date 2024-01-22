// Import necessary dependencies and the component
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SongRow from './SongRow'

// Mock data for testing
const mockSong = {
  id: 1,
  songName: 'Example Song',
  artistName: 'Example Artist',
  trackNumber: 1,
}

// Test Suite for SongRowa
describe('SongRow Component', () => {
  // Test Case 1: Renders the component with song details
  test('renders component with song details', () => {
    render(<SongRow song={mockSong} />)

    // Check if the song details are present in the rendered component
    expect(screen.getByText('Example Song')).toBeInTheDocument()
    expect(screen.getByText('Example Artist')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
