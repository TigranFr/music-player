import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SongListHeader from './SongListHeader'

describe('SongListHeader Component', () => {
  test('renders component with correct headers', () => {
    render(<SongListHeader />)

    expect(screen.getByText('Song Name')).toBeInTheDocument()
    expect(screen.getByText('Artist Name')).toBeInTheDocument()
    expect(screen.getByText('Track')).toBeInTheDocument()
  })
})
