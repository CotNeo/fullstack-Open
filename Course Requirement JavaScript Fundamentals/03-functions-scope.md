# Functions and Scope

## 🎯 Learning Objectives
- Understand function declaration and expression
- Learn about function parameters and arguments
- Master scope (global, function, block)
- Understand closures and their practical applications
- Learn about arrow functions and modern JavaScript features

## 🔧 Function Declaration

### Basic Function Syntax
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("John")); // "Hello, John!"
console.log(greet("Jane")); // "Hello, Jane!"
```

### Function with Multiple Parameters
```javascript
function calculateArea(length, width) {
    return length * width;
}

function calculateVolume(length, width, height) {
    return length * width * height;
}

// Using the functions
let area = calculateArea(5, 3);
let volume = calculateVolume(5, 3, 2);
console.log(`Area: ${area}, Volume: ${volume}`);
```

### Function with Default Parameters
```javascript
// ES6+ default parameters
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet("Jane", "Hi")); // "Hi, Jane!"

// Default parameters with expressions
function createUser(name, role = "user", isActive = true) {
    return {
        name,
        role,
        isActive,
        createdAt: new Date()
    };
}

let user1 = createUser("John");
let user2 = createUser("Jane", "admin", false);
```

### Function with Rest Parameters
```javascript
// Rest parameters (...args)
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest parameters with other parameters
function createProfile(name, age, ...hobbies) {
    return {
        name,
        age,
        hobbies: hobbies
    };
}

let profile = createProfile("John", 30, "reading", "coding", "gaming");
console.log(profile);
```

## 🎭 Function Expressions

### Anonymous Function Expression
```javascript
// Function assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("John")); // "Hello, John!"

// Function as object property
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
```

### Named Function Expression
```javascript
// Named function expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // 120
```

## 🏹 Arrow Functions (ES6+)

### Basic Arrow Function Syntax
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => {
    return a + b;
};

// Arrow function with implicit return
const addImplicit = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const getCurrentTime = () => new Date();

console.log(add(2, 3)); // 5
console.log(addArrow(2, 3)); // 5
console.log(addImplicit(2, 3)); // 5
console.log(square(4)); // 16
console.log(getCurrentTime());
```

### Arrow Functions with Arrays
```javascript
const numbers = [1, 2, 3, 4, 5];

// Traditional function
const doubled = numbers.map(function(num) {
    return num * 2;
});

// Arrow function
const doubledArrow = numbers.map(num => num * 2);

// Filter with arrow function
const evens = numbers.filter(num => num % 2 === 0);

// Reduce with arrow function
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens); // [2, 4]
console.log(sum); // 15
```

## 🎯 Scope

### Global Scope
```javascript
// Global variables
let globalVar = "I'm global";
const globalConst = "I'm also global";

function checkGlobalScope() {
    console.log(globalVar); // "I'm global"
    console.log(globalConst); // "I'm also global"
}

checkGlobalScope();
```

### Function Scope
```javascript
function functionScope() {
    let functionVar = "I'm in function scope";
    const functionConst = "I'm also in function scope";
    
    console.log(functionVar); // Works inside function
    console.log(functionConst); // Works inside function
}

functionScope();
// console.log(functionVar); // Error - not accessible outside function
```

### Block Scope
```javascript
// Block scope with let and const
if (true) {
    let blockVar = "I'm in block scope";
    const blockConst = "I'm also in block scope";
    
    console.log(blockVar); // Works inside block
    console.log(blockConst); // Works inside block
}

// console.log(blockVar); // Error - not accessible outside block

// Loop with block scope
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // Error - i is not accessible outside loop
```

### Scope Chain
```javascript
let globalVar = "global";

function outerFunction() {
    let outerVar = "outer";
    
    function innerFunction() {
        let innerVar = "inner";
        
        console.log(globalVar); // "global" - accessible
        console.log(outerVar); // "outer" - accessible
        console.log(innerVar); // "inner" - accessible
    }
    
    innerFunction();
    // console.log(innerVar); // Error - not accessible
}

outerFunction();
```

## 🔒 Closures

### Basic Closure
```javascript
function outerFunction(x) {
    // Outer function's variable
    let outerVariable = x;
    
    // Inner function (closure)
    function innerFunction(y) {
        return outerVariable + y;
    }
    
    return innerFunction;
}

// Create closure
const addFive = outerFunction(5);
console.log(addFive(3)); // 8 (5 + 3)
console.log(addFive(10)); // 15 (5 + 10)

// Another closure
const addTen = outerFunction(10);
console.log(addTen(5)); // 15 (10 + 5)
```

