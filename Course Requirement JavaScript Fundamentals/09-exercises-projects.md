# Exercises and Projects

## 🎯 Learning Objectives
- Practice JavaScript concepts through hands-on exercises
- Build real-world projects to reinforce learning
- Develop problem-solving skills
- Learn best practices and coding patterns
- Create a portfolio of JavaScript projects

## 🏃‍♂️ Beginner Exercises

### Exercise 1: Basic Calculator
**Difficulty: ⭐**

Create a simple calculator that can perform basic arithmetic operations.

```javascript
// Requirements:
// - Add, subtract, multiply, divide
// - Handle decimal numbers
// - Clear function
// - Display result

class SimpleCalculator {
    constructor() {
        this.display = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForOperand = false;
    }
    
    // Your implementation here
}

// Test cases
const calc = new SimpleCalculator();
console.log(calc.add(5, 3)); // Should return 8
console.log(calc.subtract(10, 4)); // Should return 6
console.log(calc.multiply(3, 4)); // Should return 12
console.log(calc.divide(15, 3)); // Should return 5
```

### Exercise 2: Number Guessing Game
**Difficulty: ⭐⭐**

Create a number guessing game where the user tries to guess a random number.

```javascript
// Requirements:
// - Generate random number between 1-100
// - Track number of attempts
// - Provide hints (too high/too low)
// - Restart game functionality

class NumberGuessingGame {
    constructor() {
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
    }
    
    // Your implementation here
}

// Test the game
const game = new NumberGuessingGame();
console.log(game.guess(50)); // Should provide hint
console.log(game.guess(75)); // Should provide hint
console.log(game.guess(63)); // Should provide hint
```

### Exercise 3: String Manipulation
**Difficulty: ⭐⭐**

Create utility functions for string manipulation.

```javascript
// Requirements:
// - Reverse a string
// - Check if string is palindrome
// - Count vowels and consonants
// - Capitalize first letter of each word
// - Remove duplicate characters

class StringUtils {
    // Your implementation here
}

// Test cases
const utils = new StringUtils();
console.log(utils.reverse("hello")); // "olleh"
console.log(utils.isPalindrome("racecar")); // true
console.log(utils.countVowels("hello world")); // 3
console.log(utils.capitalizeWords("hello world")); // "Hello World"
console.log(utils.removeDuplicates("hello")); // "helo"
```

## 🏗️ Intermediate Projects

### Project 1: Task Manager
**Difficulty: ⭐⭐⭐**

Build a comprehensive task management application.

```javascript
// Requirements:
// - Add, edit, delete tasks
// - Mark tasks as complete/incomplete
// - Filter tasks by status
// - Search tasks
// - Sort tasks by date, priority, or name
// - Local storage persistence

class TaskManager {
    constructor() {
        this.tasks = this.loadFromStorage();
        this.currentFilter = 'all';
        this.sortBy = 'date';
    }
    
    // Your implementation here
}

// Features to implement:
// - addTask(title, description, priority, dueDate)
// - editTask(id, updates)
// - deleteTask(id)
// - toggleComplete(id)
// - filterTasks(status)
// - searchTasks(query)
// - sortTasks(criteria)
// - saveToStorage()
// - loadFromStorage()
```

### Project 2: Expense Tracker
**Difficulty: ⭐⭐⭐**

Create an expense tracking application with categories and reporting.

```javascript
// Requirements:
// - Add expenses with categories
// - Edit and delete expenses
// - Calculate total expenses
// - Filter by category and date range
// - Generate expense reports
// - Budget tracking

class ExpenseTracker {
    constructor() {
        this.expenses = [];
        this.categories = ['Food', 'Transport', 'Entertainment', 'Bills', 'Other'];
        this.budget = 0;
    }
    
    // Your implementation here
}

// Features to implement:
// - addExpense(amount, category, description, date)
// - editExpense(id, updates)
// - deleteExpense(id)
// - getTotalExpenses()
// - getExpensesByCategory(category)
// - getExpensesByDateRange(startDate, endDate)
// - generateReport()
// - setBudget(amount)
// - getBudgetStatus()
```

### Project 3: Quiz Application
**Difficulty: ⭐⭐⭐**

Build an interactive quiz application with multiple question types.

```javascript
// Requirements:
// - Multiple choice questions
// - True/false questions
// - Timer for each question
// - Score calculation
// - Progress tracking
// - Results summary

class QuizApp {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 0;
        this.timer = null;
    }
    
    // Your implementation here
}

// Sample questions
const questions = [
    {
        type: 'multiple',
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correct: 2,
        timeLimit: 30
    },
    {
        type: 'boolean',
        question: 'JavaScript is a programming language.',
        correct: true,
        timeLimit: 15
    }
];
```

## 🚀 Advanced Projects

### Project 1: Weather Dashboard
**Difficulty: ⭐⭐⭐⭐**

Create a comprehensive weather dashboard with multiple locations and forecasts.

