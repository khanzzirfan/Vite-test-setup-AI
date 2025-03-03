import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Vite + React heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is/i });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');
  });

  test('renders logos with correct links', () => {
    render(<App />);
    const viteLogoLink = screen.getByRole('link', { name: /Vite logo/i });
    const reactLogoLink = screen.getByRole('link', { name: /React logo/i });
    expect(viteLogoLink).toHaveAttribute('href', 'https://vitejs.dev');
    expect(reactLogoLink).toHaveAttribute('href', 'https://react.dev');
  });
});