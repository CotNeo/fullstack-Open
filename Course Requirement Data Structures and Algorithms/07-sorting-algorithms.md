# Sorting Algorithms

## 🎯 Learning Objectives
- Understand different sorting algorithms and their characteristics
- Master implementation of common sorting algorithms
- Analyze time and space complexity of sorting algorithms
- Learn when to use different sorting algorithms
- Practice implementing and optimizing sorting algorithms

## 📊 Sorting Algorithm Overview

### **What is Sorting?**
Sorting is the process of arranging elements in a specific order (ascending or descending) based on a comparison operator.

```javascript
// Sorting terminology
// In-place - Sorting without using extra space
// Stable - Maintains relative order of equal elements
// Adaptive - Performance improves with partially sorted data
// Comparison-based - Uses comparison operations
// Non-comparison-based - Uses other properties (counting, radix)
```

### **Sorting Algorithm Comparison**

| Algorithm | Best Case | Average Case | Worst Case | Space | Stable | In-place |
|-----------|-----------|---------------|------------|-------|--------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No | Yes |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(k) | Yes | No |
| Radix Sort | O(d(n + k)) | O(d(n + k)) | O(d(n + k)) | O(n + k) | Yes | No |

## 🔄 Basic Sorting Algorithms

### **1. Bubble Sort**
```javascript
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is sorted
        if (!swapped) break;
    }
    
    return arr;
}

// Optimized version with early termination
function bubbleSortOptimized(arr) {
    const n = arr.length;
    let swapped = true;
    let lastUnsorted = n - 1;
    
    while (swapped) {
        swapped = false;
        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        lastUnsorted--;
    }
    
    return arr;
}

// Time: O(n²), Space: O(1), Stable: Yes
```

### **2. Selection Sort**
```javascript
function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        // Find minimum element in remaining array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap with first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Time: O(n²), Space: O(1), Stable: No
```

### **3. Insertion Sort**
```javascript
function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        
        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    return arr;
}

// Recursive version
function insertionSortRecursive(arr, n = arr.length) {
    if (n <= 1) return arr;
    
    insertionSortRecursive(arr, n - 1);
    
    const last = arr[n - 1];
    let j = n - 2;
    
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }
    
    arr[j + 1] = last;
    return arr;
}

// Time: O(n²), Space: O(1), Stable: Yes
```

## 🚀 Advanced Sorting Algorithms

### **4. Merge Sort**
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    
    return result;
}

// In-place merge sort
function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSortInPlace(arr, left, mid);
        mergeSortInPlace(arr, mid + 1, right);
        mergeInPlace(arr, left, mid, right);
    }
    return arr;
}

function mergeInPlace(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

// Time: O(n log n), Space: O(n), Stable: Yes
```

### **5. Quick Sort**
```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Randomized quick sort
function randomizedQuickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];
        
        const pivotIndex = partition(arr, low, high);
        randomizedQuickSort(arr, low, pivotIndex - 1);
        randomizedQuickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

// Three-way quick sort (for duplicate elements)
function threeWayQuickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const { lt, gt } = threeWayPartition(arr, low, high);
        threeWayQuickSort(arr, low, lt - 1);
        threeWayQuickSort(arr, gt + 1, high);
    }
    return arr;
}

function threeWayPartition(arr, low, high) {
    const pivot = arr[low];
    let lt = low;
    let gt = high;
    let i = low;
    
    while (i <= gt) {
        if (arr[i] < pivot) {
            [arr[lt], arr[i]] = [arr[i], arr[lt]];
            lt++;
            i++;
        } else if (arr[i] > pivot) {
            [arr[i], arr[gt]] = [arr[gt], arr[i]];
            gt--;
        } else {
            i++;
        }
    }
    
    return { lt, gt };
}

// Time: O(n log n), Space: O(log n), Stable: No
```

### **6. Heap Sort**
```javascript
function heapSort(arr) {
    const n = arr.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Time: O(n log n), Space: O(1), Stable: No
```

## 🔢 Non-Comparison Sorting Algorithms

### **7. Counting Sort**
```javascript
function countingSort(arr, maxValue = null) {
    if (arr.length <= 1) return arr;
    
    // Find maximum value if not provided
    if (maxValue === null) {
        maxValue = Math.max(...arr);
    }
    
    const count = new Array(maxValue + 1).fill(0);
    const output = new Array(arr.length);
    
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    // Modify count array to store positions
    for (let i = 1; i <= maxValue; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    return output;
}

// Time: O(n + k), Space: O(k), Stable: Yes
```

### **8. Radix Sort**
```javascript
function radixSort(arr) {
    const maxDigits = getMaxDigits(arr);
    
    for (let i = 0; i < maxDigits; i++) {
        arr = countingSortByDigit(arr, i);
    }
    
    return arr;
}

function getMaxDigits(arr) {
    let max = 0;
    for (const num of arr) {
        max = Math.max(max, num.toString().length);
    }
    return max;
}

function countingSortByDigit(arr, digit) {
    const count = new Array(10).fill(0);
    const output = new Array(arr.length);
    
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        const digitValue = getDigit(arr[i], digit);
        count[digitValue]++;
    }
    
    // Modify count array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const digitValue = getDigit(arr[i], digit);
        output[count[digitValue] - 1] = arr[i];
        count[digitValue]--;
    }
    
    return output;
}

