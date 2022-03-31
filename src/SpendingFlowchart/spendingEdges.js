const edgeStyle = {
  type: 'smoothstep',
  markerEnd: {
    type: 'arrowclosed',
  },
};

function parseSourceTarget(edgeId) {
  const data = edgeId.split('-to-');

  return {
    source: data[0],
    target: data[1],
  };
}

const phase0EdgeIds = [
  'phase-0-step-0-to-phase-0-step-1',
  'phase-0-step-1-to-phase-0-step-2',
  'phase-0-step-2-to-phase-0-step-3',
  'phase-0-step-3-to-phase-0-step-4',
  'phase-0-step-4-to-phase-0-step-5',
  'phase-0-step-5-to-phase-0-step-6',
];

const phase0Edges = phase0EdgeIds.map((edgeId) => {
  const { source, target } = parseSourceTarget(edgeId);
  return {
    id: edgeId,
    source,
    target,
    ...edgeStyle,
  };
});

export default phase0Edges;
