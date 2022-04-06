function createFlow(edge) {
  const defaultEdgeProperties = {
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
    },
  };
  const data = edge.id.split('-to-');

  return {
    ...defaultEdgeProperties,
    source: data[0],
    target: data[1],
    ...edge,
  };
}

const phase0Edges = [
  { id: 'phase-0-step-0-to-phase-0-step-1' },
  { id: 'phase-0-step-1-to-phase-0-step-2' },
  { id: 'phase-0-step-2-to-phase-0-step-3' },
  { id: 'phase-0-step-3-to-phase-0-step-4' },
  { id: 'phase-0-step-4-to-phase-0-step-5' },
  { id: 'phase-0-step-5-to-phase-0-step-6' },
  { id: 'phase-0-step-6-to-phase-1-step-0' },
].map((edge) => createFlow(edge));

const phase1Edges = [
  { id: 'phase-1-step-0-to-phase-1-step-1' },
  { id: 'phase-1-step-1-to-phase-2-step-0' },
  { id: 'phase-1-step-2-to-phase-3-step-2' },
].map((edge) => createFlow(edge));

const phase2Edges = [
  {
    id: 'phase-2-step-0-to-phase-2-step-1',
    label: 'Yes',
    sourceHandle: 'yes',
  },
  {
    id: 'phase-2-step-0-to-phase-3-step-0',
    label: 'No',
    sourceHandle: 'no',
  },
  {
    id: 'phase-2-step-1-to-phase-3-step-0',
    skip: true,
    animated: true,
    targetHandle: 'target-right-a',
  },
].map((edge) => createFlow(edge));

const phase3Edges = [
  {
    id: 'phase-3-step-0-to-phase-3-step-1',
    label: 'Yes',
    sourceHandle: 'yes',
  },
  {
    id: 'phase-3-step-0-to-phase-1-step-2',
    label: 'No',
    sourceHandle: 'no',
  },
  {
    id: 'phase-3-step-1-to-phase-3-step-0',
    skip: true,
    animated: true,
    targetHandle: 'target-right-b',
  },
  {
    id: 'phase-3-step-2-to-phase-3-step-3',
    label: 'Yes',
  },
  {
    id: 'phase-3-step-2-to-phase-4-step-0',
    label: 'No',
  },
  {
    id: 'phase-3-step-3-to-phase-3-step-2',
    skip: true,
    animated: true,
  },
].map((edge) => createFlow(edge));

const phase4Edges = [
  {
    id: 'phase-4-step-0-to-phase-4-step-1',
  },
  {
    id: 'phase-4-step-1-to-phase-4-step-2',
    label: 'Yes',
  },
  {
    id: 'phase-4-step-1-to-phase-5-step-0',
    label: 'No',
  },
  {
    id: 'phase-4-step-2-to-phase-5-step-0',
    skip: true,
    animated: true,
  },
].map((edge) => createFlow(edge));

const phase5Edges = [
  {
    id: 'phase-5-step-0-to-phase-5-step-1',
    label: 'No',
  },
  {
    id: 'phase-5-step-1-to-phase-5-step-2',
    label: 'Yes',
  },
  {
    id: 'phase-5-step-2-to-phase-5-step-0',
    skip: true,
    animated: true,
  },
  {
    id: 'phase-5-step-1-to-phase-5-step-3',
    label: 'No',
  },
  {
    id: 'phase-5-step-3-to-phase-5-step-0',
    skip: true,
    animated: true,
  },
  {
    id: 'phase-5-step-0-to-phase-6-step-0',
    label: 'Yes',
  },
].map((edge) => createFlow(edge));

const phase6Edges = [
  {
    id: 'phase-6-step-0-to-phase-6-step-1',
    label: 'Yes',
  },
  {
    id: 'phase-6-step-0-to-phase-6-step-2',
    label: 'No',
  },
  {
    id: 'phase-6-step-1-to-phase-6-step-2',
    skip: true,
    animated: true,
  },
  {
    id: 'phase-6-step-2-to-phase-6-step-3',
    label: 'Yes',
  },
  {
    id: 'phase-6-step-2-to-phase-6-step-4',
    label: 'No',
  },
  {
    id: 'phase-6-step-3-to-phase-6-step-4',
    skip: true,
    animated: true,
  },
  {
    id: 'phase-6-step-4-to-phase-6-step-5',
  },
  {
    id: 'phase-6-step-5-to-phase-6-step-6',
    label: 'Yes',
  },
  {
    id: 'phase-6-step-4-to-phase-6-step-7',
  },
  {
    id: 'phase-6-step-7-to-phase-6-step-8',
    label: 'Yes',
  },
].map((edge) => createFlow(edge));

export default [
  ...phase0Edges,
  ...phase1Edges,
  ...phase2Edges,
  ...phase3Edges,
  ...phase4Edges,
  ...phase5Edges,
  ...phase6Edges,
];
