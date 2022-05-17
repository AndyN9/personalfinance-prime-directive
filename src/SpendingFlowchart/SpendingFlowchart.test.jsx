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

    const zoomIn = screen.getByTitle('zoom in');
    expect(zoomIn).toBeInTheDocument();

    const zoomOut = screen.getByTitle('zoom out');
    expect(zoomOut).toBeInTheDocument();

    const fitView = screen.getByTitle('fit view');
    expect(fitView).toBeInTheDocument();
  });

  it('should render a minimap', () => {
    render(<SpendingFlowchart />);
    const minimap = document.querySelector('.react-flow__minimap');
    expect(minimap).toBeInTheDocument();
  });
});

describe('nodeColor', () => {
  it('should return the correct color for a phase-0 node', () => {
    const color = nodeColor({ id: 'phase-0' });
    expect(color).toBe('navy');
  });

  it('should return the correct color for a phase-1 node', () => {
    const color = nodeColor({ id: 'phase-1' });
    expect(color).toBe('red');
  });

  it('should return the correct color for a phase-2 node', () => {
    const color = nodeColor({ id: 'phase-2' });
    expect(color).toBe('yellow');
  });

  it('should return the correct color for a phase-3 node', () => {
    const color = nodeColor({ id: 'phase-3' });
    expect(color).toBe('green');
  });

  it('should return the correct color for a phase-4 node', () => {
    const color = nodeColor({ id: 'phase-4' });
    expect(color).toBe('lightblue');
  });

  it('should return the correct color for a phase-5 node', () => {
    const color = nodeColor({ id: 'phase-5' });
    expect(color).toBe('blue');
  });

  it('should return the correct color for a phase-6 node', () => {
    const color = nodeColor({ id: 'phase-6' });
    expect(color).toBe('purple');
  });

  it('should return the correct color for anything other node', () => {
    const color = nodeColor({ id: 'default' });
    expect(color).toBe('#fff');
  });
});
