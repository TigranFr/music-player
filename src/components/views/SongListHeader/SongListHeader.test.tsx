import React from 'react'
import { render, screen } from '@testing-library/react'
import SongListHeader from './SongListHeader'

test('renders learn react link', () => {
  render(<SongListHeader />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
