// الگوریتم مؤلفه‌های همبند در گراف بدون‌جهت
// Connected Components

class Graph {
  constructor() {
    this.adjList = {};
  }

  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    if (!this.adjList[v]) this.adjList[v] = [];
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }

  dfs(node, visited, component) {
    visited[node] = true;

    component.push(node);

    for (let neighbor of this.adjList[node]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited, component);
      }
    }
  }

  findConnectedComponents() {
    const visited = {};
    const components = [];

    for (let node in this.adjList) {
      if (!visited[node]) {
        const component = [];
        this.dfs(node, visited, component);
        components.push(component);
      }
    }

    return components;
  }
}

// === استفاده از الگوریتم ===
const g1 = new Graph();
g1.addEdge('A', 'B');
g1.addEdge('B', 'C');
g1.addEdge('B', 'D');

console.log("مؤلفه‌های همبند : ", g1.findConnectedComponents());
