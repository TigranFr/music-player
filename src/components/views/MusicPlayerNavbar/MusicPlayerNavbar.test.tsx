import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MusicPlayerNavbar from './MusicPlayerNavbar';

describe('MusicPlayerNavbar Component', () => {

  test('filter input updates on change', () => {
    render(<MusicPlayerNavbar />);

    // Mock a change in the filter input
    const filterInput = screen.getByPlaceholderText('Filter');
    const testValue = 'test';
    fireEvent.change(filterInput, { target: { value: testValue } });

    // Check if the filter input value is updated
    expect((filterInput as HTMLInputElement).value).toBe(testValue);
  });
});
