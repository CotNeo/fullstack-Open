# Dynamic Programming

## 🎯 Learning Objectives
- Understand the principles of dynamic programming
- Master memoization and tabulation techniques
- Learn to identify DP problems and patterns
- Practice solving classic DP problems
- Apply DP to optimize recursive solutions

## 🧠 Dynamic Programming Fundamentals

### **What is Dynamic Programming?**
Dynamic Programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.

```javascript
// DP principles
// 1. Optimal Substructure - Optimal solution contains optimal solutions to subproblems
// 2. Overlapping Subproblems - Same subproblems are solved multiple times
// 3. Memoization - Store results of subproblems to avoid recomputation
// 4. Tabulation - Build solution bottom-up using a table
```

### **DP vs Other Approaches**

| Approach | Time Complexity | Space Complexity | When to Use |
|----------|----------------|------------------|-------------|
| Brute Force | O(2ⁿ) | O(n) | Small problems |
| Recursion | O(2ⁿ) | O(n) | Simple implementation |
| Memoization | O(n) | O(n) | Top-down approach |
| Tabulation | O(n) | O(n) | Bottom-up approach |
| Space Optimized | O(n) | O(1) | When space is limited |

## 🔄 Memoization (Top-Down)

### **1. Fibonacci Sequence**
```javascript
// Naive recursive approach
function fibonacciNaive(n) {
    if (n <= 1) return n;
    return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}

// Memoized approach
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Tabulated approach
function fibonacciTab(n) {
    if (n <= 1) return n;
    
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space-optimized approach
function fibonacciOptimized(n) {
    if (n <= 1) return n;
    
    let prev2 = 0;
    let prev1 = 1;
    
    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Time: O(n), Space: O(1)
```

### **2. Climbing Stairs**
```javascript
function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev2 = 1;
    let prev1 = 2;
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Memoized version
function climbStairsMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return n;
    
    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
    return memo[n];
}

// Time: O(n), Space: O(1)
```

## 📊 Tabulation (Bottom-Up)

### **3. House Robber**
```javascript
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[nums.length - 1];
}

// Space-optimized version
function robOptimized(nums) {
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

// Time: O(n), Space: O(1)
```

### **4. Longest Common Subsequence**
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

// Space-optimized version
function longestCommonSubsequenceOptimized(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    if (m < n) {
        return longestCommonSubsequenceOptimized(text2, text1);
    }
    
    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = prev[j - 1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        [prev, curr] = [curr, prev];
    }
    
    return prev[n];
}

// Time: O(m*n), Space: O(min(m,n))
```

## 🎯 Classic DP Problems

### **5. 0/1 Knapsack Problem**
```javascript
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