### Practical Closure Examples
```javascript
// Counter with closure
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// Private variables with closure
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120
console.log(account.getBalance()); // 120
```

### Closure with Event Handlers
```javascript
// Closure in event handlers
function createButtonHandler(buttonName) {
    return function() {
        console.log(`${buttonName} button clicked!`);
    };
}

// Simulate button creation
const button1 = createButtonHandler("Submit");
const button2 = createButtonHandler("Cancel");

button1(); // "Submit button clicked!"
button2(); // "Cancel button clicked!"
```

## 🎪 Higher-Order Functions

### Functions as Arguments
```javascript
// Higher-order function that takes a function as argument
function processArray(array, processor) {
    const result = [];
    for (let item of array) {
        result.push(processor(item));
    }
    return result;
}

// Processor functions
function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, double)); // [2, 4, 6, 8, 10]
console.log(processArray(numbers, square)); // [1, 4, 9, 16, 25]
```

### Functions as Return Values
```javascript
// Function that returns a function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Built-in Higher-Order Functions
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter - select elements that meet condition
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// reduce - reduce array to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 55

// find - find first element that meets condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// some - check if any element meets condition
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - check if all elements meet condition
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
```

## 🎭 Function Methods

### call() Method
```javascript
const person1 = {
    name: "John",
    greet: function(greeting) {
        return `${greeting}, I'm ${this.name}`;
    }
};

const person2 = {
    name: "Jane"
};

// Using call to change 'this' context
console.log(person1.greet.call(person2, "Hello")); // "Hello, I'm Jane"
```

### apply() Method
```javascript
function introduce(greeting, age, city) {
    return `${greeting}, I'm ${this.name}, ${age} years old, from ${city}`;
}

const person = { name: "John" };
const args = ["Hi", 30, "New York"];

console.log(introduce.apply(person, args)); // "Hi, I'm John, 30 years old, from New York"
```

### bind() Method
```javascript
const person = {
    name: "John",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

const boundGreet = person.greet.bind(person);
console.log(boundGreet()); // "Hello, I'm John"

// bind with parameters
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10
```

## 🎯 Immediately Invoked Function Expression (IIFE)

### Basic IIFE
```javascript
// IIFE - executes immediately
(function() {
    console.log("This runs immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");

// IIFE that returns a value
const result = (function(a, b) {
    return a + b;
})(5, 3);
console.log(result); // 8
```

### IIFE for Module Pattern
```javascript
// Module pattern with IIFE
const calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

// Method chaining
calculator.add(5).multiply(2).subtract(3);
console.log(calculator.getResult()); // 7
```

## 🏃‍♂️ Practice Exercises

### Exercise 1: Function Basics
```javascript
// Create a function that calculates the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Create a function that calculates the circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(calculateRectangleArea(5, 3)); // 15
console.log(calculateCircumference(5)); // 31.41592653589793
```

### Exercise 2: Arrow Functions
```javascript
// Convert these to arrow functions
const numbers = [1, 2, 3, 4, 5];

// Traditional function
function isEven(num) {
    return num % 2 === 0;
}

// Arrow function
const isEvenArrow = num => num % 2 === 0;

// Use with filter
const evens = numbers.filter(isEvenArrow);
console.log(evens); // [2, 4]
```

### Exercise 3: Closures
```javascript
// Create a closure that remembers a counter
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = initialValue
    };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.getValue()); // 12
console.log(counter.reset()); // 10
```

### Exercise 4: Higher-Order Functions
```javascript
// Create a function that processes an array with a custom function
function processArray(array, processor) {
    return array.map(processor);
}

// Create processor functions
const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, double)); // [2, 4, 6, 8, 10]
console.log(processArray(numbers, square)); // [1, 4, 9, 16, 25]
console.log(processArray(numbers, addOne)); // [2, 3, 4, 5, 6]
```

## 🎯 Key Takeaways

1. **Functions are first-class citizens** - Can be assigned to variables, passed as arguments, returned from other functions
2. **Scope determines accessibility** - Variables are accessible in their scope and inner scopes
3. **Closures preserve scope** - Inner functions have access to outer function variables even after outer function returns
4. **Arrow functions are concise** - But be careful with `this` binding
5. **Higher-order functions are powerful** - Use them for functional programming patterns

## 📚 Next Steps

Now that you understand functions and scope, let's learn about:
- [Objects and Arrays](./04-objects-arrays.md)
- [DOM Manipulation](./05-dom-manipulation.md)
- [Asynchronous JavaScript](./06-asynchronous-javascript.md)

---

*Functions are the building blocks of JavaScript. Master them and you'll be able to create powerful, reusable code!*
