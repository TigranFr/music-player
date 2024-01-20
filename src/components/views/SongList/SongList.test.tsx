import React from 'react'
import { render, screen } from '@testing-library/react'
import SongList from './SongList'

test('renders learn react link', () => {
  render(<SongList />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
