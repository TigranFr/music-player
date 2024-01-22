import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrachNumberButton from './TrachNumberButton';

describe('TrachNumberButton Component', () => {
  test('renders TrachNumberButton with one component', () => {
    const { container } = render(<TrachNumberButton />);
    const component = container.getElementsByClassName('third');
    expect(component.length).toBe(1);
  });

  test('renders TrachNumberButton with SortIcon', () => {
    const { container } = render(<TrachNumberButton />);
    const component = container.getElementsByClassName('icon');
    expect(component[0]).toBeInTheDocument();
  });

  test('renders component with title', () => {
    render(<TrachNumberButton />);

    // Check if the button title is present
    expect(screen.getByText('Truck Num...')).toBeInTheDocument();
  });
});
