class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) this.addVertex(vertex);
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
      // if the vertex is adjacent to a node..
      if (node.adjacent.has(vertex)) {
        // remove that vertex from the nodes adjacency list
        node.adjacent.delete(vertex);
      }
    }

    // remove the vertex from the node
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let seen = new Set();
    let result = [];

    const traverse = (vertex) => {
      // base case. if no vertex present
      if (!vertex) return null;

      // else, add the vertex to seen
      seen.add(vertex);
      // push that seen vertex's value into result
      result.push(vertex.value);

      // also visit the vertex's neighbors recursively, which runs the 2 lines above until it's seen all it's neighbors
      vertex.adjacent.forEach((neighbor) => {
        if (!seen.has(neighbor)) return traverse(neighbor);
      });
    };

    traverse(start);

    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
    let seen = new Set();
    let result = [];
    let currentVertex;

    seen.add(start);

    while (queue.length) {
      // the currentVertex would be the first node of the queue, this switches over and over until queue is empty
      currentVertex = queue.shift();

      // push that seen vertex's value into result
      result.push(currentVertex.value);

      // also visit the vertex's neighbors
      currentVertex.adjacent.forEach((neighbor) => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  shortestPath(start, end) {
    if (start === end) {
      return [start.value];
    }

    var queue = [start];
    let visited = new Set();
    let predecessors = {};
    let path = [];

    while (queue.length) {
      let currentVertex = queue.shift();

      if (currentVertex === end) {
        let stop = predecessors[end.value];
        while (stop) {
          path.push(stop);
          stop = predecessors[stop];
        }
        path.unshift(start.value);
        path.reverse();
        return path;
      }

      visited.add(currentVertex);
      for (let vertex of currentVertex.adjacent) {
        if (!visited.has(vertex)) {
          predecessors[vertex.value] = currentVertex.value;
          queue.push(vertex);
        }
      }
    }
  }
}

module.exports = { Graph, Node };
