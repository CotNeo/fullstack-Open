# Objects and Arrays

## 🎯 Learning Objectives
- Master object creation and manipulation
- Understand array methods and operations
- Learn destructuring and spread operators
- Practice with real-world data structures
- Understand object-oriented programming concepts

## 🏗️ Object Creation

### Object Literal
```javascript
// Basic object literal
const person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isActive: true
};

console.log(person.name); // "John Doe"
console.log(person["age"]); // 30
```

### Object with Methods
```javascript
const calculator = {
    result: 0,
    
    add: function(x) {
        this.result += x;
        return this;
    },
    
    subtract: function(x) {
        this.result -= x;
        return this;
    },
    
    multiply: function(x) {
        this.result *= x;
        return this;
    },
    
    getResult: function() {
        return this.result;
    },
    
    reset: function() {
        this.result = 0;
        return this;
    }
};

// Method chaining
calculator.add(5).multiply(2).subtract(3);
console.log(calculator.getResult()); // 7
```

### Object with Computed Properties
```javascript
const propertyName = "dynamicProperty";
const propertyValue = "dynamic value";

const obj = {
    [propertyName]: propertyValue,
    [`${propertyName}2`]: "another dynamic value",
    
    // Method with computed name
    [`get${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}`]() {
        return this[propertyName];
    }
};

console.log(obj.dynamicProperty); // "dynamic value"
console.log(obj.getDynamicProperty()); // "dynamic value"
```

## 🔧 Object Manipulation

### Adding and Modifying Properties
```javascript
const user = {
    name: "John",
    age: 30
};

// Adding new properties
user.email = "john@example.com";
user["phone"] = "123-456-7890";

// Modifying existing properties
user.age = 31;

// Using Object.assign()
Object.assign(user, {
    city: "New York",
    country: "USA"
});

console.log(user);
```

### Property Descriptors
```javascript
const obj = {};

// Define property with descriptor
Object.defineProperty(obj, "readOnly", {
    value: "Cannot be changed",
    writable: false,
    enumerable: true,
    configurable: false
});

// Try to change (will fail silently in strict mode)
obj.readOnly = "New value";
console.log(obj.readOnly); // "Cannot be changed"

// Define getter and setter
Object.defineProperty(obj, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
});

obj.firstName = "John";
obj.lastName = "Doe";
console.log(obj.fullName); // "John Doe"

obj.fullName = "Jane Smith";
console.log(obj.firstName); // "Jane"
console.log(obj.lastName); // "Smith"
```

### Object Methods
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Object.keys() - get property names
console.log(Object.keys(person)); // ["name", "age", "city"]

// Object.values() - get property values
console.log(Object.values(person)); // ["John", 30, "New York"]

// Object.entries() - get key-value pairs
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "New York"]]

// Object.hasOwnProperty() - check if property exists
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("salary")); // false

// Object.freeze() - make object immutable
Object.freeze(person);
person.age = 31; // Won't change
console.log(person.age); // 30

// Object.seal() - prevent adding/removing properties
const sealedObj = { a: 1 };
Object.seal(sealedObj);
sealedObj.a = 2; // Works
sealedObj.b = 3; // Won't add
console.log(sealedObj); // { a: 2 }
```

## 📊 Array Creation and Basics

### Array Creation
```javascript
// Array literal
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "John" }];

// Array constructor
const emptyArray = new Array();
const sizedArray = new Array(5); // Creates array with length 5
const filledArray = new Array(3).fill("default");

// Array.from() - create from iterable
const fromString = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const fromSet = Array.from(new Set([1, 2, 3, 2, 1])); // [1, 2, 3]

console.log(fruits); // ["apple", "banana", "orange"]
console.log(sizedArray); // [empty × 5]
console.log(filledArray); // ["default", "default", "default"]
```

### Array Access and Modification
```javascript
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // 5

// Modifying elements
numbers[0] = 10;
numbers[5] = 6; // Adds new element