```javascript
// Requirements:
// - Current weather for multiple cities
// - 5-day weather forecast
// - Weather alerts and notifications
// - Location-based weather
// - Weather history
// - Interactive charts and graphs

class WeatherDashboard {
    constructor() {
        this.locations = [];
        this.currentLocation = null;
        this.weatherData = new Map();
        this.alerts = [];
    }
    
    // Your implementation here
}

// Features to implement:
// - addLocation(city, country)
// - removeLocation(locationId)
// - getCurrentWeather(locationId)
// - getForecast(locationId, days)
// - getWeatherAlerts(locationId)
// - getWeatherHistory(locationId, startDate, endDate)
// - generateWeatherReport(locationId)
// - exportWeatherData(format)
```

### Project 2: Social Media Feed
**Difficulty: ⭐⭐⭐⭐**

Build a social media feed with posts, comments, and user interactions.

```javascript
// Requirements:
// - Create and edit posts
// - Like and comment on posts
// - User profiles and authentication
// - Real-time updates
// - Image and video support
// - Hashtag and mention support

class SocialMediaFeed {
    constructor() {
        this.users = new Map();
        this.posts = [];
        this.currentUser = null;
        this.following = new Set();
    }
    
    // Your implementation here
}

// Features to implement:
// - createUser(username, email, password)
// - loginUser(username, password)
// - createPost(content, media)
// - editPost(postId, updates)
// - deletePost(postId)
// - likePost(postId)
// - commentOnPost(postId, comment)
// - followUser(userId)
// - getFeed()
// - searchPosts(query)
```

### Project 3: E-commerce Store
**Difficulty: ⭐⭐⭐⭐⭐**

Develop a full-featured e-commerce application with shopping cart and checkout.

```javascript
// Requirements:
// - Product catalog with categories
// - Shopping cart functionality
// - User authentication and profiles
// - Order management
// - Payment processing simulation
// - Inventory management
// - Admin dashboard

class ECommerceStore {
    constructor() {
        this.products = [];
        this.categories = [];
        this.users = new Map();
        this.orders = [];
        this.cart = new Map();
        this.currentUser = null;
    }
    
    // Your implementation here
}

// Features to implement:
// - addProduct(product)
// - updateProduct(productId, updates)
// - deleteProduct(productId)
// - searchProducts(query, filters)
// - addToCart(productId, quantity)
// - removeFromCart(productId)
// - updateCartItem(productId, quantity)
// - calculateTotal()
// - processOrder(paymentInfo)
// - getOrderHistory(userId)
// - generateSalesReport()
```

## 🎯 Coding Challenges

### Challenge 1: Algorithm Implementation
**Difficulty: ⭐⭐⭐**

Implement common algorithms and data structures.

```javascript
// Requirements:
// - Binary search
// - Bubble sort
// - Quick sort
// - Merge sort
// - Linked list
// - Binary tree
// - Graph traversal

class Algorithms {
    // Binary search implementation
    binarySearch(arr, target) {
        // Your implementation here
    }
    
    // Sorting algorithms
    bubbleSort(arr) {
        // Your implementation here
    }
    
    quickSort(arr) {
        // Your implementation here
    }
    
    // Data structures
    createLinkedList() {
        // Your implementation here
    }
    
    createBinaryTree() {
        // Your implementation here
    }
}
```

### Challenge 2: API Integration
**Difficulty: ⭐⭐⭐⭐**

Build applications that integrate with external APIs.

```javascript
// Requirements:
// - Fetch data from REST APIs
// - Handle API errors and rate limiting
// - Implement caching strategies
// - Create API wrappers
// - Handle authentication

class ApiClient {
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.cache = new Map();
        this.rateLimit = {
            requests: 0,
            resetTime: 0
        };
    }
    
    // Your implementation here
}

// Features to implement:
// - get(endpoint, params)
// - post(endpoint, data)
// - put(endpoint, data)
// - delete(endpoint)
// - handleRateLimit()
// - cacheResponse(key, data, ttl)
// - getCachedResponse(key)
// - authenticate()
```

### Challenge 3: Performance Optimization
**Difficulty: ⭐⭐⭐⭐⭐**

Optimize JavaScript applications for performance.

```javascript
// Requirements:
// - Implement lazy loading
// - Optimize DOM manipulation
// - Use Web Workers for heavy computations
// - Implement virtual scrolling
// - Optimize memory usage
// - Implement caching strategies

class PerformanceOptimizer {
    constructor() {
        this.observers = new Map();
        this.workers = new Map();
        this.cache = new Map();
    }
    
    // Your implementation here
}

// Features to implement:
// - lazyLoadImages()
// - virtualScroll(container, items, renderItem)
// - debounce(func, delay)
// - throttle(func, limit)
// - memoize(func)
// - createWorker(script)
// - optimizeDOM()
// - implementCache(strategy)
```

## 🏆 Portfolio Projects

### Project 1: Personal Portfolio Website
**Difficulty: ⭐⭐⭐**

Create a personal portfolio website showcasing your JavaScript skills.

