import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import createGraphLayout from './createGraphLayout';

import './spending-flowchart.scss';

import initialNodes from './spendingNodes';
import initialEdges from './spendingEdges';

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
        nodes={nodes}
        edges={edges}
        onInit={onInit}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
