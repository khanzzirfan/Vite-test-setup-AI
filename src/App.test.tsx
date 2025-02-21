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

  test('renders edit instruction', () => {
    render(<App />);
    const instruction = screen.getByText((_, element) => {
      const hasText = (node: HTMLElement) => node.textContent === 'Edit src/App.tsx and save to test HMR';
      const nodeHasText = hasText(element as HTMLElement);
      const childrenDontHaveText = Array.from(element?.children || []).every(
        (child) => !hasText(child as HTMLElement)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(instruction).toBeInTheDocument();
  });

  test('renders learn more text', () => {
    render(<App />);
    const learnMoreText = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(learnMoreText).toBeInTheDocument();
  });
});
