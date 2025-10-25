# Trees and Binary Trees

## 🎯 Learning Objectives
- Understand tree terminology and properties
- Master binary tree operations and traversals
- Implement binary search trees (BST)
- Learn about balanced trees (AVL, Red-Black)
- Practice tree-based algorithms and problems

## 🌳 Tree Fundamentals

### **What is a Tree?**
A tree is a hierarchical data structure consisting of nodes connected by edges. It has a root node and no cycles.

```javascript
// Tree terminology
// Root - Top node of the tree
// Parent - Node with children
// Child - Node connected to a parent
// Leaf - Node with no children
// Height - Longest path from root to leaf
// Depth - Distance from root to a node
// Subtree - Tree formed by a node and its descendants
```

### **Tree Properties**
- **Connected** - Every node is reachable from root
- **Acyclic** - No cycles in the tree
- **Hierarchical** - Parent-child relationships
- **Unique Path** - Only one path between any two nodes

### **Basic Tree Node**
```javascript
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = []; // For general trees
        this.parent = null;
    }
    
    addChild(child) {
        child.parent = this;
        this.children.push(child);
    }
    
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
            child.parent = null;
        }
    }
    
    isLeaf() {
        return this.children.length === 0;
    }
    
    getDepth() {
        let depth = 0;
        let current = this.parent;
        while (current) {
            depth++;
            current = current.parent;
        }
        return depth;
    }
}
```

### **Tree Traversal**
```javascript
class Tree {
    constructor(root) {
        this.root = root;
    }
    
    // Depth-First Search (DFS)
    preOrder(node = this.root, result = []) {
        if (!node) return result;
        
        result.push(node.data);
        for (const child of node.children) {
            this.preOrder(child, result);
        }
        return result;
    }
    
    postOrder(node = this.root, result = []) {
        if (!node) return result;
        
        for (const child of node.children) {
            this.postOrder(child, result);
        }
        result.push(node.data);
        return result;
    }
    
    // Breadth-First Search (BFS)
    levelOrder() {
        if (!this.root) return [];
        
        const result = [];
        const queue = [this.root];
        
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            queue.push(...node.children);
        }
        
        return result;
    }
    
    // Find node by value
    find(value, node = this.root) {
        if (!node) return null;
        if (node.data === value) return node;
        
        for (const child of node.children) {
            const found = this.find(value, child);
            if (found) return found;
        }
        
        return null;
    }
    
    // Get height of tree
    getHeight(node = this.root) {
        if (!node) return 0;
        if (node.isLeaf()) return 1;
        
        let maxChildHeight = 0;
        for (const child of node.children) {
            maxChildHeight = Math.max(maxChildHeight, this.getHeight(child));
        }
        
        return 1 + maxChildHeight;
    }
    
    // Count nodes
    countNodes(node = this.root) {
        if (!node) return 0;
        
        let count = 1;
        for (const child of node.children) {
            count += this.countNodes(child);
        }
        
        return count;
    }
}
```

## 🌲 Binary Trees

### **What is a Binary Tree?**
A binary tree is a tree where each node has at most two children (left and right).

```javascript
class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    
    isLeaf() {
        return this.left === null && this.right === null;
    }
    
    hasLeftChild() {
        return this.left !== null;
    }
    
    hasRightChild() {
        return this.right !== null;
    }
    
    hasBothChildren() {
        return this.left !== null && this.right !== null;
    }
}
```

### **Binary Tree Operations**
```javascript
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    
    // Insert node
    insert(data) {
        const newNode = new BinaryTreeNode(data);
        
        if (!this.root) {
            this.root = newNode;
            return;
        }
        
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            
            if (!node.left) {
                node.left = newNode;
                newNode.parent = node;
                return;
            }
            
            if (!node.right) {
                node.right = newNode;
                newNode.parent = node;
                return;
            }
            
            queue.push(node.left, node.right);
        }
    }
    
    // Search for node
    search(data, node = this.root) {
        if (!node) return null;
        if (node.data === data) return node;
        
        const leftResult = this.search(data, node.left);
        if (leftResult) return leftResult;
        
        return this.search(data, node.right);
    }
    
    // Get height
    getHeight(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right)
        );
    }
    
    // Count nodes
    countNodes(node = this.root) {
        if (!node) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
    
    // Check if tree is balanced
    isBalanced(node = this.root) {
        if (!node) return true;
        
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        
        return Math.abs(leftHeight - rightHeight) <= 1 &&
               this.isBalanced(node.left) &&
               this.isBalanced(node.right);
    }
}
```