```javascript
// Requirements:
// - Responsive design
// - Interactive animations
// - Contact form
// - Project showcase
// - Skills section
// - About page

class PortfolioWebsite {
    constructor() {
        this.sections = [];
        this.projects = [];
        this.skills = [];
        this.contactForm = null;
    }
    
    // Your implementation here
}
```

### Project 2: Blog Platform
**Difficulty: ⭐⭐⭐⭐**

Build a full-featured blog platform with content management.

```javascript
// Requirements:
// - Create and edit blog posts
// - Comment system
// - User authentication
// - Admin dashboard
// - Search functionality
// - Tag system
// - RSS feed

class BlogPlatform {
    constructor() {
        this.posts = [];
        this.users = new Map();
        this.comments = [];
        this.tags = new Set();
        this.currentUser = null;
    }
    
    // Your implementation here
}
```

### Project 3: Real-time Chat Application
**Difficulty: ⭐⭐⭐⭐⭐**

Develop a real-time chat application with WebSocket support.

```javascript
// Requirements:
// - Real-time messaging
// - User authentication
// - Room/group chat
// - File sharing
// - Message history
// - Online status
// - Notifications

class ChatApplication {
    constructor() {
        this.socket = null;
        this.rooms = new Map();
        this.users = new Map();
        this.messages = [];
        this.currentUser = null;
    }
    
    // Your implementation here
}
```

## 🎯 Testing and Debugging

### Unit Testing
```javascript
// Create test cases for your functions
class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }
    
    test(name, testFunction) {
        try {
            testFunction();
            this.passed++;
            console.log(`✅ ${name} passed`);
        } catch (error) {
            this.failed++;
            console.log(`❌ ${name} failed: ${error.message}`);
        }
    }
    
    runAll() {
        console.log(`\nRunning ${this.tests.length} tests...`);
        this.tests.forEach(test => test());
        console.log(`\nResults: ${this.passed} passed, ${this.failed} failed`);
    }
}

// Example usage
const testRunner = new TestRunner();

testRunner.test('Addition works', () => {
    const result = add(2, 3);
    if (result !== 5) {
        throw new Error(`Expected 5, got ${result}`);
    }
});
```

### Debugging Tools
```javascript
// Create debugging utilities
class Debugger {
    static log(message, data = null) {
        console.log(`[DEBUG] ${message}`, data);
    }
    
    static error(message, error = null) {
        console.error(`[ERROR] ${message}`, error);
    }
    
    static time(label) {
        console.time(label);
    }
    
    static timeEnd(label) {
        console.timeEnd(label);
    }
    
    static trace(message) {
        console.trace(`[TRACE] ${message}`);
    }
}

// Usage
Debugger.log('Starting calculation');
Debugger.time('calculation');
const result = performCalculation();
Debugger.timeEnd('calculation');
Debugger.log('Calculation complete', result);
```

## 🎯 Best Practices

### Code Organization
```javascript
// Organize your code into modules
// utils.js
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// api.js
export class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        return await response.json();
    }
}

// app.js
import { formatDate, validateEmail } from './utils.js';
import { ApiClient } from './api.js';

class App {
    constructor() {
        this.api = new ApiClient('https://api.example.com');
    }
    
    async init() {
        // App initialization
    }
}
```

### Error Handling
```javascript
// Implement proper error handling
class ErrorHandler {
    static handle(error, context = '') {
        console.error(`Error in ${context}:`, error);
        
        // Log to external service
        this.logError(error, context);
        
        // Show user-friendly message
        this.showUserMessage(error);
    }
    
    static logError(error, context) {
        // Send to logging service
        fetch('/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                error: error.message,
                stack: error.stack,
                context,
                timestamp: new Date().toISOString()
            })
        });
    }
    
    static showUserMessage(error) {
        // Show user-friendly error message
        const message = this.getUserMessage(error);
        this.displayNotification(message, 'error');
    }
    
    static getUserMessage(error) {
        const messages = {
            'NetworkError': 'Please check your internet connection',
            'ValidationError': 'Please check your input',
            'AuthenticationError': 'Please log in again'
        };
        
        return messages[error.name] || 'An unexpected error occurred';
    }
}
```

## 🎯 Key Takeaways

1. **Practice regularly** - Code every day to improve your skills
2. **Build real projects** - Apply what you learn in practical scenarios
3. **Test your code** - Write tests to ensure your code works correctly
4. **Learn from others** - Study open-source projects and code reviews
5. **Keep learning** - JavaScript is constantly evolving

## 📚 Next Steps

Now that you've completed the exercises and projects:

1. **Build your portfolio** - Showcase your best projects
2. **Contribute to open source** - Help others and learn from the community
3. **Learn frameworks** - Explore React, Vue, or Angular
4. **Study advanced topics** - Learn about design patterns, architecture, and performance
5. **Stay updated** - Follow JavaScript news and updates

---

*Congratulations! You've completed the JavaScript Fundamentals course. Keep coding and never stop learning!*
