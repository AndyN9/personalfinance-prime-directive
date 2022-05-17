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

describe('SpendingFlowchart is rendering', () => {
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

describe('nodeColor is outputting correct colors', () => {
  it('returns the correct color for phase-0', () => {
    const color = nodeColor({ id: 'phase-0' });
    expect(color).toBe('navy');
  });

  it('returns the correct color for phase-1', () => {
    const color = nodeColor({ id: 'phase-1' });
    expect(color).toBe('red');
  });

  it('returns the correct color for phase-2', () => {
    const color = nodeColor({ id: 'phase-2' });
    expect(color).toBe('yellow');
  });

  it('returns the correct color for phase-3', () => {
    const color = nodeColor({ id: 'phase-3' });
    expect(color).toBe('green');
  });

  it('returns the correct color for phase-4', () => {
    const color = nodeColor({ id: 'phase-4' });
    expect(color).toBe('lightblue');
  });

  it('returns the correct color for phase-5', () => {
    const color = nodeColor({ id: 'phase-5' });
    expect(color).toBe('blue');
  });

  it('returns the correct color for phase-6', () => {
    const color = nodeColor({ id: 'phase-6' });
    expect(color).toBe('purple');
  });

  it('returns the correct color for default', () => {
    const color = nodeColor({ id: 'default' });
    expect(color).toBe('#fff');
  });
});