### **Binary Tree Traversals**
```javascript
class BinaryTreeTraversal {
    // Pre-order: Root -> Left -> Right
    preOrder(node, result = []) {
        if (!node) return result;
        
        result.push(node.data);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }
    
    // In-order: Left -> Root -> Right
    inOrder(node, result = []) {
        if (!node) return result;
        
        this.inOrder(node.left, result);
        result.push(node.data);
        this.inOrder(node.right, result);
        return result;
    }
    
    // Post-order: Left -> Right -> Root
    postOrder(node, result = []) {
        if (!node) return result;
        
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.data);
        return result;
    }
    
    // Level-order (BFS)
    levelOrder(root) {
        if (!root) return [];
        
        const result = [];
        const queue = [root];
        
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        return result;
    }
    
    // Iterative traversals
    preOrderIterative(root) {
        if (!root) return [];
        
        const result = [];
        const stack = [root];
        
        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.data);
            
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        
        return result;
    }
    
    inOrderIterative(root) {
        const result = [];
        const stack = [];
        let current = root;
        
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            
            current = stack.pop();
            result.push(current.data);
            current = current.right;
        }
        
        return result;
    }
}
```

## 🔍 Binary Search Trees (BST)

### **What is a BST?**
A Binary Search Tree is a binary tree where:
- Left subtree contains only nodes with values less than the parent
- Right subtree contains only nodes with values greater than the parent
- Both subtrees are also BSTs

### **BST Implementation**
```javascript
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    // Insert node
    insert(data) {
        const newNode = new BSTNode(data);
        
        if (!this.root) {
            this.root = newNode;
            return;
        }
        
        this.insertNode(this.root, newNode);
    }
    
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    
    // Search for node
    search(data, node = this.root) {
        if (!node || node.data === data) {
            return node;
        }
        
        if (data < node.data) {
            return this.search(data, node.left);
        } else {
            return this.search(data, node.right);
        }
    }
    
    // Find minimum value
    findMin(node = this.root) {
        if (!node) return null;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    
    // Find maximum value
    findMax(node = this.root) {
        if (!node) return null;
        while (node.right) {
            node = node.right;
        }
        return node;
    }
    
    // Delete node
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }
    
    deleteNode(node, data) {
        if (!node) return null;
        
        if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
        } else {
            // Node to be deleted found
            
            // Case 1: No children
            if (!node.left && !node.right) {
                return null;
            }
            
            // Case 2: One child
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            
            // Case 3: Two children
            const successor = this.findMin(node.right);
            node.data = successor.data;
            node.right = this.deleteNode(node.right, successor.data);
        }
        
        return node;
    }
    
    // Check if BST is valid
    isValid(node = this.root, min = null, max = null) {
        if (!node) return true;
        
        if ((min !== null && node.data <= min) || 
            (max !== null && node.data >= max)) {
            return false;
        }
        
        return this.isValid(node.left, min, node.data) &&
               this.isValid(node.right, node.data, max);
    }
    
    // Get height
    getHeight(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right)
        );
    }
    
    // In-order traversal (gives sorted order)
    inOrder(node = this.root, result = []) {
        if (!node) return result;
        
        this.inOrder(node.left, result);
        result.push(node.data);
        this.inOrder(node.right, result);
        return result;
    }
}
```

### **BST Operations and Time Complexities**

| Operation | Average Case | Worst Case | Description |
|-----------|---------------|------------|-------------|
| Search | O(log n) | O(n) | Find element in BST |
| Insert | O(log n) | O(n) | Add element to BST |
| Delete | O(log n) | O(n) | Remove element from BST |
| Min/Max | O(log n) | O(n) | Find minimum/maximum |
| Traversal | O(n) | O(n) | Visit all nodes |

## 🌳 Balanced Trees

