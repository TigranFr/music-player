// PlayAllButton.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PlayAllButton from './PlayAllButton'
import { toast } from 'react-toastify'

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}))

describe('PlayAllButton Component', () => {
  test('renders component with title', () => {
    render(<PlayAllButton />)

    expect(screen.getByText('Play All')).toBeInTheDocument()
  })

  test('calls handleAddClick on button click', () => {
    render(<PlayAllButton />)

    const consoleLogMock = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {})

    fireEvent.click(screen.getByText('Play All'))

    expect(consoleLogMock).toHaveBeenCalledWith('Successfully played')
    expect(toast).toHaveBeenCalledWith('Successfully played, open console')

    consoleLogMock.mockRestore()
  })
})
