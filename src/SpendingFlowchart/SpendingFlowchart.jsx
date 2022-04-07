import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

import CustomHandlesNode from './CustomHandlesNode';
import createGraphLayout from './createGraphLayout';

import './spending-flowchart.scss';

import initialNodes from './spendingNodes';
import initialEdges from './spendingEdges';

const nodeTypes = {
  customHandles: CustomHandlesNode,
};
const nodeColor = (node) => {
  switch (node.id.split('-step-')[0]) {
    case 'phase-0':
      return 'navy';
    case 'phase-1':
      return 'red';
    case 'phase-2':
      return 'yellow';
    case 'phase-3':
      return 'green';
    case 'phase-4':
      return 'lightblue';
    case 'phase-5':
      return 'blue';
    case 'phase-6':
      return 'purple';
    default:
      return '#fff';
  }
};

export default function SpendingFlowchart() {
  const [nodes, setNodes] = useState(initialNodes);
  // eslint-disable-next-line no-unused-vars
  const [edges, setEdges] = useState(initialEdges);

  const onInit = (reactFlowInstance) => {
    createGraphLayout(
      reactFlowInstance.getNodes(),
      reactFlowInstance.getEdges()
    )
      .then((newNodes) => setNodes(newNodes))
      .catch((error) => console.error(error));
    reactFlowInstance.fitView();
  };

  return (
    <div className="spending-flowchart">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onInit={onInit}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <MiniMap nodeColor={nodeColor} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
