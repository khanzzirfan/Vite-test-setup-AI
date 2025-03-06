import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Vite + React heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Vite logo', () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/Vite logo/i);
    expect(viteLogo).toBeInTheDocument();
  });

  test('renders React logo', () => {
    render(<App />);
    const reactLogo = screen.getByAltText(/React logo/i);
    expect(reactLogo).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is/i });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');
  });
});