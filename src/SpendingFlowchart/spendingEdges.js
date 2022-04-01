const edgeStyle = {
  type: 'smoothstep',
  markerEnd: {
    type: 'arrowclosed',
  },
};

function parse(edgeId) {
  const data = edgeId.split('-to-');

  return {
    id: edgeId,
    source: data[0],
    target: data[1],
    ...edgeStyle,
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

const phase1EdgeIds = [
  'phase-0-step-6-to-phase-1-step-0',
  'phase-1-step-0-to-phase-1-step-1',
];

const phase0Edges = phase0EdgeIds.map((edgeId) => parse(edgeId));
const phase1Edges = phase1EdgeIds.map((edgeId) => parse(edgeId));

export default [...phase0Edges, ...phase1Edges];
