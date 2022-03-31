const arrowEdge = {
  type: 'smoothstep',
  markerEnd: {
    type: 'arrowclosed',
  },
};

export default [
  {
    id: 'phase-0-step-0-to-phase-0-step-1',
    source: 'phase-0-step-0',
    target: 'phase-0-step-1',
    ...arrowEdge,
  },
  {
    id: 'phase-0-step-1-to-phase-0-step-2',
    source: 'phase-0-step-1',
    target: 'phase-0-step-2',
    ...arrowEdge,
  },
  {
    id: 'phase-0-step-2-to-phase-0-step-3',
    source: 'phase-0-step-2',
    target: 'phase-0-step-3',
    ...arrowEdge,
  },
  {
    id: 'phase-0-step-3-to-phase-0-step-4',
    source: 'phase-0-step-3',
    target: 'phase-0-step-4',
    ...arrowEdge,
  },
  {
    id: 'phase-0-step-4-to-phase-0-step-6',
    source: 'phase-0-step-4',
    target: 'phase-0-step-5',
    ...arrowEdge,
  },
  {
    id: 'phase-0-step-5-to-phase-0-step-6',
    source: 'phase-0-step-5',
    target: 'phase-0-step-6',
    ...arrowEdge,
  },
];
