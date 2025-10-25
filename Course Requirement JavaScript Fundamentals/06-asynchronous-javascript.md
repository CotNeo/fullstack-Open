# Asynchronous JavaScript

## 🎯 Learning Objectives
- Understand asynchronous programming concepts
- Master Promises and async/await
- Learn to handle errors in async code
- Practice with real-world async scenarios
- Understand the event loop and concurrency

## 🔄 Understanding Asynchronous JavaScript

### Synchronous vs Asynchronous
```javascript
// Synchronous code - blocks execution
console.log("Start");
console.log("Middle");
console.log("End");
// Output: Start, Middle, End

// Asynchronous code - non-blocking
console.log("Start");
setTimeout(() => console.log("Middle"), 1000);
console.log("End");
// Output: Start, End, Middle (after 1 second)
```

### Why Asynchronous?
```javascript
// Without async - blocks the UI
function slowOperation() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Simulate slow operation
    }
    return "Operation complete";
}

console.log("Before slow operation");
const result = slowOperation(); // Blocks for 3 seconds
console.log(result);
console.log("After slow operation");

// With async - doesn't block
function slowOperationAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Operation complete");
        }, 3000);
    });
}

console.log("Before slow operation");
slowOperationAsync().then(result => {
    console.log(result);
});
console.log("After slow operation");
```

## ⏰ Timers and Intervals

### setTimeout
```javascript
// Basic setTimeout
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// setTimeout with parameters
function greet(name, message) {
    console.log(`${message}, ${name}!`);
}

setTimeout(greet, 1000, "John", "Hello");

// Clear timeout
const timeoutId = setTimeout(() => {
    console.log("This won't run");
}, 5000);

clearTimeout(timeoutId);
```

### setInterval
```javascript
// Basic setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    
    if (count >= 5) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);

// Clear interval
setTimeout(() => {
    clearInterval(intervalId);
}, 10000);
```

### requestAnimationFrame
```javascript
// Smooth animation with requestAnimationFrame
function animate() {
    const element = document.querySelector('#animatedElement');
    let position = 0;
    
    function move() {
        position += 2;
        element.style.left = position + 'px';
        
        if (position < 200) {
            requestAnimationFrame(move);
        }
    }
    
    requestAnimationFrame(move);
}
```

## 🎯 Promises

### Creating Promises
```javascript
// Basic Promise
const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

// Using the Promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

### Promise States
```javascript
// Promise states: pending, fulfilled, rejected
const promise = new Promise((resolve, reject) => {
    console.log("Promise created - state: pending");
    
    setTimeout(() => {
        resolve("Promise resolved");
    }, 1000);
});

console.log("Promise state:", promise);
// After 1 second: Promise state: fulfilled
```

### Promise Methods
```javascript
// Promise.resolve() - creates resolved promise
const resolvedPromise = Promise.resolve("Immediate result");
resolvedPromise.then(result => console.log(result));

// Promise.reject() - creates rejected promise
const rejectedPromise = Promise.reject("Immediate error");
rejectedPromise.catch(error => console.log(error));

// Promise.all() - wait for all promises
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.log("At least one promise rejected:", error);
    });

// Promise.allSettled() - wait for all promises to settle
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises settled:", results);
    });

// Promise.race() - first promise to settle wins
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log("First promise to resolve:", result);
    });
```

### Chaining Promises
```javascript
// Promise chaining
function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([`Post 1 by User ${userId}`, `Post 2 by User ${userId}`]);
        }, 1000);
    });
}

function fetchPostComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([`Comment 1 on Post ${postId}`, `Comment 2 on Post ${postId}`]);
        }, 1000);
    });
}

// Chain promises
fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return fetchPostComments(posts[0]);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.log("Error in chain:", error);
    });
