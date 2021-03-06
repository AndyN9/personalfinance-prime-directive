import Elk from 'elkjs';

/*
  From https://github.com/wbkd/react-flow/issues/5#issuecomment-954001434

  Get a sense of the parameters at:
    https://rtsys.informatik.uni-kiel.de/elklive/examples.html?e=general%2Fspacing%2FnodesEdges
*/

const DEFAULT_WIDTH = 300;
const DEFAULT_HEIGHT = 150;

const elk = new Elk({
  defaultLayoutOptions: {
    'elk.algorithm': 'layered',
    'elk.direction': 'DOWN',
    'elk.spacing.nodeNode': '75',
    'elk.layered.spacing.nodeNodeBetweenLayers': '75',
  },
});

const createGraphLayout = async (nodes, edges) => {
  const elkNodes = [];
  const elkEdges = [];

  nodes.forEach((flowNode) => {
    if (flowNode.skip) {
      return;
    }

    elkNodes.push({
      id: flowNode.id,
      width: flowNode.width ?? DEFAULT_WIDTH,
      height: flowNode.height ?? DEFAULT_HEIGHT,
    });
  });

  edges.forEach((flowEdge) => {
    if (flowEdge.skip) {
      return;
    }

    elkEdges.push({
      id: flowEdge.id,
      target: flowEdge.target,
      source: flowEdge.source,
    });
  });

  const newGraph = await elk.layout({
    id: 'root',
    children: elkNodes,
    edges: elkEdges,
  });

  return nodes.map((flowNode) => {
    const node = newGraph?.children?.find((n) => n.id === flowNode.id);
    if (node?.x && node?.y && node?.width && node?.height) {
      flowNode.position = {
        x: node.x - node.width / 2 + Math.random() / 1000,
        y: node.y - node.height / 2,
      };
    }
    return flowNode;
  });
};

export default createGraphLayout;