// Space-optimized version
function knapsackOptimized(weights, values, capacity) {
    const dp = new Array(capacity + 1).fill(0);
    
    for (let i = 0; i < weights.length; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    
    return dp[capacity];
}

// Time: O(n*W), Space: O(W)
```

### **6. Coin Change Problem**
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

// Count number of ways
function coinChangeWays(coins, amount) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    
    return dp[amount];
}

// Time: O(amount * coins.length), Space: O(amount)
```

### **7. Edit Distance (Levenshtein Distance)**
```javascript
function editDistance(word1, word2) {
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

// Space-optimized version
function editDistanceOptimized(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    if (m < n) {
        return editDistanceOptimized(word2, word1);
    }
    
    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);
    
    for (let j = 0; j <= n; j++) {
        prev[j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(prev[j], curr[j - 1], prev[j - 1]);
            }
        }
        [prev, curr] = [curr, prev];
    }
    
    return prev[n];
}

// Time: O(m*n), Space: O(min(m,n))
```

## 🎯 Advanced DP Patterns

### **8. Longest Increasing Subsequence**
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

// Time: O(n log n), Space: O(n)
```

### **9. Maximum Subarray Sum**
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

// With indices
function maxSubArrayWithIndices(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = nums[i];
            tempStart = i;
        } else {
            maxEndingHere += nums[i];
        }
        
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }
    
    return { sum: maxSoFar, start, end };
}

// Time: O(n), Space: O(1)
```

### **10. Unique Paths**
```javascript
function uniquePaths(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
}

// Space-optimized version
function uniquePathsOptimized(m, n) {
    let prev = new Array(n).fill(1);
    let curr = new Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            curr[j] = prev[j] + curr[j - 1];
        }
        [prev, curr] = [curr, prev];
    }
    
    return prev[n - 1];
}

// Time: O(m*n), Space: O(n)
```

## 🎯 DP Problem Solving Framework

### **1. Identify the Problem Type**
```javascript
const dpPatterns = {
    // 1. Fibonacci-like (1D DP)
    fibonacci: (n) => {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    },
    
    // 2. House Robber-like (1D DP with constraints)
    houseRobber: (nums) => {
        let prev2 = 0, prev1 = 0;
        for (const num of nums) {
            const temp = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = temp;
        }
        return prev1;
    },
    
    // 3. LCS-like (2D DP)
    longestCommonSubsequence: (text1, text2) => {
        const m = text1.length, n = text2.length;
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
    },
    
    // 4. Knapsack-like (2D DP with capacity)
    knapsack: (weights, values, capacity) => {
        const dp = Array(capacity + 1).fill(0);
        for (let i = 0; i < weights.length; i++) {
            for (let w = capacity; w >= weights[i]; w--) {
                dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
            }
        }
        return dp[capacity];
    }
};
```

### **2. State Definition**
```javascript
// Define what dp[i] represents
const stateDefinitions = {
    // dp[i] = maximum value up to index i
    maxValue: (arr) => {
        const dp = new Array(arr.length);
        dp[0] = arr[0];
        for (let i = 1; i < arr.length; i++) {
            dp[i] = Math.max(dp[i - 1], arr[i]);
        }
        return dp[arr.length - 1];
    },
    
    // dp[i] = number of ways to reach index i
    numWays: (n) => {
        const dp = new Array(n + 1).fill(0);
        dp[0] = 1;
        for (let i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + (i >= 2 ? dp[i - 2] : 0);
        }
        return dp[n];
    },
    
    // dp[i][j] = optimal value for first i items with capacity j
    knapsack2D: (weights, values, capacity) => {
        const n = weights.length;
        const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
        
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= capacity; j++) {
                if (weights[i - 1] <= j) {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        return dp[n][capacity];
    }
};
```

### **3. Transition Formula**
```javascript
// Common transition patterns
const transitionPatterns = {
    // 1. Take or skip
    takeOrSkip: (arr) => {
        const dp = new Array(arr.length);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1]);
        
        for (let i = 2; i < arr.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
        }
        return dp[arr.length - 1];
    },
    
    // 2. Previous states
    previousStates: (n) => {
        const dp = new Array(n + 1);
        dp[0] = 1;
        dp[1] = 1;
        
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    },
    
    // 3. Minimum/maximum of previous states
    minMax: (arr) => {
        const dp = new Array(arr.length);
        dp[0] = arr[0];
        
        for (let i = 1; i < arr.length; i++) {
            dp[i] = Math.min(dp[i - 1], arr[i]);
        }
        return dp[arr.length - 1];
    }
};
```

## 🎯 Key Takeaways

1. **Identify overlapping subproblems** - Look for repeated calculations
2. **Define optimal substructure** - Solution contains optimal solutions to subproblems
3. **Choose memoization or tabulation** - Based on problem characteristics
4. **Optimize space complexity** - Use rolling arrays when possible
5. **Practice pattern recognition** - Learn common DP patterns

## 📚 Next Steps

Now that you understand dynamic programming, let's practice with:
- [Practice Problems](./10-practice-problems.md)

---

*Remember: Dynamic programming is about breaking down complex problems into simpler subproblems. Master the patterns and you'll be able to solve many optimization problems efficiently!*
