# Graphs and Graph Algorithms

## 🎯 Learning Objectives
- Understand graph terminology and representations
- Master graph traversal algorithms (DFS and BFS)
- Learn shortest path algorithms (Dijkstra, Bellman-Ford)
- Implement minimum spanning tree algorithms
- Practice graph-based problem solving

## 📊 Graph Fundamentals

### **What is a Graph?**
A graph is a collection of vertices (nodes) connected by edges. It's used to represent relationships between objects.

```javascript
// Graph terminology
// Vertex (Node) - A point in the graph
// Edge - A connection between two vertices
// Path - A sequence of vertices connected by edges
// Cycle - A path that starts and ends at the same vertex
// Connected - Every vertex is reachable from every other vertex
// Weighted - Edges have associated values
// Directed - Edges have direction (one-way)
// Undirected - Edges are bidirectional
```

### **Graph Representations**

#### **1. Adjacency List**
```javascript
class Graph {
    constructor() {
        this.vertices = new Map();
    }
    
    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []);
        }
    }
    
    addEdge(vertex1, vertex2, weight = 1) {
        if (!this.vertices.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.vertices.has(vertex2)) {
            this.addVertex(vertex2);
        }
        
        this.vertices.get(vertex1).push({ vertex: vertex2, weight });
        // For undirected graph, add edge in both directions
        this.vertices.get(vertex2).push({ vertex: vertex1, weight });
    }
    
    getNeighbors(vertex) {
        return this.vertices.get(vertex) || [];
    }
    
    getAllVertices() {
        return Array.from(this.vertices.keys());
    }
    
    print() {
        for (const [vertex, neighbors] of this.vertices) {
            console.log(`${vertex}: ${neighbors.map(n => `${n.vertex}(${n.weight})`).join(', ')}`);
        }
    }
}

// Usage example
const graph = new Graph();
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.print();
```

#### **2. Adjacency Matrix**
```javascript
class AdjacencyMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = Array(size).fill().map(() => Array(size).fill(0));
        this.vertices = [];
    }
    
    addVertex(vertex) {
        if (this.vertices.length >= this.size) {
            throw new Error("Graph is full");
        }
        this.vertices.push(vertex);
    }
    
    addEdge(vertex1, vertex2, weight = 1) {
        const index1 = this.vertices.indexOf(vertex1);
        const index2 = this.vertices.indexOf(vertex2);
        
        if (index1 === -1 || index2 === -1) {
            throw new Error("Vertex not found");
        }
        
        this.matrix[index1][index2] = weight;
        this.matrix[index2][index1] = weight; // For undirected graph
    }
    
    hasEdge(vertex1, vertex2) {
        const index1 = this.vertices.indexOf(vertex1);
        const index2 = this.vertices.indexOf(vertex2);
        
        if (index1 === -1 || index2 === -1) {
            return false;
        }
        
        return this.matrix[index1][index2] > 0;
    }
    
    getWeight(vertex1, vertex2) {
        const index1 = this.vertices.indexOf(vertex1);
        const index2 = this.vertices.indexOf(vertex2);
        
        if (index1 === -1 || index2 === -1) {
            return 0;
        }
        
        return this.matrix[index1][index2];
    }
    
    print() {
        console.log("Adjacency Matrix:");
        console.log("  ", this.vertices.join(" "));
        for (let i = 0; i < this.size; i++) {
            console.log(this.vertices[i], this.matrix[i].join(" "));
        }
    }
}
```

## 🔍 Graph Traversal Algorithms

### **Depth-First Search (DFS)**
```javascript
class GraphTraversal {
    constructor(graph) {
        this.graph = graph;
    }
    
    // Recursive DFS
    dfsRecursive(startVertex, visited = new Set(), result = []) {
        visited.add(startVertex);
        result.push(startVertex);
        
        const neighbors = this.graph.getNeighbors(startVertex);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                this.dfsRecursive(neighbor.vertex, visited, result);
            }
        }
        
        return result;
    }
    
    // Iterative DFS using stack
    dfsIterative(startVertex) {
        const visited = new Set();
        const result = [];
        const stack = [startVertex];
        
        while (stack.length > 0) {
            const vertex = stack.pop();
            
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                
                const neighbors = this.graph.getNeighbors(vertex);
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor.vertex)) {
                        stack.push(neighbor.vertex);
                    }
                }
            }
        }
        
        return result;
    }
    
    // Check if path exists between two vertices
    hasPath(start, end, visited = new Set()) {
        if (start === end) return true;
        
        visited.add(start);
        const neighbors = this.graph.getNeighbors(start);
        
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                if (this.hasPath(neighbor.vertex, end, visited)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    // Find all paths between two vertices
    findAllPaths(start, end, visited = new Set(), path = [], allPaths = []) {
        visited.add(start);
        path.push(start);
        
        if (start === end) {
            allPaths.push([...path]);
        } else {
            const neighbors = this.graph.getNeighbors(start);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    this.findAllPaths(neighbor.vertex, end, visited, path, allPaths);
                }
            }
        }
        
        visited.delete(start);
        path.pop();
        return allPaths;
    }
}
```