### **AVL Tree Implementation**
```javascript
class AVLNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    
    // Get height of node
    getHeight(node) {
        return node ? node.height : 0;
    }
    
    // Get balance factor
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    
    // Update height
    updateHeight(node) {
        node.height = 1 + Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right)
        );
    }
    
    // Right rotation
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        this.updateHeight(y);
        this.updateHeight(x);
        
        return x;
    }
    
    // Left rotation
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        this.updateHeight(x);
        this.updateHeight(y);
        
        return y;
    }
    
    // Insert node
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }
    
    insertNode(node, data) {
        // Perform normal BST insertion
        if (!node) {
            return new AVLNode(data);
        }
        
        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        } else {
            return node; // Duplicate keys not allowed
        }
        
        // Update height
        this.updateHeight(node);
        
        // Get balance factor
        const balance = this.getBalance(node);
        
        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return this.rightRotate(node);
        }
        
        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return this.leftRotate(node);
        }
        
        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        
        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        
        return node;
    }
}
```

## 🏃‍♂️ Common Tree Problems

### **Problem 1: Maximum Depth of Binary Tree**
```javascript
function maxDepth(root) {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Time: O(n), Space: O(h) where h is height
```

### **Problem 2: Validate Binary Search Tree**
```javascript
function isValidBST(root, min = null, max = null) {
    if (!root) return true;
    
    if ((min !== null && root.data <= min) || 
        (max !== null && root.data >= max)) {
        return false;
    }
    
    return isValidBST(root.left, min, root.data) &&
           isValidBST(root.right, root.data, max);
}

// Time: O(n), Space: O(h)
```

### **Problem 3: Lowest Common Ancestor**
```javascript
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    if (left && right) {
        return root;
    }
    
    return left || right;
}

// Time: O(n), Space: O(h)
```

### **Problem 4: Binary Tree Level Order Traversal**
```javascript
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.data);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Time: O(n), Space: O(w) where w is maximum width
```

### **Problem 5: Serialize and Deserialize Binary Tree**
```javascript
function serialize(root) {
    const result = [];
    
    function preOrder(node) {
        if (!node) {
            result.push('null');
            return;
        }
        
        result.push(node.data.toString());
        preOrder(node.left);
        preOrder(node.right);
    }
    
    preOrder(root);
    return result.join(',');
}

function deserialize(data) {
    const values = data.split(',');
    let index = 0;
    
    function buildTree() {
        if (index >= values.length || values[index] === 'null') {
            index++;
            return null;
        }
        
        const node = new BinaryTreeNode(parseInt(values[index++]));
        node.left = buildTree();
        node.right = buildTree();
        
        return node;
    }
    
    return buildTree();
}

// Time: O(n), Space: O(n)
```

## 🎯 Tree Applications

### **1. Expression Trees**
```javascript
class ExpressionTree {
    constructor(expression) {
        this.root = this.buildTree(expression);
    }
    
    buildTree(expression) {
        const tokens = expression.split(' ');
        const stack = [];
        
        for (const token of tokens) {
            if (this.isOperator(token)) {
                const right = stack.pop();
                const left = stack.pop();
                const node = new BinaryTreeNode(token);
                node.left = left;
                node.right = right;
                stack.push(node);
            } else {
                stack.push(new BinaryTreeNode(parseInt(token)));
            }
        }
        
        return stack.pop();
    }
    
    isOperator(token) {
        return ['+', '-', '*', '/'].includes(token);
    }
    
    evaluate(node = this.root) {
        if (!node) return 0;
        
        if (node.isLeaf()) {
            return node.data;
        }
        
        const left = this.evaluate(node.left);
        const right = this.evaluate(node.right);
        
        switch (node.data) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/': return Math.floor(left / right);
            default: return 0;
        }
    }
}

// Usage: "3 4 + 2 * 1 -" = ((3 + 4) * 2) - 1 = 13
const tree = new ExpressionTree("3 4 + 2 * 1 -");
console.log(tree.evaluate()); // 13
```

### **2. Trie (Prefix Tree)**
```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        return true;
    }
}

// Usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("app")); // true
console.log(trie.startsWith("app")); // true
```

## 🎯 Key Takeaways

1. **Trees** are hierarchical data structures with no cycles
2. **Binary trees** have at most two children per node
3. **BSTs** maintain sorted order for efficient searching
4. **Balanced trees** ensure O(log n) operations
5. **Tree traversals** are fundamental for tree algorithms

## 📚 Next Steps

Now that you understand trees and binary trees, let's learn about:
- [Graphs and Graph Algorithms](./06-graphs-algorithms.md)
- [Sorting Algorithms](./07-sorting-algorithms.md)
- [Searching Algorithms](./08-searching-algorithms.md)

---

*Remember: Trees are fundamental for many algorithms and data structures. Master binary trees before moving on to more complex tree structures!*
