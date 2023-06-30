import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatMessage } from './ChatMessage';

test('renders button', () => {
  render(<ChatMessage>Hello</ChatMessage>);
  const element = screen.getByText('Hello', { selector: 'div > span'});
  expect(element).toBeDefined()
});
