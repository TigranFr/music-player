import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TruckNumberButton from './TruckNumberButton'

describe('TruckNumberButton Component', () => {
  test('renders TruckNumberButton with one component', () => {
    const { container } = render(<TruckNumberButton />)
    const component = container.getElementsByClassName('third')
    expect(component.length).toBe(1)
  })

  test('renders TruckNumberButton with SortIcon', () => {
    const { container } = render(<TruckNumberButton />)
    const component = container.getElementsByClassName('icon')
    expect(component[0]).toBeInTheDocument()
  })

  test('renders component with title', () => {
    render(<TruckNumberButton />)

    // Check if the button title is present
    expect(screen.getByText('Truck Num...')).toBeInTheDocument()
  })
})
