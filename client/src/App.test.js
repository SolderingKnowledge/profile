import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My profile', () => {
  render(<App />);
  const content = screen.getByText(/My profile/i);
  expect(content).toBeInTheDocument();
});
