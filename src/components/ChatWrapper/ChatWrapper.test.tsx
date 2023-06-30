import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { ChatWrapper } from './ChatWrapper';

test('renders chat wrapper', () => {
  render(<ChatWrapper buttonText='Chat Now' render={() => <div>Content</div>}/>)
  const button = screen.getByText('Chat Now', { selector: 'button'})
  expect(button).toBeDefined()
  act(() => button.click());
  const content = screen.getByText('Content', { selector: 'div' })
  expect(content).toBeDefined()
});
