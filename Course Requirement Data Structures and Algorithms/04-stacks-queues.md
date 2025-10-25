# Stacks and Queues

## 🎯 Learning Objectives
- Understand the LIFO (Last In, First Out) principle of stacks
- Master the FIFO (First In, First Out) principle of queues
- Implement stacks and queues from scratch
- Learn common applications of stacks and queues
- Practice solving problems using these data structures

## 📚 Stacks

### **What is a Stack?**
A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can only be added or removed from the top of the stack.

```javascript
// Stack operations
// push() - Add element to top
// pop() - Remove element from top
// peek() - View top element without removing
// isEmpty() - Check if stack is empty
// size() - Get number of elements
```

### **Stack Operations and Time Complexities**

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Push | O(1) | Add element to top |
| Pop | O(1) | Remove element from top |
| Peek | O(1) | View top element |
| Search | O(n) | Find element in stack |
| Size | O(1) | Get number of elements |

### **Stack Implementation Using Array**
```javascript
class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }
    
    // O(1) - Add element to top
    push(element) {
        this.top++;
        this.items[this.top] = element;
    }
    
    // O(1) - Remove element from top
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const element = this.items[this.top];
        this.top--;
        return element;
    }
    
    // O(1) - View top element without removing
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.top];
    }
    
    // O(1) - Check if stack is empty
    isEmpty() {
        return this.top === -1;
    }
    
    // O(1) - Get number of elements
    size() {
        return this.top + 1;
    }
    
    // O(n) - Print stack
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        
        let result = "Stack: ";
        for (let i = this.top; i >= 0; i--) {
            result += this.items[i] + " ";
        }
        console.log(result);
    }
    
    // O(n) - Clear stack
    clear() {
        this.items = [];
        this.top = -1;
    }
}

// Usage example
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Stack: 3 2 1
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
stack.print(); // Stack: 2 1
```

### **Stack Implementation Using Linked List**
```javascript
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    
    // O(1) - Add element to top
    push(data) {
        const newNode = new StackNode(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    
    // O(1) - Remove element from top
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        
        const data = this.top.data;
        this.top = this.top.next;
        this.size--;
        return data;
    }
    
    // O(1) - View top element
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.top.data;
    }
    
    // O(1) - Check if empty
    isEmpty() {
        return this.top === null;
    }
    
    // O(1) - Get size
    getSize() {
        return this.size;
    }
    
    // O(n) - Print stack
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        
        let current = this.top;
        let result = "Stack: ";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        console.log(result);
    }
}
```

### **Common Stack Applications**

#### **1. Expression Evaluation**
```javascript
function evaluatePostfix(expression) {
    const stack = new Stack();
    const tokens = expression.split(' ');
    
    for (const token of tokens) {
        if (isNumber(token)) {
            stack.push(parseInt(token));
        } else if (isOperator(token)) {
            const b = stack.pop();
            const a = stack.pop();
            const result = performOperation(a, b, token);
            stack.push(result);
        }
    }
    
    return stack.pop();
}

function isNumber(token) {
    return !isNaN(token);
}

function isOperator(token) {
    return ['+', '-', '*', '/'].includes(token);
}

function performOperation(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return Math.floor(a / b);
        default: throw new Error("Invalid operator");
    }
}

// Example: "3 4 + 2 * 1 -" = ((3 + 4) * 2) - 1 = 13
console.log(evaluatePostfix("3 4 + 2 * 1 -")); // 13
```

#### **2. Balanced Parentheses**
```javascript
function isBalanced(expression) {
    const stack = new Stack();
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    
    for (const char of expression) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.isEmpty()) {
                return false;
            }
            
            const lastOpening = stack.pop();
            const openingIndex = opening.indexOf(lastOpening);
            const closingIndex = closing.indexOf(char);
            
            if (openingIndex !== closingIndex) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

// Examples
console.log(isBalanced("()")); // true
console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("((())")); // false
```

