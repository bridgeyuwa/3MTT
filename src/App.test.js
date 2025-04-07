import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock fetch
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { id: 1, title: 'Test Post 1' },
        { id: 2, title: 'Another Post' },
      ]),
    })
  );
});

afterAll(() => {
  global.fetch.mockRestore();
});

test('renders loading, fetches and displays list, filters items', async () => {
  render(<App />);
  expect(screen.getByText(/Loading data/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
  });

  const input = screen.getByPlaceholderText(/search by title/i);
  userEvent.type(input, 'Another');
  expect(screen.queryByText('Test Post 1')).not.toBeInTheDocument();
  expect(screen.getByText('Another Post')).toBeInTheDocument();
});