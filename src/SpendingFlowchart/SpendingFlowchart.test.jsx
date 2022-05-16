import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import SpendingFlowchart from './SpendingFlowchart';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

afterEach(() => {
  cleanup();
});

describe('spending flowchart is rendering', () => {
  it('has a flowchart', () => {
    render(<SpendingFlowchart />);

    const container = document.querySelector('.react-flow');
    expect(container).toBeInTheDocument();

    const flowchart = document.querySelector('.react-flow__renderer');
    expect(flowchart).toBeInTheDocument();
  });

  it('has controls', () => {
    render(<SpendingFlowchart />);

    const zoomIn = screen.getByTitle('zoom in');
    expect(zoomIn).toBeInTheDocument();

    const zoomOut = screen.getByTitle('zoom out');
    expect(zoomOut).toBeInTheDocument();

    const fitView = screen.getByTitle('fit view');
    expect(fitView).toBeInTheDocument();
  });

  it('has a minimap', () => {
    render(<SpendingFlowchart />);
    const minimap = document.querySelector('.react-flow__minimap');
    expect(minimap).toBeInTheDocument();
  });
});
