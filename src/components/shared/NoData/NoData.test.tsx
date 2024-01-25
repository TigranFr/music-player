import React from 'react'
import { render } from '@testing-library/react'
import NoData from './NoData'

describe('NoData component', () => {
  it('renders NoData component with the correct content', () => {
    const { getByTestId, getByText } = render(<NoData />)

    const container = getByTestId('no-result-container')
    expect(container).toBeInTheDocument()

    const icon = container.querySelector('.no-result-icon')
    expect(icon).toBeInTheDocument()

    const text = getByText('Oops! No results found.')
    expect(text).toBeInTheDocument()
  })
})