### **Breadth-First Search (BFS)**
```javascript
class BFS {
    constructor(graph) {
        this.graph = graph;
    }
    
    // BFS traversal
    bfs(startVertex) {
        const visited = new Set();
        const result = [];
        const queue = [startVertex];
        
        visited.add(startVertex);
        
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            
            const neighbors = this.graph.getNeighbors(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.push(neighbor.vertex);
                }
            }
        }
        
        return result;
    }
    
    // Shortest path (unweighted graph)
    shortestPath(start, end) {
        const visited = new Set();
        const queue = [{ vertex: start, path: [start] }];
        
        visited.add(start);
        
        while (queue.length > 0) {
            const { vertex, path } = queue.shift();
            
            if (vertex === end) {
                return path;
            }
            
            const neighbors = this.graph.getNeighbors(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.push({
                        vertex: neighbor.vertex,
                        path: [...path, neighbor.vertex]
                    });
                }
            }
        }
        
        return null; // No path found
    }
    
    // Level order traversal
    levelOrder(startVertex) {
        const visited = new Set();
        const result = [];
        const queue = [{ vertex: startVertex, level: 0 }];
        
        visited.add(startVertex);
        
        while (queue.length > 0) {
            const { vertex, level } = queue.shift();
            
            if (!result[level]) {
                result[level] = [];
            }
            result[level].push(vertex);
            
            const neighbors = this.graph.getNeighbors(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.push({ vertex: neighbor.vertex, level: level + 1 });
                }
            }
        }
        
        return result;
    }
}
```

## 🛣️ Shortest Path Algorithms

### **Dijkstra's Algorithm**
```javascript
class Dijkstra {
    constructor(graph) {
        this.graph = graph;
    }
    
    shortestPath(start, end) {
        const distances = new Map();
        const previous = new Map();
        const unvisited = new Set();
        const visited = new Set();
        
        // Initialize distances
        for (const vertex of this.graph.getAllVertices()) {
            distances.set(vertex, Infinity);
            unvisited.add(vertex);
        }
        distances.set(start, 0);
        
        while (unvisited.size > 0) {
            // Find vertex with minimum distance
            let current = null;
            let minDistance = Infinity;
            
            for (const vertex of unvisited) {
                if (distances.get(vertex) < minDistance) {
                    minDistance = distances.get(vertex);
                    current = vertex;
                }
            }
            
            if (current === null) break;
            
            unvisited.delete(current);
            visited.add(current);
            
            // Update distances to neighbors
            const neighbors = this.graph.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    const newDistance = distances.get(current) + neighbor.weight;
                    if (newDistance < distances.get(neighbor.vertex)) {
                        distances.set(neighbor.vertex, newDistance);
                        previous.set(neighbor.vertex, current);
                    }
                }
            }
        }
        
        // Reconstruct path
        const path = [];
        let current = end;
        while (current !== undefined) {
            path.unshift(current);
            current = previous.get(current);
        }
        
        return {
            path: path[0] === start ? path : null,
            distance: distances.get(end)
        };
    }
    
    // Shortest paths to all vertices
    shortestPathsToAll(start) {
        const distances = new Map();
        const previous = new Map();
        const unvisited = new Set();
        const visited = new Set();
        
        // Initialize distances
        for (const vertex of this.graph.getAllVertices()) {
            distances.set(vertex, Infinity);
            unvisited.add(vertex);
        }
        distances.set(start, 0);
        
        while (unvisited.size > 0) {
            // Find vertex with minimum distance
            let current = null;
            let minDistance = Infinity;
            
            for (const vertex of unvisited) {
                if (distances.get(vertex) < minDistance) {
                    minDistance = distances.get(vertex);
                    current = vertex;
                }
            }
            
            if (current === null) break;
            
            unvisited.delete(current);
            visited.add(current);
            
            // Update distances to neighbors
            const neighbors = this.graph.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    const newDistance = distances.get(current) + neighbor.weight;
                    if (newDistance < distances.get(neighbor.vertex)) {
                        distances.set(neighbor.vertex, newDistance);
                        previous.set(neighbor.vertex, current);
                    }
                }
            }
        }
        
        return { distances, previous };
    }
}
```

