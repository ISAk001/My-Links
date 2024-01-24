import React from 'react';
import { render, screen } from '@testing-library/react';
import { router } from './App';
import { RouterProvider } from 'react-router-dom';


test('renders learn react link', () => {
  render(<RouterProvider router={router} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
