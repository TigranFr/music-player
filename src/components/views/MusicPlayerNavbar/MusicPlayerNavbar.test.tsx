import React from 'react'
import { render, screen } from '@testing-library/react'
import MusicPlayerNavbar from './MusicPlayerNavbar'

test('renders learn react link', () => {
  render(<MusicPlayerNavbar />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
