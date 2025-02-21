import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Vite + React heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Vite logo with link', () => {
  render(<App />);
  const viteLogo = screen.getByAltText(/Vite logo/i);
  expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vitejs.dev');
});

test('renders React logo with link', () => {
  render(<App />);
  const reactLogo = screen.getByAltText(/React logo/i);
  expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /count is 0/i });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');
});