# Arrays and Linked Lists

## 🎯 Learning Objectives
- Understand the fundamental differences between arrays and linked lists
- Master array operations and their time complexities
- Implement linked lists from scratch
- Learn when to use arrays vs linked lists
- Practice common array and linked list problems

## 📊 Arrays

### **What is an Array?**
An array is a collection of elements stored in contiguous memory locations, where each element can be accessed using an index.

```javascript
// Array declaration and initialization
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];
const mixed = [1, "hello", true, { name: "John" }];
```

### **Array Operations and Time Complexities**

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Access | O(1) | Get element at index |
| Search | O(n) | Find element in array |
| Insertion | O(n) | Insert at beginning/middle |
| Deletion | O(n) | Delete from beginning/middle |
| Append | O(1) | Insert at end (amortized) |

### **Array Implementation**
```javascript
class DynamicArray {
    constructor(initialCapacity = 2) {
        this.capacity = initialCapacity;
        this.length = 0;
        this.data = new Array(this.capacity);
    }
    
    // O(1) - Get element at index
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        return this.data[index];
    }
    
    // O(1) - Set element at index
    set(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        this.data[index] = value;
    }
    
    // O(1) amortized - Add element at end
    push(value) {
        if (this.length >= this.capacity) {
            this.resize();
        }
        this.data[this.length] = value;
        this.length++;
    }
    
    // O(n) - Insert at index
    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        
        if (this.length >= this.capacity) {
            this.resize();
        }
        
        // Shift elements to the right
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        
        this.data[index] = value;
        this.length++;
    }
    
    // O(n) - Delete at index
    delete(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        
        // Shift elements to the left
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        
        this.length--;
    }
    
    // O(1) - Remove last element
    pop() {
        if (this.length === 0) {
            throw new Error("Array is empty");
        }
        const value = this.data[this.length - 1];
        this.length--;
        return value;
    }
    
    // O(n) - Resize array when capacity is exceeded
    resize() {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
    
    // O(n) - Search for value
    indexOf(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) {
                return i;
            }
        }
        return -1;
    }
    
    // O(n) - Check if array contains value
    contains(value) {
        return this.indexOf(value) !== -1;
    }
    
    // O(n) - Get array as string
    toString() {
        let result = "[";
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) result += ", ";
        }
        result += "]";
        return result;
    }
}

// Usage example
const arr = new DynamicArray();
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr.toString()); // [1, 2, 3]
arr.insert(1, 1.5);
console.log(arr.toString()); // [1, 1.5, 2, 3]
arr.delete(1);
console.log(arr.toString()); // [1, 2, 3]
```

### **Common Array Problems**

#### **1. Two Sum Problem**
```javascript
// Given an array of integers and a target sum, find two numbers that add up to the target
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return [];
}

// Time: O(n), Space: O(n)
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

#### **2. Maximum Subarray (Kadane's Algorithm)**
```javascript
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Time: O(n), Space: O(1)
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
```

#### **3. Rotate Array**
```javascript
function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Time: O(n), Space: O(1)
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // [5, 6, 7, 1, 2, 3, 4]
```

## 🔗 Linked Lists

### **What is a Linked List?**
A linked list is a linear data structure where elements are stored in nodes, and each node contains a data field and a reference to the next node.

```javascript
// Node class for linked list
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

### **Linked List Operations and Time Complexities**

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Access | O(n) | Get element at index |
| Search | O(n) | Find element in list |
| Insertion | O(1) | Insert at beginning |
| Deletion | O(1) | Delete from beginning |
| Append | O(n) | Insert at end |