### **Bellman-Ford Algorithm**
```javascript
class BellmanFord {
    constructor(graph) {
        this.graph = graph;
    }
    
    shortestPath(start, end) {
        const distances = new Map();
        const previous = new Map();
        const vertices = this.graph.getAllVertices();
        
        // Initialize distances
        for (const vertex of vertices) {
            distances.set(vertex, Infinity);
        }
        distances.set(start, 0);
        
        // Relax edges V-1 times
        for (let i = 0; i < vertices.length - 1; i++) {
            for (const vertex of vertices) {
                const neighbors = this.graph.getNeighbors(vertex);
                for (const neighbor of neighbors) {
                    const newDistance = distances.get(vertex) + neighbor.weight;
                    if (newDistance < distances.get(neighbor.vertex)) {
                        distances.set(neighbor.vertex, newDistance);
                        previous.set(neighbor.vertex, vertex);
                    }
                }
            }
        }
        
        // Check for negative cycles
        for (const vertex of vertices) {
            const neighbors = this.graph.getNeighbors(vertex);
            for (const neighbor of neighbors) {
                const newDistance = distances.get(vertex) + neighbor.weight;
                if (newDistance < distances.get(neighbor.vertex)) {
                    throw new Error("Negative cycle detected");
                }
            }
        }
        
        // Reconstruct path
        const path = [];
        let current = end;
        while (current !== undefined) {
            path.unshift(current);
            current = previous.get(current);
        }
        
        return {
            path: path[0] === start ? path : null,
            distance: distances.get(end)
        };
    }
}
```

## 🌳 Minimum Spanning Tree Algorithms

### **Kruskal's Algorithm**
```javascript
class Kruskal {
    constructor(graph) {
        this.graph = graph;
    }
    
    findMST() {
        const edges = [];
        const vertices = this.graph.getAllVertices();
        const mst = [];
        const parent = new Map();
        const rank = new Map();
        
        // Initialize parent and rank
        for (const vertex of vertices) {
            parent.set(vertex, vertex);
            rank.set(vertex, 0);
        }
        
        // Collect all edges
        for (const vertex of vertices) {
            const neighbors = this.graph.getNeighbors(vertex);
            for (const neighbor of neighbors) {
                edges.push({
                    from: vertex,
                    to: neighbor.vertex,
                    weight: neighbor.weight
                });
            }
        }
        
        // Sort edges by weight
        edges.sort((a, b) => a.weight - b.weight);
        
        // Process edges
        for (const edge of edges) {
            const root1 = this.find(edge.from, parent);
            const root2 = this.find(edge.to, parent);
            
            if (root1 !== root2) {
                mst.push(edge);
                this.union(root1, root2, parent, rank);
            }
        }
        
        return mst;
    }
    
    find(vertex, parent) {
        if (parent.get(vertex) !== vertex) {
            parent.set(vertex, this.find(parent.get(vertex), parent));
        }
        return parent.get(vertex);
    }
    
    union(root1, root2, parent, rank) {
        if (rank.get(root1) < rank.get(root2)) {
            parent.set(root1, root2);
        } else if (rank.get(root1) > rank.get(root2)) {
            parent.set(root2, root1);
        } else {
            parent.set(root2, root1);
            rank.set(root1, rank.get(root1) + 1);
        }
    }
}
```

### **Prim's Algorithm**
```javascript
class Prim {
    constructor(graph) {
        this.graph = graph;
    }
    
    findMST(start) {
        const mst = [];
        const visited = new Set();
        const edges = [];
        
        visited.add(start);
        
        // Add edges from start vertex
        const neighbors = this.graph.getNeighbors(start);
        for (const neighbor of neighbors) {
            edges.push({
                from: start,
                to: neighbor.vertex,
                weight: neighbor.weight
            });
        }
        
        while (edges.length > 0) {
            // Find minimum weight edge
            edges.sort((a, b) => a.weight - b.weight);
            const minEdge = edges.shift();
            
            if (!visited.has(minEdge.to)) {
                mst.push(minEdge);
                visited.add(minEdge.to);
                
                // Add edges from new vertex
                const newNeighbors = this.graph.getNeighbors(minEdge.to);
                for (const neighbor of newNeighbors) {
                    if (!visited.has(neighbor.vertex)) {
                        edges.push({
                            from: minEdge.to,
                            to: neighbor.vertex,
                            weight: neighbor.weight
                        });
                    }
                }
            }
        }
        
        return mst;
    }
}
```

