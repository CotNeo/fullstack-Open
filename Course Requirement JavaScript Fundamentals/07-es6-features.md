# ES6+ Features

## 🎯 Learning Objectives
- Master ES6+ JavaScript features
- Understand modern JavaScript syntax
- Learn about modules and imports
- Practice with advanced JavaScript concepts
- Apply modern features in real projects

## 🚀 ES6 (ES2015) Features

### let and const
```javascript
// Block-scoped variables
if (true) {
    let blockScoped = "I'm block scoped";
    const constant = "I cannot be reassigned";
    
    // blockScoped is only accessible here
}

// const cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error!

// But object contents can change
const person = { name: "John" };
person.name = "Jane"; // OK
person.age = 30; // OK
```

### Arrow Functions
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const greet = () => "Hello World";

// Multiple statements
const process = (x) => {
    const doubled = x * 2;
    return doubled;
};
```

### Template Literals
```javascript
const name = "John";
const age = 30;

// String interpolation
const message = `Hello, my name is ${name} and I'm ${age} years old`;

// Multi-line strings
const html = `
    <div class="user">
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Expressions in templates
const calculation = `The result is ${2 + 3}`;
```

### Destructuring
```javascript
// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
const [primary, ...rest] = colors;

// Object destructuring
const person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;
const { name: personName, age: personAge } = person;

// Nested destructuring
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
const { name, address: { city } } = user;
```

### Spread Operator
```javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// Function arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

### Default Parameters
```javascript
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Default with expressions
function createUser(name, role = "user", isActive = true) {
    return {
        name,
        role,
        isActive,
        createdAt: new Date()
    };
}
```

### Enhanced Object Literals
```javascript
const name = "John";
const age = 30;

// Shorthand property names
const person = { name, age };

// Shorthand method names
const calculator = {
    add(a, b) {
        return a + b;
    },
    
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
const propName = "dynamic";
const obj = {
    [propName]: "value",
    [`${propName}2`]: "another value"
};
```

## 🏗️ Classes

### Basic Class Syntax
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
}

const person = new Person("John", 30);
console.log(person.greet()); // "Hello, I'm John"
```

### Inheritance
```javascript
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        return `${this.name} is studying`;
    }
    
    greet() {
        return `${super.greet()}, I'm a student`;
    }
}

const student = new Student("Jane", 20, "A");
console.log(student.greet()); // "Hello, I'm Jane, I'm a student"
console.log(student.study()); // "Jane is studying"
```

### Static Methods
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.multiply(4, 5)); // 20
```

### Getters and Setters
```javascript
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get area() {
        return Math.PI * this.radius ** 2;
    }
    
    get diameter() {
        return this.radius * 2;
    }
    
    set diameter(value) {
        this.radius = value / 2;
    }
}

const circle = new Circle(5);
console.log(circle.area); // 78.54
circle.diameter = 20;
console.log(circle.radius); // 10
```

## 📦 Modules

### Export Syntax
```javascript
// Named exports
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}

// Default export
export default class Calculator {
    add(a, b) {
        return a + b;
    }
}

// Export list
const name = "John";
const age = 30;
export { name, age };

// Rename exports
export { name as personName, age as personAge };
```

### Import Syntax
```javascript
// Named imports
import { PI, add } from './math.js';

// Default import
import Calculator from './calculator.js';

// Import all
import * as math from './math.js';

// Rename imports
import { add as addNumbers } from './math.js';

// Mixed imports
import Calculator, { PI, add } from './calculator.js';
```

### Dynamic Imports
```javascript
// Dynamic import
async function loadModule() {
    const module = await import('./math.js');
    return module.add(2, 3);
}

// Conditional import
if (condition) {
    const { specialFunction } = await import('./special.js');
    specialFunction();
}
```

## 🎯 ES2017+ Features

### async/await
```javascript
// Async function
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

// Async arrow function
const fetchData = async () => {
    const response = await fetch('/api/data');
    return await response.json();
};
```

### Object.entries() and Object.values()
```javascript
const person = { name: "John", age: 30, city: "NYC" };

// Object.entries()
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

// Object.values()
const values = Object.values(person);
console.log(values); // ["John", 30, "NYC"]

// Object.keys()
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]
```

### Array.includes()
```javascript
const fruits = ["apple", "banana", "orange"];

// Check if array includes value
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("grape")); // false

// Case-sensitive
console.log(fruits.includes("Apple")); // false
```

### String.padStart() and String.padEnd()
```javascript
const number = "5";

// Pad start
console.log(number.padStart(3, "0")); // "005"
console.log(number.padStart(5, "0")); // "00005"

// Pad end
console.log(number.padEnd(3, "0")); // "500"
console.log(number.padEnd(5, "0")); // "50000"
```

## 🎨 ES2018+ Features

### Rest/Spread for Objects
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Object spread
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Object rest
const { a, ...rest } = obj1;
console.log(rest); // { b: 2 }
```

### Optional Chaining
```javascript
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

// Safe property access
console.log(user?.address?.street); // "123 Main St"
console.log(user?.phone?.number); // undefined (no error)

// Safe method calls
console.log(user?.getName?.()); // undefined (no error)

// Safe array access
const users = [{ name: "John" }];
console.log(users?.[0]?.name); // "John"
console.log(users?.[1]?.name); // undefined
```

### Nullish Coalescing
```javascript
// Default values
const name = user.name ?? "Guest";
const age = user.age ?? 0;

