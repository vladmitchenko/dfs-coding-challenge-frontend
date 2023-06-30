import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
  render(<Button>Chat Now</Button>);
  const element = screen.getByText('Chat Now', { selector: 'button'});
  expect(element).toBeDefined()
});
