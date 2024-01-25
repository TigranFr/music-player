import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DragOrDrop from './DragOrDrop'

describe('DragOrDrop component', () => {
  const onFileChange = jest.fn()

  test('dropzone existency', () => {
    const { getByText, getByTestId } = render(
      <DragOrDrop onFileChange={onFileChange} />
    )

    expect(
      getByText('Drag or drop a file here, or click to select a file')
    ).toBeInTheDocument()

    const dropzone = getByTestId('dropzone')
    expect(dropzone).toBeInTheDocument()
  })
})
