import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MusicPlayerNavbar from './MusicPlayerNavbar'

test('filter input updates on change', () => {
  render(<MusicPlayerNavbar />)

  const filterInput = screen.getByPlaceholderText('Filter')
  const testValue = 'test'
  fireEvent.change(filterInput, { target: { value: testValue } })

  expect((filterInput as HTMLInputElement).value).toBe(testValue)
})
