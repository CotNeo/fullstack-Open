# Practice Problems & Challenges

## 🎯 Learning Objectives
- Apply DSA concepts to solve real-world problems
- Practice problem-solving techniques and patterns
- Master coding interview preparation
- Develop algorithmic thinking skills
- Build confidence in solving complex problems

## 🏃‍♂️ Beginner Problems

### **Problem 1: Two Sum**
**Difficulty: ⭐**

Given an array of integers and a target sum, find two numbers that add up to the target.

```javascript
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

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
```

### **Problem 2: Valid Parentheses**
**Difficulty: ⭐⭐**

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

```javascript
function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char in mapping) {
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
```

### **Problem 3: Maximum Subarray**
**Difficulty: ⭐⭐**

Find the contiguous subarray with the largest sum.

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

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
```

## 🏗️ Intermediate Problems

### **Problem 4: Longest Common Subsequence**
**Difficulty: ⭐⭐⭐**

Given two strings, find the length of their longest common subsequence.

```javascript
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
```

### **Problem 5: House Robber**
**Difficulty: ⭐⭐⭐**

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

```javascript
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Test cases
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
```

### **Problem 6: Coin Change**
**Difficulty: ⭐⭐⭐**

You are given coins of different denominations and a total amount of money. Find the minimum number of coins needed to make up that amount.

```javascript
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test cases
console.log(coinChange([1, 3, 4], 6)); // 2
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
```

## 🚀 Advanced Problems

### **Problem 7: Longest Increasing Subsequence**
**Difficulty: ⭐⭐⭐⭐**

Given an integer array, find the length of the longest strictly increasing subsequence.

```javascript
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// Optimized version with binary search
function lengthOfLISOptimized(nums) {
    const tails = [];
    
    for (const num of nums) {
        let left = 0;
        let right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length;
}

// Test cases
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
```

### **Problem 8: Edit Distance**
**Difficulty: ⭐⭐⭐⭐**

Given two strings, find the minimum number of operations required to convert one string to another.

```javascript
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Initialize base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // deletion
                    dp[i][j - 1],     // insertion
                    dp[i - 1][j - 1]  // substitution
                );
            }
        }
    }
    
    return dp[m][n];
}

// Test cases
console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5
console.log(minDistance("", "")); // 0
```

### **Problem 9: Word Break**
**Difficulty: ⭐⭐⭐⭐**

Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of dictionary words.

```javascript
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
}

// Test cases
console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
```

## 🎯 Graph Problems

### **Problem 10: Number of Islands**
**Difficulty: ⭐⭐⭐**

Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.

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

// Test cases
const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];
console.log(numIslands(grid1)); // 1

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];
console.log(numIslands(grid2)); // 3
```

### **Problem 11: Course Schedule**
**Difficulty: ⭐⭐⭐**

Given the total number of courses and a list of prerequisite pairs, determine if it's possible to finish all courses.

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

