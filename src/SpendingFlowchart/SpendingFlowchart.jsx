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
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
