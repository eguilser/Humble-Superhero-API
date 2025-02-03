import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders title correctly', () => {
  render(<App />);
  const titleElement = screen.getByText(/Humble Superhero API/i);
  expect(titleElement).toBeInTheDocument();
});
