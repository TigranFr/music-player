import React from 'react'
import { render, screen } from '@testing-library/react'
import MusicUploadForm from './MusicUploadForm'

test('renders learn react link', () => {
  render(<MusicUploadForm />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
