import { describe, expect, it } from 'vitest';

import initialEdges from './spendingEdges';

describe('initialEdges', () => {
  it('should be an array', () => {
    expect(Array.isArray(initialEdges)).toBe(true);
  });

  it('should not be empty', () => {
    expect(initialEdges).not.toHaveLength(0);
  });

  it('should contain objects', () => {
    expect(initialEdges).toContainEqual({
      type: 'smoothstep',
      markerEnd: { type: 'arrowclosed' },
      source: 'phase-1',
      target: 'phase-0-step-0',
      id: 'phase-1-to-phase-0-step-0',
    });
  });

  it('should have 46 nodes', () => {
    expect(initialEdges).toHaveLength(46);
  });
});