// Array length
console.log(numbers.length); // 6

// Adding elements
numbers.push(7); // Add to end
numbers.unshift(0); // Add to beginning

// Removing elements
const lastElement = numbers.pop(); // Remove from end
const firstElement = numbers.shift(); // Remove from beginning

console.log(numbers); // [10, 2, 3, 4, 5, 6]
```

## 🔄 Array Methods

### Iteration Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - iterate over array
numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
});

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - select elements that meet condition
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - reduce array to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

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

### Array Transformation
```javascript
const fruits = ["apple", "banana", "orange", "grape"];

// slice - extract portion of array
const firstTwo = fruits.slice(0, 2);
const lastTwo = fruits.slice(-2);
console.log(firstTwo); // ["apple", "banana"]
console.log(lastTwo); // ["orange", "grape"]

// splice - remove/add elements
const removed = fruits.splice(1, 2, "kiwi", "mango");
console.log(fruits); // ["apple", "kiwi", "mango", "grape"]
console.log(removed); // ["banana", "orange"]

// concat - combine arrays
const vegetables = ["carrot", "broccoli"];
const allFood = fruits.concat(vegetables);
console.log(allFood); // ["apple", "kiwi", "mango", "grape", "carrot", "broccoli"]

// join - convert array to string
const fruitString = fruits.join(", ");
console.log(fruitString); // "apple, kiwi, mango, grape"
```

### Array Sorting and Searching
```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// sort - sort array in place
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [9, 6, 5, 4, 3, 2, 1, 1]

// indexOf - find index of element
const index = numbers.indexOf(5);
console.log(index); // 2

// lastIndexOf - find last index of element
const lastIndex = numbers.lastIndexOf(1);
console.log(lastIndex); // 6

// includes - check if array contains element
const hasFive = numbers.includes(5);
console.log(hasFive); // true
```

## 🎯 Destructuring

### Array Destructuring
```javascript
const colors = ["red", "green", "blue"];

// Basic destructuring
const [first, second, third] = colors;
console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// Skip elements
const [firstColor, , thirdColor] = colors;
console.log(firstColor); // "red"
console.log(thirdColor); // "blue"

// Default values
const [primary, secondary = "yellow"] = ["red"];
console.log(primary); // "red"
console.log(secondary); // "yellow"

// Rest operator
const [first, ...rest] = colors;
console.log(first); // "red"
console.log(rest); // ["green", "blue"]

// Swap variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

### Object Destructuring
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

// Basic destructuring
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 30

// Rename variables
const { name: personName, age: personAge } = person;
console.log(personName); // "John"
console.log(personAge); // 30

// Default values
const { name, age, salary = 50000 } = person;
console.log(salary); // 50000

// Rest operator
const { name, ...otherInfo } = person;
console.log(name); // "John"
console.log(otherInfo); // { age: 30, city: "New York", country: "USA" }

// Nested destructuring
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

const { name, address: { city } } = user;
console.log(name); // "John"
console.log(city); // "New York"
```

## 📤 Spread Operator

### Array Spread
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Add elements
const withExtra = [...arr1, 4, 5];
console.log(withExtra); // [1, 2, 3, 4, 5]

// Copy array
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Convert string to array
const chars = [..."hello"];
console.log(chars); // ["h", "e", "l", "l", "o"]
```

### Object Spread
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combine objects
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const overridden = { ...obj1, b: 10 };
console.log(overridden); // { a: 1, b: 10 }

// Copy object
const copy = { ...obj1 };
console.log(copy); // { a: 1, b: 2 }

// Add new properties
const withNew = { ...obj1, e: 5 };
console.log(withNew); // { a: 1, b: 2, e: 5 }
```

## 🏗️ Object-Oriented Programming

### Constructor Functions
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.greet()); // "Hello, I'm John"
console.log(person2.greet()); // "Hello, I'm Jane"
```

