import { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

import './App.css';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';

function PersonalFinanceFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView={true}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

function App() {
  return (
    <PersonalFinanceFlow />
  );
}

export default App;
