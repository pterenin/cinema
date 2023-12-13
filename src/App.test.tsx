import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const element = container.getElementsByClassName('App');
  expect(element.length).toBe(1);
});