// Test cases
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // true
```

## 🎯 Tree Problems

### **Problem 12: Maximum Depth of Binary Tree**
**Difficulty: ⭐⭐**

Given a binary tree, find its maximum depth.

```javascript
function maxDepth(root) {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Iterative version
function maxDepthIterative(root) {
    if (!root) return 0;
    
    const queue = [{ node: root, depth: 1 }];
    let maxDepth = 0;
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        maxDepth = Math.max(maxDepth, depth);
        
        if (node.left) {
            queue.push({ node: node.left, depth: depth + 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }
    
    return maxDepth;
}
```

### **Problem 13: Validate Binary Search Tree**
**Difficulty: ⭐⭐⭐**

Given a binary tree, determine if it is a valid binary search tree.

```javascript
function isValidBST(root, min = null, max = null) {
    if (!root) return true;
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    
    return isValidBST(root.left, min, root.val) && 
           isValidBST(root.right, root.val, max);
}

// Iterative version
function isValidBSTIterative(root) {
    const stack = [];
    let prev = null;
    
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();
        
        if (prev !== null && root.val <= prev) {
            return false;
        }
        
        prev = root.val;
        root = root.right;
    }
    
    return true;
}
```

## 🎯 String Problems

### **Problem 14: Longest Palindromic Substring**
**Difficulty: ⭐⭐⭐⭐**

Given a string, find the longest palindromic substring.

```javascript
function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Test cases
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
```

### **Problem 15: Longest Substring Without Repeating Characters**
**Difficulty: ⭐⭐⭐**

Given a string, find the length of the longest substring without repeating characters.

```javascript
function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
```

## 🎯 Array Problems

### **Problem 16: Product of Array Except Self**
**Difficulty: ⭐⭐⭐**

Given an array, return an array where each element is the product of all elements except itself.

```javascript
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Calculate left products
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Calculate right products and multiply
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
```

### **Problem 17: Spiral Matrix**
**Difficulty: ⭐⭐⭐**

Given a matrix, return all elements in spiral order.

```javascript
function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        
        // Traverse down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        
        // Traverse left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        
        // Traverse up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return result;
}

// Test cases
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix1)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

## 🎯 Practice Strategies

### **1. Problem-Solving Framework**
```javascript
// 1. Understand the problem
function understandProblem() {
    // Read the problem statement carefully
    // Identify input and output
    // Look for constraints and edge cases
    // Ask clarifying questions if needed
}

// 2. Plan your approach
function planApproach() {
    // Choose appropriate data structures
    // Design the algorithm step by step
    // Consider time and space complexity
    // Think about edge cases
}

// 3. Implement the solution
function implementSolution() {
    // Write clean, readable code
    // Add comments for clarity
    // Handle edge cases
    // Test with sample inputs
}

// 4. Test and debug
function testAndDebug() {
    // Test with provided test cases
    // Test with edge cases
    // Check for off-by-one errors
    // Verify the solution works
}

// 5. Optimize if needed
function optimize() {
    // Analyze the complexity
    // Look for optimization opportunities
    // Consider alternative approaches
    // Document your optimizations
}
```

### **2. Common Patterns**
```javascript
// Sliding Window Pattern
function slidingWindow(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
    
    // Initialize first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Two Pointers Pattern
function twoPointers(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [-1, -1];
}

// Fast and Slow Pointers
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
```

### **3. Testing Your Solutions**
```javascript
// Test framework
function runTests() {
    const tests = [
        {
            name: "Two Sum Test",
            input: [[2, 7, 11, 15], 9],
            expected: [0, 1],
            function: twoSum
        },
        {
            name: "Valid Parentheses Test",
            input: ["()[]{}"],
            expected: true,
            function: isValid
        }
    ];
    
    tests.forEach(test => {
        const result = test.function(...test.input);
        const passed = JSON.stringify(result) === JSON.stringify(test.expected);
        console.log(`${test.name}: ${passed ? 'PASSED' : 'FAILED'}`);
        if (!passed) {
            console.log(`Expected: ${test.expected}, Got: ${result}`);
        }
    });
}
```

## 🎯 Key Takeaways

1. **Practice regularly** - Solve problems daily to improve your skills
2. **Understand patterns** - Learn common algorithmic patterns
3. **Time yourself** - Practice solving problems under time pressure
4. **Review solutions** - Learn from different approaches
5. **Join communities** - Participate in coding communities

## 📚 Next Steps

Now that you've completed the practice problems:

1. **Continue practicing** - Solve more problems on LeetCode, HackerRank
2. **Participate in contests** - Join programming competitions
3. **Read advanced books** - Deepen your theoretical knowledge
4. **Build projects** - Apply DSA concepts in real applications
5. **Teach others** - Share your knowledge and learn more

---

*Remember: The key to mastering DSA is consistent practice and understanding the underlying principles. Keep coding and never stop learning!*
