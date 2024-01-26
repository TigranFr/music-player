// AddAllButton.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddAllButton from './AddAllButton'
import { toast } from 'react-toastify'

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}))

describe('AddAllButton Component', () => {
  test('renders component with title', () => {
    render(<AddAllButton />)

    expect(screen.getByText('Add All')).toBeInTheDocument()
  })

  test('calls handleAddClick on button click', () => {
    render(<AddAllButton />)

    const consoleLogMock = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {})

    fireEvent.click(screen.getByText('Add All'))

    expect(consoleLogMock).toHaveBeenCalledWith('Successfully added')
    expect(toast).toHaveBeenCalledWith('Successfully added, open console')

    consoleLogMock.mockRestore()
  })
})
