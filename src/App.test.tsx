import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/Vite logo/i);
    const reactLogo = screen.getByAltText(/React logo/i);
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders the heading', () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });

  test('renders the edit instruction', () => {
    render(<App />);
    const instruction = screen.getByText((content, element) => {
      return content.includes('Edit') && content.includes('src/App.tsx') && content.includes('and save to test HMR');
    });
    expect(instruction).toBeInTheDocument();
  });

  test('renders the learn more text', () => {
    render(<App />);
    const learnMoreText = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(learnMoreText).toBeInTheDocument();
  });
});
