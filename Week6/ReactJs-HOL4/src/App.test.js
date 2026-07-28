import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders fetched posts', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: 'sample title',
            body: 'sample body'
          }
        ])
    })
  );

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText(/sample title/i)).toBeInTheDocument();
  });

  expect(screen.getByText(/sample body/i)).toBeInTheDocument();
});