## 🔍 Graph Problem Solving

### **Problem 1: Number of Islands**
```javascript
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;
    
    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') {
            return;
        }
        
        grid[row][col] = '0'; // Mark as visited
        
        // Check all 4 directions
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                islands++;
                dfs(row, col);
            }
        }
    }
    
    return islands;
}

// Time: O(m*n), Space: O(m*n)
```

### **Problem 2: Course Schedule (Topological Sort)**
```javascript
function canFinish(numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = new Array(numCourses).fill(0);
    
    // Build graph and calculate in-degrees
    for (const [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) {
            graph.set(prereq, []);
        }
        graph.get(prereq).push(course);
        inDegree[course]++;
    }
    
    // Find courses with no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let completed = 0;
    
    while (queue.length > 0) {
        const course = queue.shift();
        completed++;
        
        if (graph.has(course)) {
            for (const nextCourse of graph.get(course)) {
                inDegree[nextCourse]--;
                if (inDegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }
    }
    
    return completed === numCourses;
}

// Time: O(V + E), Space: O(V + E)
```

### **Problem 3: Word Ladder**
```javascript
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [{ word: beginWord, length: 1 }];
    const visited = new Set();
    
    while (queue.length > 0) {
        const { word, length } = queue.shift();
        
        if (word === endWord) {
            return length;
        }
        
        // Try all possible one-character changes
        for (let i = 0; i < word.length; i++) {
            for (let c = 0; c < 26; c++) {
                const newWord = word.substring(0, i) + String.fromCharCode(97 + c) + word.substring(i + 1);
                
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push({ word: newWord, length: length + 1 });
                }
            }
        }
    }
    
    return 0;
}

// Time: O(M^2 * N), Space: O(M * N)
```

## 🎯 Graph Applications

### **1. Social Network Analysis**
```javascript
class SocialNetwork {
    constructor() {
        this.graph = new Graph();
    }
    
    addUser(user) {
        this.graph.addVertex(user);
    }
    
    addFriendship(user1, user2) {
        this.graph.addEdge(user1, user2);
    }
    
    findMutualFriends(user1, user2) {
        const friends1 = new Set(this.graph.getNeighbors(user1).map(n => n.vertex));
        const friends2 = new Set(this.graph.getNeighbors(user2).map(n => n.vertex));
        
        return [...friends1].filter(friend => friends2.has(friend));
    }
    
    findShortestPath(user1, user2) {
        const bfs = new BFS(this.graph);
        return bfs.shortestPath(user1, user2);
    }
    
    findInfluencers() {
        const vertices = this.graph.getAllVertices();
        const influence = new Map();
        
        for (const vertex of vertices) {
            const neighbors = this.graph.getNeighbors(vertex);
            influence.set(vertex, neighbors.length);
        }
        
        return [...influence.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }
}
```

### **2. Network Routing**
```javascript
class NetworkRouter {
    constructor() {
        this.graph = new Graph();
    }
    
    addNode(node) {
        this.graph.addVertex(node);
    }
    
    addConnection(node1, node2, latency) {
        this.graph.addEdge(node1, node2, latency);
    }
    
    findOptimalRoute(source, destination) {
        const dijkstra = new Dijkstra(this.graph);
        return dijkstra.shortestPath(source, destination);
    }
    
    findBackupRoutes(source, destination) {
        const allPaths = [];
        const visited = new Set();
        
        function dfs(current, path) {
            if (current === destination) {
                allPaths.push([...path]);
                return;
            }
            
            visited.add(current);
            const neighbors = this.graph.getNeighbors(current);
            
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.vertex)) {
                    path.push(neighbor.vertex);
                    dfs(neighbor.vertex, path);
                    path.pop();
                }
            }
            
            visited.delete(current);
        }
        
        dfs(source, [source]);
        return allPaths.sort((a, b) => a.length - b.length);
    }
}
```

## 🎯 Key Takeaways

1. **Graphs** represent relationships between objects
2. **DFS** explores as far as possible before backtracking
3. **BFS** explores level by level, finding shortest paths
4. **Dijkstra** finds shortest paths in weighted graphs
5. **MST algorithms** find minimum cost to connect all vertices

## 📚 Next Steps

Now that you understand graphs and graph algorithms, let's learn about:
- [Sorting Algorithms](./07-sorting-algorithms.md)
- [Searching Algorithms](./08-searching-algorithms.md)
- [Dynamic Programming](./09-dynamic-programming.md)

---

*Remember: Graphs are powerful for modeling real-world relationships. Master graph algorithms to solve complex problems efficiently!*