```

## ⚡ async/await

### Basic async/await
```javascript
// Convert Promise chain to async/await
async function fetchUserData() {
    try {
        const user = await fetchUser(1);
        console.log("User:", user);
        
        const posts = await fetchUserPosts(user.id);
        console.log("Posts:", posts);
        
        const comments = await fetchPostComments(posts[0]);
        console.log("Comments:", comments);
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
}

// Call async function
fetchUserData()
    .then(data => console.log("Complete data:", data))
    .catch(error => console.log("Error:", error));
```

### Parallel Execution
```javascript
// Sequential execution (slow)
async function sequentialFetch() {
    const user1 = await fetchUser(1);
    const user2 = await fetchUser(2);
    const user3 = await fetchUser(3);
    
    return [user1, user2, user3];
}

// Parallel execution (fast)
async function parallelFetch() {
    const [user1, user2, user3] = await Promise.all([
        fetchUser(1),
        fetchUser(2),
        fetchUser(3)
    ]);
    
    return [user1, user2, user3];
}

// Race condition
async function raceFetch() {
    const result = await Promise.race([
        fetchUser(1),
        fetchUser(2),
        fetchUser(3)
    ]);
    
    return result;
}
```

### Error Handling
```javascript
// Error handling with try/catch
async function fetchWithErrorHandling() {
    try {
        const user = await fetchUser(1);
        const posts = await fetchUserPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.log("Error occurred:", error);
        return null;
    }
}

// Error handling with Promise.catch()
async function fetchWithCatch() {
    const user = await fetchUser(1).catch(error => {
        console.log("User fetch failed:", error);
        return null;
    });
    
    if (!user) return null;
    
    const posts = await fetchUserPosts(user.id).catch(error => {
        console.log("Posts fetch failed:", error);
        return [];
    });
    
    return { user, posts };
}
```

## 🌐 Fetch API

### Basic Fetch
```javascript
// Basic fetch request
fetch('https://api.example.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Users:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

// Fetch with async/await
async function fetchUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
```

### POST Request
```javascript
// POST request with fetch
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const newUser = await response.json();
        return newUser;
    } catch (error) {
        console.log('Error creating user:', error);
        throw error;
    }
}

// Usage
const userData = {
    name: 'John Doe',
    email: 'john@example.com'
};

createUser(userData)
    .then(user => console.log('User created:', user))
    .catch(error => console.log('Error:', error));
```

### Request Options
```javascript
// Fetch with custom options
async function fetchWithOptions(url, options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        credentials: 'include'
    };
    
    const config = { ...defaultOptions, ...options };
    
    try {
        const response = await fetch(url, config);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.log('Fetch error:', error);
        throw error;
    }
}

// Usage examples
fetchWithOptions('https://api.example.com/data');
fetchWithOptions('https://api.example.com/data', { method: 'POST', body: JSON.stringify({ key: 'value' }) });
```

## 🔄 Event Loop and Concurrency

### Understanding the Event Loop
```javascript
// Event loop demonstration
console.log('1. Start');

setTimeout(() => console.log('2. Timeout 1'), 0);
setTimeout(() => console.log('3. Timeout 2'), 0);

Promise.resolve().then(() => console.log('4. Promise 1'));
Promise.resolve().then(() => console.log('5. Promise 2'));

console.log('6. End');

// Output order:
// 1. Start
// 6. End
// 4. Promise 1
// 5. Promise 2
// 2. Timeout 1
// 3. Timeout 2
```

### Microtasks vs Macrotasks
```javascript
// Microtasks (Promises) have higher priority than macrotasks (setTimeout)
console.log('Start');

setTimeout(() => console.log('Macrotask 1'), 0);
setTimeout(() => console.log('Macrotask 2'), 0);

Promise.resolve().then(() => {
    console.log('Microtask 1');
    return Promise.resolve();
}).then(() => {
    console.log('Microtask 2');
});

console.log('End');

// Output:
// Start
// End
// Microtask 1
// Microtask 2
// Macrotask 1
// Macrotask 2
```

## 🎯 Real-World Examples

### API Service Class
```javascript
class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.log(`API request failed: ${endpoint}`, error);
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint);
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Usage
const api = new ApiService('https://api.example.com');

// Get users
api.get('/users')
    .then(users => console.log('Users:', users))
    .catch(error => console.log('Error:', error));

