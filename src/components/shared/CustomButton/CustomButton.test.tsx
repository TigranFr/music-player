// Import necessary dependencies and the component
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomButton from './CustomButton'

// Test Suite for CustomButton
describe('CustomButton Component', () => {
  // Test Case 1: Renders the button with title
  test('renders button with title', () => {
    render(<CustomButton title="Click me" />)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  // Test Case 2: Renders the button with a start icon
  test('renders button with start icon', () => {
    const startIcon = <span>🚀</span>
    render(<CustomButton startIcon={startIcon} title="Click me" />)
    const iconElement = screen.getByText('🚀')
    expect(iconElement).toBeInTheDocument()
  })

  // Test Case 3: Executes onClick function when button is clicked
  test('executes onClick function when button is clicked', () => {
    const onClickMock = jest.fn()
    render(<CustomButton handleClick={onClickMock} title="Click me" />)
    const buttonElement = screen.getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  // Test Case 4: Applies additional className to the button
  test('applies additional className to the button', () => {
    render(<CustomButton className="button-title" title="Click me" />)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toHaveClass('button-title')
  })
})
