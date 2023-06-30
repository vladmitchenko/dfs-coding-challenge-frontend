import React from 'react';
import { render, screen } from '@testing-library/react';
import { Chat } from './Chat';

test('renders chat', () => {
  render(<Chat><div>Content</div></Chat>)
  const title = screen.getByText('Chat', { selector: 'h3'})
  expect(title).toBeDefined()
  const closeButton = screen.getByText('×', { selector: 'button'})
  expect(closeButton).toBeDefined()
  const content = screen.getByText('Content', { selector: 'div' })
  expect(content).toBeDefined()
});

test('renders chat with loading state', () => {
  render(<Chat loading={true}><div>Content</div></Chat>)
  const loading = screen.getByText('Loading...', { selector: 'p' })
  expect(loading).toBeDefined()
});
