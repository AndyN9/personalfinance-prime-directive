import { describe, expect, it } from 'vitest';

import initialNodes from './spendingNodes';

describe('initialNodes', () => {
  it('should be an array', () => {
    expect(Array.isArray(initialNodes)).toBe(true);
  });

  it('should not be empty', () => {
    expect(initialNodes).not.toHaveLength(0);
  });

  it('should contain objects', () => {
    expect(initialNodes).toContainEqual({
      type: 'group',
      position: { x: 0, y: 0 },
      className: 'step legend',
      id: 'legend',
      skip: true,
    });
  });

  it('should have 41 nodes', () => {
    expect(initialNodes).toHaveLength(41);
  });
});
