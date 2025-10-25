# Basic Concepts & Complexity Analysis

## 🎯 Learning Objectives
- Understand fundamental concepts of data structures and algorithms
- Master Big O notation and complexity analysis
- Learn to analyze time and space complexity
- Understand algorithm efficiency and optimization
- Practice complexity analysis with examples

## 📚 Fundamental Concepts

### **What are Data Structures?**
Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently.

```javascript
// Example: Array vs Object
const array = [1, 2, 3, 4, 5];           // Linear structure
const object = { name: "John", age: 30 }; // Key-value structure
```

### **What are Algorithms?**
Algorithms are step-by-step procedures for solving problems or performing tasks.

```javascript
// Example: Linear Search Algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found at index i
        }
    }
    return -1; // Not found
}
```

### **Why Study DSA?**
- **Efficiency** - Solve problems faster and with less memory
- **Scalability** - Handle large datasets effectively
- **Problem Solving** - Develop analytical thinking skills
- **Career Growth** - Essential for technical interviews

## ⏱️ Time Complexity Analysis

### **Big O Notation**
Big O notation describes the worst-case scenario for how an algorithm performs as the input size grows.

```javascript
// O(1) - Constant Time
function getFirstElement(arr) {
    return arr[0]; // Always takes same time
}

// O(n) - Linear Time
function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// O(n²) - Quadratic Time
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```

### **Common Time Complexities**

| Complexity | Name | Example | Description |
|------------|------|---------|-------------|
| O(1) | Constant | Array access | Time doesn't change with input size |
| O(log n) | Logarithmic | Binary search | Time increases slowly with input size |
| O(n) | Linear | Linear search | Time increases proportionally with input size |
| O(n log n) | Linearithmic | Merge sort | Time increases slightly faster than linear |
| O(n²) | Quadratic | Bubble sort | Time increases quadratically with input size |
| O(2ⁿ) | Exponential | Fibonacci (naive) | Time doubles with each increase in input size |

### **Time Complexity Examples**

```javascript
// O(1) - Constant Time
function getFirst(arr) {
    return arr[0];
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// O(n) - Linear Time
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// O(n²) - Quadratic Time
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
```

## 💾 Space Complexity Analysis

### **Space Complexity**
Space complexity measures how much extra memory an algorithm uses relative to the input size.

```javascript
// O(1) - Constant Space
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

// O(n) - Linear Space
function createArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

// O(n²) - Quadratic Space
function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i * j;
        }
    }
    return matrix;
}
```

### **Auxiliary Space vs Total Space**
```javascript
// Auxiliary Space: O(1)
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

// Total Space: O(n) (input array)
// Auxiliary Space: O(1) (only a few variables)
```

## 🔍 Complexity Analysis Examples

### **Example 1: Array Operations**
```javascript
// O(1) - Access by index
function getElement(arr, index) {
    return arr[index];
}

// O(n) - Search for element
function contains(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true;
    }
    return false;
}

// O(n) - Insert at beginning
function insertAtBeginning(arr, element) {
    arr.unshift(element);
    return arr;
}

// O(1) - Insert at end
function insertAtEnd(arr, element) {
    arr.push(element);
    return arr;
}
```

### **Example 2: Nested Loops**
```javascript
// O(n²) - Two nested loops
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

// O(n²) - Selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
```

### **Example 3: Recursive Algorithms**
```javascript
// O(2ⁿ) - Fibonacci (naive)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// O(n) - Fibonacci (optimized)
function fibonacciOptimized(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

## 📊 Complexity Comparison

### **Sorting Algorithms Comparison**
| Algorithm | Best Case | Average Case | Worst Case | Space | Stable |
|-----------|-----------|---------------|------------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

### **Search Algorithms Comparison**
| Algorithm | Time Complexity | Space Complexity | Prerequisites |
|-----------|----------------|------------------|---------------|
| Linear Search | O(n) | O(1) | None |
| Binary Search | O(log n) | O(1) | Sorted array |
| Hash Table Search | O(1) | O(n) | Hash table |

## 🎯 Best Practices for Complexity Analysis

### **1. Focus on the Dominant Term**
```javascript
// O(n² + n + 1) = O(n²)
function example(arr) {
    // O(n²) - dominant term
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
    
    // O(n) - less significant
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
    // O(1) - constant
    console.log("Done");
}
```

### **2. Consider Average vs Worst Case**
```javascript
// Quick Sort
// Best/Average: O(n log n)
// Worst: O(n²) - when pivot is always smallest/largest
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

### **3. Analyze Space Complexity**
```javascript
// O(n) space - creates new array
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

// O(1) space - in-place sorting
function heapSort(arr) {
    // Build heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }
    
    // Extract elements
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    
    return arr;
}
```

## 🏃‍♂️ Practice Exercises

### **Exercise 1: Analyze Time Complexity**
```javascript
// Analyze the time complexity of this function
function mysteryFunction(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}
// Answer: O(n²)
```

### **Exercise 2: Optimize Algorithm**
```javascript
// Original: O(n²)
function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}

// Optimized: O(n)
function findDuplicatesOptimized(arr) {
    const seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return true;
        }
        seen.add(arr[i]);
    }
    return false;
}
```

### **Exercise 3: Space Complexity Analysis**
```javascript
// Analyze space complexity
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Answer: O(n) - call stack depth

// Optimized version
function fibonacciOptimized(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
// Answer: O(1) - only a few variables
```

## 🎯 Key Takeaways

1. **Big O notation** describes worst-case performance
2. **Time complexity** measures how time scales with input size
3. **Space complexity** measures how memory scales with input size
4. **Focus on dominant terms** when analyzing complexity
5. **Consider trade-offs** between time and space complexity

## 📚 Next Steps

Now that you understand complexity analysis, let's learn about:
- [Arrays and Linked Lists](./03-arrays-linked-lists.md)
- [Stacks and Queues](./04-stacks-queues.md)
- [Trees and Binary Trees](./05-trees-binary-trees.md)

---

*Remember: Understanding complexity is crucial for writing efficient algorithms. Always analyze your solutions before implementing them!*
