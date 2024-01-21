import React from 'react'
import { render, screen } from '@testing-library/react'
import TrachNumberButton from './TrachNumberButton'

test('renders learn react link', () => {
  render(<TrachNumberButton />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