// vs logical OR (different behavior)
const count = user.count || 0; // 0 becomes 0
const count2 = user.count ?? 0; // 0 stays 0

// Chaining
const result = user?.settings?.theme ?? "light";
```

### BigInt
```javascript
// BigInt for large integers
const bigNumber = 123456789012345678901234567890n;
const anotherBig = BigInt("123456789012345678901234567890");

// Operations
console.log(bigNumber + anotherBig);
console.log(bigNumber * 2n);

// Conversion
const regularNumber = 123;
const bigFromRegular = BigInt(regularNumber);
```

## 🎯 ES2020+ Features

### Dynamic Imports
```javascript
// Dynamic import with await
async function loadModule() {
    const { default: Calculator } = await import('./calculator.js');
    return new Calculator();
}

// Dynamic import with then
import('./math.js').then(module => {
    console.log(module.add(2, 3));
});
```

### Top-level await
```javascript
// Top-level await (in modules)
const data = await fetch('/api/data').then(r => r.json());
console.log(data);

// This works in modules, not in regular scripts
```

### Promise.allSettled()
```javascript
const promises = [
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Another success")
];

Promise.allSettled(promises).then(results => {
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index}: ${result.value}`);
        } else {
            console.log(`Promise ${index}: ${result.reason}`);
        }
    });
});
```

### String.matchAll()
```javascript
const text = "Hello world, hello universe";
const regex = /hello/gi;

// Get all matches with details
for (const match of text.matchAll(regex)) {
    console.log(match[0]); // "Hello", "hello"
    console.log(match.index); // 0, 13
}
```

## 🏗️ Modern JavaScript Patterns

### Module Pattern
```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export default class Calculator {
    constructor() {
        this.history = [];
    }
    
    calculate(operation, a, b) {
        const result = operation(a, b);
        this.history.push({ operation: operation.name, a, b, result });
        return result;
    }
}
```

### Factory Pattern
```javascript
class UserFactory {
    static createUser(type, data) {
        switch (type) {
            case 'admin':
                return new AdminUser(data);
            case 'regular':
                return new RegularUser(data);
            default:
                throw new Error('Invalid user type');
        }
    }
}

class AdminUser {
    constructor(data) {
        this.name = data.name;
        this.role = 'admin';
        this.permissions = ['read', 'write', 'delete'];
    }
}

class RegularUser {
    constructor(data) {
        this.name = data.name;
        this.role = 'user';
        this.permissions = ['read'];
    }
}
```

### Observer Pattern
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

// Usage
const emitter = new EventEmitter();
emitter.on('userLogin', (user) => {
    console.log(`User ${user.name} logged in`);
});
emitter.emit('userLogin', { name: 'John' });
```

## 🏃‍♂️ Practice Exercises

### Exercise 1: ES6 Class
```javascript
// Create a BankAccount class with ES6 features
class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount, date: new Date() });
            return this.balance;
        }
        throw new Error('Amount must be positive');
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdrawal', amount, date: new Date() });
            return this.balance;
        }
        throw new Error('Insufficient funds or invalid amount');
    }
    
    getBalance() {
        return this.balance;
    }
    
    getTransactions() {
        return [...this.transactions];
    }
}

// Usage
const account = new BankAccount('123456', 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300
```

### Exercise 2: Destructuring and Spread
```javascript
// Create a function that merges user profiles
function mergeUserProfiles(profile1, profile2) {
    const { name, email, ...rest1 } = profile1;
    const { phone, address, ...rest2 } = profile2;
    
    return {
        name: name || 'Unknown',
        email: email || 'No email',
        phone: phone || 'No phone',
        address: address || 'No address',
        ...rest1,
        ...rest2
    };
}

// Usage
const profile1 = { name: 'John', email: 'john@example.com', age: 30 };
const profile2 = { phone: '123-456-7890', city: 'New York' };
const merged = mergeUserProfiles(profile1, profile2);
console.log(merged);
```

### Exercise 3: Modern Array Methods
```javascript
// Process an array of products with modern methods
const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Book', price: 15, category: 'Education' },
    { id: 3, name: 'Phone', price: 699, category: 'Electronics' }
];

// Get all electronics
const electronics = products.filter(p => p.category === 'Electronics');

// Calculate total value
const totalValue = products.reduce((sum, p) => sum + p.price, 0);

// Get average price
const averagePrice = totalValue / products.length;

// Group by category
const grouped = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = acc[category] || [];
    acc[category].push(product);
    return acc;
}, {});

console.log('Electronics:', electronics);
console.log('Total value:', totalValue);
console.log('Average price:', averagePrice);
console.log('Grouped:', grouped);
```

## 🎯 Key Takeaways

1. **ES6+ features make code cleaner** - Use modern syntax for better readability
2. **Classes provide structure** - Use them for object-oriented programming
3. **Modules organize code** - Use them for better code organization
4. **Destructuring simplifies access** - Use it for cleaner variable assignment
5. **Modern methods are powerful** - Use them for efficient data processing

## 📚 Next Steps

Now that you understand ES6+ features, let's learn about:
- [Practical Examples](./08-practical-examples.md)
- [Exercises and Projects](./09-exercises-projects.md)

---

*Modern JavaScript features make your code more readable, maintainable, and efficient. Master them and you'll write better JavaScript!*
