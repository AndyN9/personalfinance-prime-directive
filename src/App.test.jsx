import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

describe('app is rendering', () => {
  it('has a title', () => {
    render(<App />);
    const titleElement = screen.getByText(
      'Personal Income Spending Flowchart - United States'
    );
    expect(titleElement).toBeInTheDocument();
  });

  it('has a subtitle', () => {
    render(<App />);
    const titleElement = screen.getByText(
      'Based off the flowchart created by /u/atlasvoid for the /r/personalfinance subreddit.'
    );
    expect(titleElement).toBeInTheDocument();
  });
});
