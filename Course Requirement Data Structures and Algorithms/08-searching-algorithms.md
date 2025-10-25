# Searching Algorithms

## 🎯 Learning Objectives
- Understand different searching algorithms and their applications
- Master linear and binary search implementations
- Learn advanced searching techniques (interpolation, exponential)
- Understand search optimization strategies
- Practice search algorithm problem solving

## 🔍 Search Algorithm Overview

### **What is Searching?**
Searching is the process of finding a specific element or value in a data structure.

```javascript
// Search terminology
// Target - The element we're looking for
// Key - The value used to identify the element
// Index - The position of the element in the data structure
// Found - Whether the element exists in the data structure
// Not Found - The element doesn't exist in the data structure
```

### **Search Algorithm Comparison**

| Algorithm | Time Complexity | Space Complexity | Prerequisites | Best For |
|-----------|----------------|------------------|---------------|----------|
| Linear Search | O(n) | O(1) | None | Unsorted data |
| Binary Search | O(log n) | O(1) | Sorted data | Sorted arrays |
| Interpolation Search | O(log log n) | O(1) | Sorted, uniformly distributed | Uniform data |
| Exponential Search | O(log n) | O(1) | Sorted data | Infinite arrays |
| Jump Search | O(√n) | O(1) | Sorted data | Large sorted arrays |
| Ternary Search | O(log₃ n) | O(1) | Sorted data | Unimodal functions |

## 🔍 Basic Searching Algorithms

### **1. Linear Search**
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

// Recursive version
function linearSearchRecursive(arr, target, index = 0) {
    if (index >= arr.length) return -1;
    if (arr[index] === target) return index;
    return linearSearchRecursive(arr, target, index + 1);
}

// Find all occurrences
function linearSearchAll(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}

