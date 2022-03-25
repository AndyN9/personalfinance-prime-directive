const markerEnd = {
  type: 'arrowclosed',
};

export default [
  {
    id: 'phase-0-step-0-to-phase-0-step-1',
    source: 'phase-0-step-0',
    target: 'phase-0-step-1',
    type: 'smoothstep',
    markerEnd,
  },
  {
    id: 'phase-0-step-1-to-phase-0-step-2',
    source: 'phase-0-step-1',
    target: 'phase-0-step-2',
    type: 'smoothstep',
    markerEnd,
  },
  {
    id: 'phase-0-step-2-to-phase-0-step-3',
    source: 'phase-0-step-2',
    target: 'phase-0-step-3',
    type: 'smoothstep',
    markerEnd,
  },
  {
    id: 'phase-0-step-3-to-phase-0-step-4',
    source: 'phase-0-step-3',
    target: 'phase-0-step-4',
    type: 'smoothstep',
    markerEnd,
  },
  {
    id: 'phase-0-step-4-to-phase-0-step-6',
    source: 'phase-0-step-4',
    target: 'phase-0-step-5',
    type: 'smoothstep',
    markerEnd,
  },
  {
    id: 'phase-0-step-5-to-phase-0-step-6',
    source: 'phase-0-step-5',
    target: 'phase-0-step-6',
    type: 'smoothstep',
    markerEnd,
  },
];