#### **3. Undo/Redo Functionality**
```javascript
class TextEditor {
    constructor() {
        this.content = "";
        this.undoStack = new Stack();
        this.redoStack = new Stack();
    }
    
    type(text) {
        this.undoStack.push(this.content);
        this.content += text;
        this.redoStack.clear(); // Clear redo when new action is performed
    }
    
    undo() {
        if (!this.undoStack.isEmpty()) {
            this.redoStack.push(this.content);
            this.content = this.undoStack.pop();
        }
    }
    
    redo() {
        if (!this.redoStack.isEmpty()) {
            this.undoStack.push(this.content);
            this.content = this.redoStack.pop();
        }
    }
    
    getContent() {
        return this.content;
    }
}

// Usage
const editor = new TextEditor();
editor.type("Hello");
editor.type(" World");
console.log(editor.getContent()); // "Hello World"
editor.undo();
console.log(editor.getContent()); // "Hello"
editor.redo();
console.log(editor.getContent()); // "Hello World"
```

## 🚶‍♂️ Queues

### **What is a Queue?**
A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear and removed from the front.

```javascript
// Queue operations
// enqueue() - Add element to rear
// dequeue() - Remove element from front
// front() - View front element without removing
// rear() - View rear element without removing
// isEmpty() - Check if queue is empty
// size() - Get number of elements
```

### **Queue Operations and Time Complexities**

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Enqueue | O(1) | Add element to rear |
| Dequeue | O(1) | Remove element from front |
| Front | O(1) | View front element |
| Rear | O(1) | View rear element |
| Search | O(n) | Find element in queue |
| Size | O(1) | Get number of elements |

### **Queue Implementation Using Array**
```javascript
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    // O(1) - Add element to rear
    enqueue(element) {
        this.rear++;
        this.items[this.rear] = element;
        this.size++;
    }
    
    // O(1) - Remove element from front
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        const element = this.items[this.front];
        this.front++;
        this.size--;
        
        // Reset when queue becomes empty
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = -1;
        }
        
        return element;
    }
    
    // O(1) - View front element
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[this.front];
    }
    
    // O(1) - View rear element
    rear() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[this.rear];
    }
    
    // O(1) - Check if empty
    isEmpty() {
        return this.size === 0;
    }
    
    // O(1) - Get size
    getSize() {
        return this.size;
    }
    
    // O(n) - Print queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        
        let result = "Queue: ";
        for (let i = this.front; i <= this.rear; i++) {
            result += this.items[i] + " ";
        }
        console.log(result);
    }
}
```

### **Queue Implementation Using Linked List**
```javascript
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    // O(1) - Add element to rear
    enqueue(data) {
        const newNode = new QueueNode(data);
        
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    
    // O(1) - Remove element from front
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        const data = this.front.data;
        this.front = this.front.next;
        
        if (this.front === null) {
            this.rear = null;
        }
        
        this.size--;
        return data;
    }
    
    // O(1) - View front element
    getFront() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.front.data;
    }
    
    // O(1) - View rear element
    getRear() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.rear.data;
    }
    
    // O(1) - Check if empty
    isEmpty() {
        return this.front === null;
    }
    
    // O(1) - Get size
    getSize() {
        return this.size;
    }
    
    // O(n) - Print queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        
        let current = this.front;
        let result = "Queue: ";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        console.log(result);
    }
}
```

### **Circular Queue Implementation**
```javascript
class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    // O(1) - Add element to rear
    enqueue(element) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.size++;
    }
    
    // O(1) - Remove element from front
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        const element = this.items[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return element;
    }
    
    // O(1) - View front element
    getFront() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[this.front];
    }
    
    // O(1) - View rear element
    getRear() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[this.rear];
    }
    
    // O(1) - Check if empty
    isEmpty() {
        return this.size === 0;
    }
    
    // O(1) - Check if full
    isFull() {
        return this.size === this.capacity;
    }
    
    // O(1) - Get size
    getSize() {
        return this.size;
    }
    
    // O(n) - Print queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        
        let result = "Queue: ";
        let count = 0;
        let index = this.front;
        
        while (count < this.size) {
            result += this.items[index] + " ";
            index = (index + 1) % this.capacity;
            count++;
        }
        console.log(result);
    }
}
```

