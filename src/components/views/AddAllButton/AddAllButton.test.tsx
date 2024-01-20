import React from 'react'
import { render, screen } from '@testing-library/react'
import AddAllButton from './AddAllButton'

test('renders learn react link', () => {
  render(<AddAllButton />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
