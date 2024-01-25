// Import necessary dependencies and the component
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SongListHeader from './SongListHeader'

// Test Suite for SongListHeader
describe('SongListHeader Component', () => {
  // Test Case 1: Renders the component with correct headers
  test('renders component with correct headers', () => {
    render(<SongListHeader />)

    // Check if the rendered component contains the expected headers
    expect(screen.getByText('Song Name')).toBeInTheDocument()
    expect(screen.getByText('Artist Name')).toBeInTheDocument()
    expect(screen.getByText('Track')).toBeInTheDocument()
  })
})