### **Priority Queue Implementation**
```javascript
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    // O(n) - Add element with priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        
        if (!added) {
            this.items.push(queueElement);
        }
    }
    
    // O(1) - Remove highest priority element
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift().element;
    }
    
    // O(1) - View highest priority element
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0].element;
    }
    
    // O(1) - Check if empty
    isEmpty() {
        return this.items.length === 0;
    }
    
    // O(1) - Get size
    size() {
        return this.items.length;
    }
    
    // O(n) - Print queue
    print() {
        let result = "Priority Queue: ";
        for (const item of this.items) {
            result += `${item.element}(${item.priority}) `;
        }
        console.log(result);
    }
}

// Usage example
const pq = new PriorityQueue();
pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);
pq.print(); // Priority Queue: Task 2(1) Task 3(2) Task 1(3)
console.log(pq.dequeue()); // Task 2
```

### **Common Queue Applications**

#### **1. Breadth-First Search (BFS)**
```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = new Queue();
    const result = [];
    
    queue.enqueue(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        const vertex = queue.dequeue();
        result.push(vertex);
        
        for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.enqueue(neighbor);
            }
        }
    }
    
    return result;
}

// Example graph
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
```

#### **2. Task Scheduling**
```javascript
class TaskScheduler {
    constructor() {
        this.taskQueue = new Queue();
        this.completedTasks = [];
    }
    
    addTask(task) {
        this.taskQueue.enqueue(task);
    }
    
    processNextTask() {
        if (this.taskQueue.isEmpty()) {
            console.log("No tasks to process");
            return;
        }
        
        const task = this.taskQueue.dequeue();
        console.log(`Processing: ${task}`);
        this.completedTasks.push(task);
    }
    
    getCompletedTasks() {
        return this.completedTasks;
    }
    
    getPendingTasks() {
        return this.taskQueue.size();
    }
}

// Usage
const scheduler = new TaskScheduler();
scheduler.addTask("Send email");
scheduler.addTask("Update database");
scheduler.addTask("Generate report");
scheduler.processNextTask(); // Processing: Send email
scheduler.processNextTask(); // Processing: Update database
```

## 🏃‍♂️ Practice Problems

### **Problem 1: Valid Parentheses**
```javascript
function isValid(s) {
    const stack = new Stack();
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char in mapping) {
            if (stack.isEmpty() || stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.isEmpty();
}

// Time: O(n), Space: O(n)
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
```

### **Problem 2: Sliding Window Maximum**
```javascript
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove elements smaller than current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add maximum of current window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}

// Time: O(n), Space: O(k)
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
```

### **Problem 3: Implement Stack using Queues**
```javascript
class StackUsingQueues {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    
    push(x) {
        this.q2.enqueue(x);
        while (!this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }
        [this.q1, this.q2] = [this.q2, this.q1];
    }
    
    pop() {
        return this.q1.dequeue();
    }
    
    top() {
        return this.q1.front();
    }
    
    empty() {
        return this.q1.isEmpty();
    }
}
```

## 🎯 Key Takeaways

1. **Stacks** follow LIFO principle - last in, first out
2. **Queues** follow FIFO principle - first in, first out
3. **Both** have O(1) time complexity for main operations
4. **Stacks** are great for recursion, undo operations, and expression evaluation
5. **Queues** are essential for BFS, task scheduling, and buffering

## 📚 Next Steps

Now that you understand stacks and queues, let's learn about:
- [Trees and Binary Trees](./05-trees-binary-trees.md)
- [Graphs and Graph Algorithms](./06-graphs-algorithms.md)
- [Sorting Algorithms](./07-sorting-algorithms.md)

---

*Remember: Stacks and queues are fundamental building blocks for many algorithms. Master these before moving on to more complex data structures!*
