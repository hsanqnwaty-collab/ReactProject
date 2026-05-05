import { render, screen } from '@testing-library/react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders login link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const element = screen.getByText(/login/i);
  expect(element).toBeInTheDocument();
});