function getDigit(num, position) {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

// Time: O(d(n + k)), Space: O(n + k), Stable: Yes
```

### **9. Bucket Sort**
```javascript
function bucketSort(arr, bucketCount = 10) {
    if (arr.length <= 1) return arr;
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const bucketSize = (max - min) / bucketCount;
    
    // Create buckets
    const buckets = Array(bucketCount).fill().map(() => []);
    
    // Distribute elements into buckets
    for (const num of arr) {
        const bucketIndex = Math.min(Math.floor((num - min) / bucketSize), bucketCount - 1);
        buckets[bucketIndex].push(num);
    }
    
    // Sort each bucket and concatenate
    const result = [];
    for (const bucket of buckets) {
        if (bucket.length > 0) {
            insertionSort(bucket);
            result.push(...bucket);
        }
    }
    
    return result;
}

// Time: O(n + k), Space: O(n + k), Stable: Yes
```

## 🎯 Hybrid Sorting Algorithms

### **10. Tim Sort**
```javascript
function timSort(arr) {
    const RUN = 32;
    const n = arr.length;
    
    // Sort individual runs using insertion sort
    for (let i = 0; i < n; i += RUN) {
        insertionSort(arr, i, Math.min(i + RUN - 1, n - 1));
    }
    
    // Merge runs
    for (let size = RUN; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);
            
            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
    
    return arr;
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        const key = arr[i];
        let j = i - 1;
        
        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}

// Time: O(n log n), Space: O(n), Stable: Yes
```

### **11. Intro Sort**
```javascript
function introSort(arr) {
    const maxDepth = Math.floor(2 * Math.log2(arr.length));
    return introSortHelper(arr, 0, arr.length - 1, maxDepth);
}

function introSortHelper(arr, low, high, maxDepth) {
    if (low < high) {
        if (maxDepth === 0) {
            // Use heap sort when depth limit is reached
            heapSort(arr, low, high);
        } else {
            const pivotIndex = partition(arr, low, high);
            introSortHelper(arr, low, pivotIndex - 1, maxDepth - 1);
            introSortHelper(arr, pivotIndex + 1, high, maxDepth - 1);
        }
    }
    return arr;
}

// Time: O(n log n), Space: O(log n), Stable: No
```

## 🏃‍♂️ Sorting Algorithm Applications

### **Problem 1: Sort Colors (Dutch National Flag)**
```javascript
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    
    return nums;
}

// Time: O(n), Space: O(1)
```

### **Problem 2: Merge Sorted Arrays**
```javascript
function mergeSortedArrays(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    
    return nums1;
}

// Time: O(m + n), Space: O(1)
```

### **Problem 3: Find Kth Largest Element**
```javascript
function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(arr, low, high, k) {
    if (low === high) return arr[low];
    
    const pivotIndex = partition(arr, low, high);
    
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, low, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, high, k);
    }
}

// Time: O(n) average, O(n²) worst case, Space: O(1)
```

## 🎯 Sorting Algorithm Selection Guide

### **When to Use Each Algorithm**

| Algorithm | Best For | When to Use |
|-----------|----------|-------------|
| Bubble Sort | Educational purposes | Never in production |
| Selection Sort | Small datasets | When memory writes are expensive |
| Insertion Sort | Small datasets, nearly sorted | When data is mostly sorted |
| Merge Sort | Stable sorting, external sorting | When stability is required |
| Quick Sort | General purpose | Most common choice |
| Heap Sort | Memory-constrained environments | When in-place sorting is needed |
| Counting Sort | Integer sorting with small range | When range is small |
| Radix Sort | Integer sorting | When range is large but digits are few |
| Bucket Sort | Uniformly distributed data | When data is uniformly distributed |

### **Performance Characteristics**

```javascript
// Performance testing function
function testSortingPerformance(sortFunction, arr, iterations = 1000) {
    const times = [];
    
    for (let i = 0; i < iterations; i++) {
        const testArr = [...arr];
        const start = performance.now();
        sortFunction(testArr);
        const end = performance.now();
        times.push(end - start);
    }
    
    const avgTime = times.reduce((sum, time) => sum + time, 0) / times.length;
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);
    
    return {
        average: avgTime,
        min: minTime,
        max: maxTime,
        iterations
    };
}

// Example usage
const testArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
const bubbleResult = testSortingPerformance(bubbleSort, testArray);
const quickResult = testSortingPerformance(quickSort, testArray);

console.log('Bubble Sort:', bubbleResult);
console.log('Quick Sort:', quickResult);
```

## 🎯 Key Takeaways

1. **Choose the right algorithm** based on your data characteristics
2. **Stability matters** when relative order of equal elements is important
3. **Space complexity** is crucial in memory-constrained environments
4. **Adaptive algorithms** perform better on partially sorted data
5. **Hybrid algorithms** combine the best of multiple approaches

## 📚 Next Steps

Now that you understand sorting algorithms, let's learn about:
- [Searching Algorithms](./08-searching-algorithms.md)
- [Dynamic Programming](./09-dynamic-programming.md)
- [Practice Problems](./10-practice-problems.md)

---

*Remember: Sorting is fundamental to many algorithms. Master these sorting techniques to solve complex problems efficiently!*