### **Singly Linked List Implementation**
```javascript
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // O(1) - Add element at beginning
    prepend(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    // O(n) - Add element at end
    append(data) {
        const newNode = new ListNode(data);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    // O(n) - Insert at index
    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        
        if (index === 0) {
            this.prepend(data);
            return;
        }
        
        const newNode = new ListNode(data);
        let current = this.head;
        
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
    
    // O(n) - Delete at index
    deleteAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        current.next = current.next.next;
        this.size--;
    }
    
    // O(n) - Get element at index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.data;
    }
    
    // O(n) - Search for element
    indexOf(data) {
        let current = this.head;
        let index = 0;
        
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        
        return -1;
    }
    
    // O(n) - Check if list contains element
    contains(data) {
        return this.indexOf(data) !== -1;
    }
    
    // O(1) - Check if list is empty
    isEmpty() {
        return this.size === 0;
    }
    
    // O(n) - Get list size
    getSize() {
        return this.size;
    }
    
    // O(n) - Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }
    
    // O(n) - Print list
    print() {
        let current = this.head;
        let result = "";
        
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        
        result += "null";
        console.log(result);
    }
    
    // O(n) - Reverse the list
    reverse() {
        let prev = null;
        let current = this.head;
        
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        this.head = prev;
    }
}

// Usage example
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3 -> null
list.reverse();
list.print(); // 3 -> 2 -> 1 -> 0 -> null
```

### **Doubly Linked List Implementation**
```javascript
class DoublyListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    // O(1) - Add at beginning
    prepend(data) {
        const newNode = new DoublyListNode(data);
        
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    
    // O(1) - Add at end
    append(data) {
        const newNode = new DoublyListNode(data);
        
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    
    // O(1) - Remove from beginning
    removeFirst() {
        if (!this.head) return null;
        
        const data = this.head.data;
        this.head = this.head.next;
        
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        
        this.size--;
        return data;
    }
    
    // O(1) - Remove from end
    removeLast() {
        if (!this.tail) return null;
        
        const data = this.tail.data;
        this.tail = this.tail.prev;
        
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        
        this.size--;
        return data;
    }
    
    // O(n) - Print forward
    printForward() {
        let current = this.head;
        let result = "";
        
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        
        result += "null";
        console.log(result);
    }
    
    // O(n) - Print backward
    printBackward() {
        let current = this.tail;
        let result = "";
        
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        
        result += "null";
        console.log(result);
    }
}
```

### **Common Linked List Problems**

#### **1. Detect Cycle in Linked List**
```javascript
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Time: O(n), Space: O(1)
```

#### **2. Find Middle of Linked List**
```javascript
function findMiddle(head) {
    if (!head) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Time: O(n), Space: O(1)
```

#### **3. Merge Two Sorted Lists**
```javascript
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.data <= l2.data) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

// Time: O(n + m), Space: O(1)
```

## ⚖️ Arrays vs Linked Lists

### **Comparison Table**

| Feature | Array | Linked List |
|---------|-------|-------------|
| Memory | Contiguous | Non-contiguous |
| Access | O(1) | O(n) |
| Search | O(n) | O(n) |
| Insertion | O(n) | O(1) at beginning |
| Deletion | O(n) | O(1) at beginning |
| Memory Overhead | Low | High (pointers) |
| Cache Performance | Good | Poor |
| Dynamic Size | No (fixed) | Yes |

### **When to Use Arrays**
- **Random access** is frequent
- **Memory efficiency** is important
- **Cache performance** matters
- **Size is known** in advance

### **When to Use Linked Lists**
- **Frequent insertions/deletions** at beginning
- **Size is unknown** or varies significantly
- **Memory is fragmented**
- **Implementing stacks/queues**

## 🏃‍♂️ Practice Problems

### **Problem 1: Remove Duplicates from Sorted Array**
```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}

// Time: O(n), Space: O(1)
```

### **Problem 2: Reverse Linked List**
```javascript
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}

// Time: O(n), Space: O(1)
```

### **Problem 3: Find Intersection of Two Arrays**
```javascript
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();
    
    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }
    
    return Array.from(result);
}

// Time: O(n + m), Space: O(n + m)
```

## 🎯 Key Takeaways

1. **Arrays** provide fast random access but slow insertions/deletions
2. **Linked Lists** provide fast insertions/deletions but slow random access
3. **Choose based on use case** - consider access patterns and operations
4. **Understand trade-offs** between time and space complexity
5. **Practice both** to become comfortable with both data structures

## 📚 Next Steps

Now that you understand arrays and linked lists, let's learn about:
- [Stacks and Queues](./04-stacks-queues.md)
- [Trees and Binary Trees](./05-trees-binary-trees.md)
- [Graphs and Graph Algorithms](./06-graphs-algorithms.md)

---

*Remember: Arrays and linked lists are fundamental building blocks for more complex data structures. Master these first before moving on to advanced topics!*
