import React from 'react'
import { render, screen } from '@testing-library/react'
import PlayAllButton from './PlayAllButton'

test('renders learn react link', () => {
  render(<PlayAllButton />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
