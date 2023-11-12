const Graph = require('./graph');
const depthFirstTraversal = require('./graph-depth-first');

// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

const graph = new Graph();

// add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.printAdjacencyList();

const result = depthFirstTraversal(graph, 'A');

console.log(result);
