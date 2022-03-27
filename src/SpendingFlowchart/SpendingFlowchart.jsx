import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import createGraphLayout from '../createGraphLayout';

import './spending-flowchart.scss';

import phaseNodes from './data/phaseNodes';
import spendingNodes from './data/spendingNodes';
import initialEdges from './data/spendingEdges';

// const initialNodes = phaseNodes.concat(spendingNodes);
const initialNodes = spendingNodes;

export default function SpendingFlowchart() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onInit = (reactFlowInstance) => {
    createGraphLayout(
      reactFlowInstance.getNodes(),
      reactFlowInstance.getEdges()
    )
      .then((els) => setNodes(els))
      .catch((err) => console.error(err));
    reactFlowInstance.fitView();
  };

  return (
    <div className="spending-flowchart">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onInit={onInit}
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
