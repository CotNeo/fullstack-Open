# Variables and Data Types

## 🎯 Learning Objectives
- Understand JavaScript variables and declaration methods
- Learn about JavaScript data types (primitive and reference)
- Master type coercion and type checking
- Practice with operators and expressions

## 📦 Variable Declaration

### Declaration Methods

#### 1. `var` (Legacy - Avoid in modern code)
```javascript
// var has function scope and can be redeclared
var oldStyle = "Avoid this";
var oldStyle = "Can be redeclared"; // No error

function example() {
    if (true) {
        var functionScoped = "Available in entire function";
    }
    console.log(functionScoped); // Works - function scope
}
```

#### 2. `let` (Block-scoped, can be reassigned)
```javascript
// let has block scope and cannot be redeclared
let modernVariable = "Preferred for variables that change";
modernVariable = "Can be reassigned";

if (true) {
    let blockScoped = "Only available in this block";
    // blockScoped is only accessible here
}

// let blockScoped = "Error - cannot redeclare";
```

#### 3. `const` (Block-scoped, cannot be reassigned)
```javascript
// const cannot be reassigned, but object/array contents can change
const constantValue = "Cannot be reassigned";
// constantValue = "Error - cannot reassign";

const user = { name: "John" };
user.name = "Jane"; // OK - object contents can change
user.age = 30; // OK - adding properties

// const user = {}; // Error - cannot redeclare
```

### Best Practices
```javascript
// ✅ Good practices
const API_URL = "https://api.example.com"; // Constants in UPPER_CASE
let currentUser = null; // Variables that change
const userPreferences = {}; // Objects that won't be reassigned

// ❌ Avoid
var oldStyle = "Don't use var";
let CONSTANT_VALUE = "Don't use let for constants";
```

## 🔢 Data Types

### Primitive Types

#### 1. Number
```javascript
// All numbers are 64-bit floating point
let integer = 42;
let decimal = 3.14159;
let scientific = 1e6; // 1,000,000
let negative = -100;
let infinity = Infinity;
let notANumber = NaN;

// Number methods
console.log(integer.toString()); // "42"
console.log(decimal.toFixed(2)); // "3.14"
console.log(Number.isInteger(42)); // true
console.log(Number.isNaN(NaN)); // true

// Math operations
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
let power = 2 ** 3; // 8
```

#### 2. String
```javascript
// String creation
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let templateLiteral = `Hello World`;
let backslash = "He said \"Hello\"";

// Template literals (ES6+)
let name = "John";
let age = 30;
let greeting = `Hello, my name is ${name} and I'm ${age} years old`;

// Multi-line strings
let multiLine = `
    This is a
    multi-line
    string
`;

// String methods
let text = "Hello World";
console.log(text.length); // 11
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
console.log(text.charAt(0)); // "H"
console.log(text.indexOf("World")); // 6
console.log(text.substring(0, 5)); // "Hello"
console.log(text.split(" ")); // ["Hello", "World"]
```

#### 3. Boolean
```javascript
// Boolean values
let isTrue = true;
let isFalse = false;

// Truthy and Falsy values
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Logical operators
let and = true && false; // false
let or = true || false; // true
let not = !true; // false
```

#### 4. Undefined
```javascript
// Undefined - variable declared but not assigned
let undefinedVariable;
console.log(undefinedVariable); // undefined

// Function without return
function noReturn() {
    // No return statement
}
console.log(noReturn()); // undefined

// Accessing non-existent properties
let obj = {};
console.log(obj.nonExistent); // undefined
```

#### 5. Null
```javascript
// Null - intentional absence of value
let nullValue = null;
console.log(nullValue); // null

// typeof null returns "object" (historical quirk)
console.log(typeof null); // "object"

// Checking for null
if (nullValue === null) {
    console.log("Value is null");
}
```

#### 6. Symbol (ES6+)
```javascript
// Symbol - unique identifier
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false - symbols are unique

// Symbol.for() - global symbol registry
let globalSym1 = Symbol.for("key");
let globalSym2 = Symbol.for("key");
console.log(globalSym1 === globalSym2); // true

// Using symbols as object keys
let obj = {};
let symKey = Symbol("secret");
obj[symKey] = "secret value";
console.log(obj[symKey]); // "secret value"
```

### Reference Types

#### 1. Object
```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

// Accessing properties
console.log(person.name); // "John"
console.log(person["age"]); // 30
console.log(person.address.city); // "New York"

// Adding/modifying properties
person.email = "john@example.com";
person.age = 31;

// Object methods
console.log(Object.keys(person)); // ["name", "age", "isStudent", ...]
console.log(Object.values(person)); // ["John", 30, false, ...]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ...]
```

#### 2. Array
```javascript
// Array creation
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, { name: "John" }];
let empty = [];

// Array methods
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
console.log(fruits[0]); // "apple"
console.log(fruits.push("grape")); // 4 (new length)
console.log(fruits.pop()); // "grape"
console.log(fruits.unshift("kiwi")); // 4 (new length)
console.log(fruits.shift()); // "kiwi"

