import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { SpendingFlowchart, nodeColor } from './SpendingFlowchart';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

afterEach(() => {
  cleanup();
});

describe('SpendingFlowchart', () => {
  it('should render a flowchart', () => {
    render(<SpendingFlowchart />);

    const container = document.querySelector('.react-flow');
    expect(container).toBeInTheDocument();

    const flowchart = document.querySelector('.react-flow__renderer');
    expect(flowchart).toBeInTheDocument();
  });

  it('should render controls', () => {
    render(<SpendingFlowchart />);

    const zoomIn = screen.getByRole('button', { name: 'zoom in' });
    expect(zoomIn).toBeInTheDocument();

    const zoomOut = screen.getByRole('button', { name: 'zoom out' });
    expect(zoomOut).toBeInTheDocument();

    const fitView = screen.getByRole('button', { name: 'fit view' });
    expect(fitView).toBeInTheDocument();
  });

  it('should render a minimap', () => {
    render(<SpendingFlowchart />);
    const minimap = document.querySelector('.react-flow__minimap');
    expect(minimap).toBeInTheDocument();
  });
});

describe('nodeColor', () => {
  it.each([
    ['phase-0', 'navy'],
    ['phase-1', 'red'],
    ['phase-2', 'yellow'],
    ['phase-3', 'green'],
    ['phase-4', 'lightblue'],
    ['phase-5', 'blue'],
    ['phase-6', 'purple'],
  ])('should return the correct color for a %s node', (phase, expected) => {
    const color = nodeColor({ id: phase });
    expect(color).toBe(expected);
  });

  it('should return the correct color for anything other node', () => {
    const color = nodeColor({ id: 'default' });
    expect(color).toBe('#fff');
  });
});