// Find last occurrence
function linearSearchLast(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Time: O(n), Space: O(1)
```

### **2. Binary Search**
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Recursive version
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Find first occurrence
function binarySearchFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Find last occurrence
function binarySearchLast(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Count occurrences
function binarySearchCount(arr, target) {
    const first = binarySearchFirst(arr, target);
    if (first === -1) return 0;
    
    const last = binarySearchLast(arr, target);
    return last - first + 1;
}

// Time: O(log n), Space: O(1)
```

## 🚀 Advanced Searching Algorithms

### **3. Interpolation Search**
```javascript
function interpolationSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right && target >= arr[left] && target <= arr[right]) {
        // Calculate position using interpolation formula
        const pos = left + Math.floor(
            ((target - arr[left]) * (right - left)) / (arr[right] - arr[left])
        );
        
        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    
    return -1;
}

// Time: O(log log n) average, O(n) worst case, Space: O(1)
```

### **4. Exponential Search**
```javascript
function exponentialSearch(arr, target) {
    if (arr[0] === target) return 0;
    
    let bound = 1;
    while (bound < arr.length && arr[bound] < target) {
        bound *= 2;
    }
    
    return binarySearch(arr, target, Math.floor(bound / 2), Math.min(bound, arr.length - 1));
}

// Binary search with bounds
function binarySearch(arr, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Time: O(log n), Space: O(1)
```

### **5. Jump Search**
```javascript
function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    
    // Find the block where target might be
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }
    
    // Linear search in the block
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }
    
    return arr[prev] === target ? prev : -1;
}

// Time: O(√n), Space: O(1)
```

### **6. Ternary Search**
```javascript
function ternarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid1 = left + Math.floor((right - left) / 3);
        const mid2 = right - Math.floor((right - left) / 3);
        
        if (arr[mid1] === target) {
            return mid1;
        } else if (arr[mid2] === target) {
            return mid2;
        } else if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    
    return -1;
}

// Time: O(log₃ n), Space: O(1)
```

## 🌳 Tree-Based Searching

### **7. Binary Search Tree Search**
```javascript
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    // Search in BST
    search(target, node = this.root) {
        if (!node || node.data === target) {
            return node;
        }
        
        if (target < node.data) {
            return this.search(target, node.left);
        } else {
            return this.search(target, node.right);
        }
    }
    
    // Insert into BST
    insert(data, node = this.root) {
        if (!node) {
            return new BSTNode(data);
        }
        
        if (data < node.data) {
            node.left = this.insert(data, node.left);
        } else if (data > node.data) {
            node.right = this.insert(data, node.right);
        }
        
        return node;
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
    
    // Find successor
    findSuccessor(target, node = this.root) {
        let successor = null;
        
        while (node) {
            if (target < node.data) {
                successor = node;
                node = node.left;
            } else {
                node = node.right;
            }
        }
        
        return successor;
    }
    
    // Find predecessor
    findPredecessor(target, node = this.root) {
        let predecessor = null;
        
        while (node) {
            if (target > node.data) {
                predecessor = node;
                node = node.right;
            } else {
                node = node.left;
            }
        }
        
        return predecessor;
    }
}

// Time: O(log n) average, O(n) worst case, Space: O(1)
```

## 🔍 Hash Table Searching

### **8. Hash Table Search**
```javascript
class HashTable {
    constructor(size = 16) {
        this.size = size;
        this.buckets = Array(size).fill().map(() => []);
    }
    
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
    
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        // Check if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        
        bucket.push([key, value]);
    }
    
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }
        
        return undefined;
    }
    
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (const [k] of bucket) {
            if (k === key) {
                return true;
            }
        }
        
        return false;
    }
    
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        
        return false;
    }
}

// Time: O(1) average, O(n) worst case, Space: O(n)
```

## 🎯 Search Optimization Techniques

### **9. Search with Early Termination**
```javascript
function optimizedLinearSearch(arr, target) {
    // Early termination for sorted arrays
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
        // Early termination if we've passed the target
        if (arr[i] > target) {
            return -1;
        }
    }
    return -1;
}

// Sentinel search (eliminates bounds checking)
function sentinelSearch(arr, target) {
    const n = arr.length;
    const last = arr[n - 1];
    arr[n - 1] = target; // Set sentinel
    
    let i = 0;
    while (arr[i] !== target) {
        i++;
    }
    
    arr[n - 1] = last; // Restore original value
    
    if (i < n - 1 || last === target) {
        return i;
    }
    
    return -1;
}
```

### **10. Search with Caching**
```javascript
class SearchCache {
    constructor() {
        this.cache = new Map();
        this.maxSize = 100;
    }
    
    search(arr, target) {
        const key = `${arr.length}-${target}`;
        
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        
        const result = binarySearch(arr, target);
        
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        
        this.cache.set(key, result);
        return result;
    }
    
    clear() {
        this.cache.clear();
    }
}
```

## 🏃‍♂️ Search Algorithm Applications

### **Problem 1: Search in Rotated Sorted Array**
```javascript
function searchRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Check which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}

// Time: O(log n), Space: O(1)
```

### **Problem 2: Find Peak Element**
```javascript
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

// Time: O(log n), Space: O(1)
```

### **Problem 3: Search in 2D Matrix**
```javascript
function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0) return false;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / cols)][mid % cols];
        
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}

// Time: O(log(m*n)), Space: O(1)
```

### **Problem 4: Find First and Last Position**
```javascript
function searchRange(nums, target) {
    const first = binarySearchFirst(nums, target);
    if (first === -1) return [-1, -1];
    
    const last = binarySearchLast(nums, target);
    return [first, last];
}

// Time: O(log n), Space: O(1)
```

## 🎯 Search Algorithm Selection Guide

### **When to Use Each Algorithm**

| Algorithm | Best For | When to Use |
|-----------|----------|-------------|
| Linear Search | Unsorted data | Small datasets, unsorted arrays |
| Binary Search | Sorted data | Large sorted arrays |
| Interpolation Search | Uniformly distributed data | When data is uniformly distributed |
| Exponential Search | Infinite arrays | When array size is unknown |
| Jump Search | Large sorted arrays | When binary search is not available |
| Ternary Search | Unimodal functions | When searching in unimodal functions |
| Hash Table Search | Key-value pairs | When frequent lookups are needed |
| BST Search | Dynamic data | When data changes frequently |

### **Performance Optimization Tips**

```javascript
// 1. Use appropriate data structure
const searchStrategies = {
    unsorted: (arr, target) => linearSearch(arr, target),
    sorted: (arr, target) => binarySearch(arr, target),
    uniform: (arr, target) => interpolationSearch(arr, target),
    dynamic: (arr, target) => hashTableSearch(arr, target)
};

// 2. Optimize for specific use cases
function optimizedSearch(arr, target, strategy = 'auto') {
    if (strategy === 'auto') {
        strategy = isSorted(arr) ? 'sorted' : 'unsorted';
    }
    
    return searchStrategies[strategy](arr, target);
}

// 3. Use early termination
function earlyTerminationSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
        if (arr[i] > target) return -1; // Early termination for sorted arrays
    }
    return -1;
}
```

## 🎯 Key Takeaways

1. **Choose the right algorithm** based on data characteristics
2. **Binary search** is optimal for sorted data
3. **Linear search** is simple but inefficient for large datasets
4. **Hash tables** provide O(1) average case performance
5. **Optimize for your specific use case** and data patterns

## 📚 Next Steps

Now that you understand searching algorithms, let's learn about:
- [Dynamic Programming](./09-dynamic-programming.md)
- [Practice Problems](./10-practice-problems.md)

---

*Remember: Efficient searching is crucial for many algorithms. Master these search techniques to solve problems quickly and effectively!*
