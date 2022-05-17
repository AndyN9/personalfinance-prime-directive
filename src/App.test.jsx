import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import App from './App';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

afterEach(() => {
  cleanup();
});

describe('App', () => {
  it('should have a title', () => {
    render(<App />);
    const title = screen.getByText(
      'Personal Income Spending Flowchart - United States'
    );
    expect(title).toBeInTheDocument();
  });

  it('should have a subtitle', () => {
    render(<App />);
    const subtitle = screen.getByText(
      'Based off the flowchart created by /u/atlasvoid for the /r/personalfinance subreddit.'
    );
    expect(subtitle).toBeInTheDocument();
  });
});
