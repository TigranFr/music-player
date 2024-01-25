// AddAllButton.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddAllButton from './AddAllButton'
import { toast } from 'react-toastify'

// Mock react-toastify to avoid actual toasts during testing
jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}))

describe('AddAllButton Component', () => {
  test('renders component with title', () => {
    render(<AddAllButton />)

    // Check if the button title is present
    expect(screen.getByText('Add All')).toBeInTheDocument()
  })

  test('calls handleAddClick on button click', () => {
    render(<AddAllButton />)

    // Mock console.log
    const consoleLogMock = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {})

    // Click the button
    fireEvent.click(screen.getByText('Add All'))

    // Check if console.log and toast are called with the correct messages
    expect(consoleLogMock).toHaveBeenCalledWith('Successfully added')
    expect(toast).toHaveBeenCalledWith('Successfully added, open console')

    // Restore the original console.log function
    consoleLogMock.mockRestore()
  })
})
