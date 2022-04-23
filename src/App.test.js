import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Header', () => {
  test('Header "logo" links route correctly', () => {
    render(
      <App />,
    );
    const homeLogo = screen.getByAltText(/logo/i);
    userEvent.click(homeLogo);
    expect(
      screen.getByRole('heading', { name: /home/i }),
    ).toBeInTheDocument();
  });
  test('Header "search" links route correctly', () => {
    render(
      <App />,
    );
    const searchLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchLink);
    expect(
      screen.getByText(/javascript/i),
    ).toBeInTheDocument();
  });
});
