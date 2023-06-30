import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReactLogo } from './ReactLogo';

test('renders react logo', () => {
  render(<ReactLogo />);
  const element = screen.getByAltText('logo');
  expect(element).toBeDefined()
});