// Array iteration
fruits.forEach(fruit => console.log(fruit));
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
let filteredFruits = fruits.filter(fruit => fruit.length > 5);
```

#### 3. Function
```javascript
// Functions are objects too!
function greet(name) {
    return `Hello, ${name}!`;
}

// Function properties
console.log(greet.name); // "greet"
console.log(greet.length); // 1 (number of parameters)

// Functions can have properties
greet.customProperty = "I'm a function property";
console.log(greet.customProperty); // "I'm a function property"
```

## 🔄 Type Coercion

### Automatic Type Conversion
```javascript
// String coercion
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (numeric subtraction)
console.log("5" * 3); // 15 (numeric multiplication)
console.log("5" / 3); // 1.666... (numeric division)

// Boolean coercion
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true

// Numeric coercion
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

### Explicit Type Conversion
```javascript
// String conversion
let num = 42;
console.log(String(num)); // "42"
console.log(num.toString()); // "42"
console.log(num + ""); // "42" (implicit)

// Number conversion
let str = "123";
console.log(Number(str)); // 123
console.log(parseInt(str)); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(+str); // 123 (unary plus)

// Boolean conversion
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(!!0); // false (double negation)
```

## 🔍 Type Checking

### typeof Operator
```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (historical quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"
```

### Better Type Checking
```javascript
// Check for specific types
function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    if (typeof value === "object") return "object";
    return typeof value;
}

console.log(getType(null)); // "null"
console.log(getType([])); // "array"
console.log(getType({})); // "object"
console.log(getType(42)); // "number"
```

## 🎯 Operators

### Arithmetic Operators
```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (addition)
console.log(a - b); // 7 (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (exponentiation)
console.log(++a); // 11 (pre-increment)
console.log(a++); // 11 (post-increment)
console.log(--b); // 2 (pre-decrement)
console.log(b--); // 2 (post-decrement)
```

### Comparison Operators
```javascript
let x = 5;
let y = "5";

console.log(x == y); // true (loose equality)
console.log(x === y); // false (strict equality)
console.log(x != y); // false (loose inequality)
console.log(x !== y); // true (strict inequality)
console.log(x > 3); // true
console.log(x < 10); // true
console.log(x >= 5); // true
console.log(x <= 5); // true
```

### Logical Operators
```javascript
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn && hasPermission); // false (AND)
console.log(isLoggedIn || hasPermission); // true (OR)
console.log(!isLoggedIn); // false (NOT)

// Short-circuit evaluation
let result = isLoggedIn && "User is logged in";
console.log(result); // "User is logged in"

let defaultName = null || "Guest";
console.log(defaultName); // "Guest"
```

### Assignment Operators
```javascript
let num = 10;

num += 5; // num = num + 5 (15)
num -= 3; // num = num - 3 (12)
num *= 2; // num = num * 2 (24)
num /= 4; // num = num / 4 (6)
num %= 5; // num = num % 5 (1)
num **= 3; // num = num ** 3 (1)
```

## 🏃‍♂️ Practice Exercises

### Exercise 1: Variable Declaration
```javascript
// Create variables for:
// - Your name (const)
// - Your age (let)
// - Your favorite color (const)
// - Whether you like programming (let)

const myName = "John Doe";
let myAge = 25;
const favoriteColor = "blue";
let likesProgramming = true;

console.log(`Hi, I'm ${myName}, I'm ${myAge} years old, my favorite color is ${favoriteColor}, and I ${likesProgramming ? 'love' : 'don\'t like'} programming!`);
```

### Exercise 2: Type Conversion
```javascript
// Convert these values and log the results:
let str = "123";
let num = 456;
let bool = true;

console.log("String to number:", Number(str));
console.log("Number to string:", String(num));
console.log("Boolean to number:", Number(bool));
console.log("String to boolean:", Boolean(str));
```

### Exercise 3: Array Operations
```javascript
// Create an array of your favorite foods
let favoriteFoods = ["pizza", "pasta", "sushi", "tacos"];

// Add a new food
favoriteFoods.push("burgers");

// Remove the last food
favoriteFoods.pop();

// Log each food
favoriteFoods.forEach(food => console.log(`I love ${food}!`));
```

## 🎯 Key Takeaways

1. **Use `const` by default** - Only use `let` when you need to reassign
2. **Avoid `var`** - Use `let` and `const` instead
3. **Understand type coercion** - JavaScript converts types automatically
4. **Use strict equality** - `===` instead of `==`
5. **Check types explicitly** - Don't rely on automatic conversion

## 📚 Next Steps

Now that you understand variables and data types, let's learn about:
- [Functions and Scope](./03-functions-scope.md)
- [Objects and Arrays](./04-objects-arrays.md)
- [DOM Manipulation](./05-dom-manipulation.md)

---

*Practice makes perfect! Try every example and experiment with different values.*