### ES6 Classes
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
    
    setAge(newAge) {
        this.age = newAge;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        return `${this.name} is studying`;
    }
}

const student = new Student("John", 20, "A");
console.log(student.greet()); // "Hello, I'm John"
console.log(student.study()); // "John is studying"
```

## 🎯 Advanced Array Operations

### Multidimensional Arrays
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access elements
console.log(matrix[1][2]); // 6

// Iterate through matrix
matrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        console.log(`[${rowIndex}][${colIndex}]: ${cell}`);
    });
});

// Flatten matrix
const flattened = matrix.flat();
console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Array of Objects
```javascript
const users = [
    { id: 1, name: "John", age: 30, active: true },
    { id: 2, name: "Jane", age: 25, active: false },
    { id: 3, name: "Bob", age: 35, active: true }
];

// Filter active users
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// Get user names
const names = users.map(user => user.name);
console.log(names); // ["John", "Jane", "Bob"]

// Find user by ID
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: "Jane", age: 25, active: false }

// Sort by age
const sortedByAge = users.sort((a, b) => a.age - b.age);
console.log(sortedByAge);

// Group by active status
const grouped = users.reduce((acc, user) => {
    const key = user.active ? 'active' : 'inactive';
    acc[key] = acc[key] || [];
    acc[key].push(user);
    return acc;
}, {});
console.log(grouped);
```

## 🏃‍♂️ Practice Exercises

### Exercise 1: Object Manipulation
```javascript
// Create a car object with properties and methods
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
    mileage: 15000,
    
    start: function() {
        return "The car is starting...";
    },
    
    drive: function(miles) {
        this.mileage += miles;
        return `Drove ${miles} miles. Total mileage: ${this.mileage}`;
    },
    
    getInfo: function() {
        return `${this.year} ${this.make} ${this.model} (${this.color})`;
    }
};

console.log(car.getInfo());
console.log(car.start());
console.log(car.drive(100));
```

### Exercise 2: Array Operations
```javascript
// Create an array of products and perform operations
const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics" },
    { id: 2, name: "Book", price: 15, category: "Education" },
    { id: 3, name: "Phone", price: 699, category: "Electronics" },
    { id: 4, name: "Pen", price: 2, category: "Office" }
];

// Find all electronics
const electronics = products.filter(product => product.category === "Electronics");
console.log(electronics);

// Calculate total value
const totalValue = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalValue);

// Get average price
const averagePrice = totalValue / products.length;
console.log(averagePrice);

// Sort by price
const sortedByPrice = products.sort((a, b) => a.price - b.price);
console.log(sortedByPrice);
```

### Exercise 3: Destructuring and Spread
```javascript
// Create a user object and use destructuring
const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    hobbies: ["reading", "coding", "gaming"]
};

// Destructure user object
const { name, email, address: { city }, hobbies } = user;
console.log(name, email, city, hobbies);

// Create new user with spread
const newUser = {
    ...user,
    name: "Jane Doe",
    email: "jane@example.com"
};
console.log(newUser);

// Destructure array
const [firstHobby, ...otherHobbies] = hobbies;
console.log(firstHobby, otherHobbies);
```

## 🎯 Key Takeaways

1. **Objects are key-value pairs** - Use them to represent real-world entities
2. **Arrays are ordered collections** - Use them for lists and sequences
3. **Destructuring simplifies access** - Extract values easily from objects and arrays
4. **Spread operator is powerful** - Use it for copying and combining data
5. **Methods make objects interactive** - Add behavior to your data structures

## 📚 Next Steps

Now that you understand objects and arrays, let's learn about:
- [DOM Manipulation](./05-dom-manipulation.md)
- [Asynchronous JavaScript](./06-asynchronous-javascript.md)
- [ES6+ Features](./07-es6-features.md)

---

*Objects and arrays are the foundation of JavaScript data structures. Master them and you'll be able to handle any data manipulation task!*
