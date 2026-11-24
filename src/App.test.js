import { render, screen } from '@testing-library/react';
import App from './App';

test('the homepage CV link opens the printable CV route', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  expect(screen.getByRole('link', { name: 'View my CV' }).getAttribute('href')).toBe('/resume');
});