// Create user
api.post('/users', { name: 'John', email: 'john@example.com' })
    .then(user => console.log('User created:', user))
    .catch(error => console.log('Error:', error));
```

### Debounced Search
```javascript
class SearchService {
    constructor(apiService) {
        this.apiService = apiService;
        this.timeoutId = null;
    }
    
    search(query, delay = 300) {
        return new Promise((resolve, reject) => {
            clearTimeout(this.timeoutId);
            
            this.timeoutId = setTimeout(async () => {
                try {
                    const results = await this.apiService.get(`/search?q=${encodeURIComponent(query)}`);
                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            }, delay);
        });
    }
}

// Usage
const searchService = new SearchService(api);

// Debounced search
const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('input', async (event) => {
    const query = event.target.value;
    
    if (query.length > 2) {
        try {
            const results = await searchService.search(query);
            displaySearchResults(results);
        } catch (error) {
            console.log('Search error:', error);
        }
    }
});
```

### Loading States
```javascript
class LoadingManager {
    constructor() {
        this.loadingStates = new Map();
    }
    
    setLoading(key, isLoading) {
        this.loadingStates.set(key, isLoading);
        this.updateUI();
    }
    
    isLoading(key) {
        return this.loadingStates.get(key) || false;
    }
    
    updateUI() {
        const loadingElements = document.querySelectorAll('[data-loading]');
        loadingElements.forEach(element => {
            const loadingKey = element.dataset.loading;
            if (this.isLoading(loadingKey)) {
                element.classList.add('loading');
                element.disabled = true;
            } else {
                element.classList.remove('loading');
                element.disabled = false;
            }
        });
    }
}

// Usage
const loadingManager = new LoadingManager();

async function fetchData() {
    loadingManager.setLoading('data', true);
    
    try {
        const data = await api.get('/data');
        return data;
    } finally {
        loadingManager.setLoading('data', false);
    }
}
```

## 🏃‍♂️ Practice Exercises

### Exercise 1: Promise Chain
```javascript
// Create a promise chain that:
// 1. Fetches user data
// 2. Fetches user posts
// 3. Fetches post comments
// 4. Returns all data

function fetchUserData(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log('User:', user);
            return fetch(`/api/users/${userId}/posts`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log('Posts:', posts);
            return fetch(`/api/posts/${posts[0].id}/comments`);
        })
        .then(response => response.json())
        .then(comments => {
            console.log('Comments:', comments);
            return { user, posts, comments };
        });
}
```

### Exercise 2: async/await Conversion
```javascript
// Convert this promise chain to async/await
function fetchUserPosts(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log('User:', user);
            return fetch(`/api/users/${userId}/posts`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log('Posts:', posts);
            return { user, posts };
        })
        .catch(error => {
            console.log('Error:', error);
            throw error;
        });
}

// Converted to async/await
async function fetchUserPostsAsync(userId) {
    try {
        const userResponse = await fetch(`/api/users/${userId}`);
        const user = await userResponse.json();
        console.log('User:', user);
        
        const postsResponse = await fetch(`/api/users/${userId}/posts`);
        const posts = await postsResponse.json();
        console.log('Posts:', posts);
        
        return { user, posts };
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
```

### Exercise 3: Error Handling
```javascript
// Create a robust error handling system
class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            if (error.name === 'TypeError') {
                throw new Error('Network error: Unable to connect to server');
            }
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint);
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
}
```

## 🎯 Key Takeaways

1. **Async code is non-blocking** - Use it for operations that take time
2. **Promises handle async operations** - Use them for better error handling
3. **async/await is cleaner** - Use it for readable async code
4. **Handle errors properly** - Always use try/catch or .catch()
5. **Understand the event loop** - Know when code executes

## 📚 Next Steps

Now that you understand asynchronous JavaScript, let's learn about:
- [ES6+ Features](./07-es6-features.md)
- [Practical Examples](./08-practical-examples.md)
- [Exercises and Projects](./09-exercises-projects.md)

---

*Asynchronous JavaScript is essential for modern web development. Master it and you'll be able to create responsive, efficient applications!*
