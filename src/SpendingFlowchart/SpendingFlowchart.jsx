import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

import './spending-flowchart.scss';

import phaseNodes from './data/phaseNodes';
import spendingNodes from './data/spendingNodes';
import initialEdges from './data/spendingEdges';

const initialNodes = phaseNodes.concat(spendingNodes);

export default function SpendingFlowchart() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="spending-flowchart">
      <ReactFlow
        nodes={nodes}
        edges={edges}
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
