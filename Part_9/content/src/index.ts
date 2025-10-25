/**
 * TypeScript Fundamentals
 * Exercise 9.1-9.7: Core TypeScript concepts and features
 */

// Exercise 9.1: Basic TypeScript Setup
console.log('TypeScript Fundamentals - Part 9');

// Exercise 9.2: Variables and Data Types
let message: string = 'Hello TypeScript!';
let count: number = 42;
let isActive: boolean = true;

// Type inference
let inferredString = 'TypeScript infers this as string';
let inferredNumber = 100;

// Exercise 9.3: Functions and Scope
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const add = (a: number, b: number): number => {
  return a + b;
};

// Exercise 9.4: Objects and Arrays
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['Alice', 'Bob', 'Charlie'];

// Exercise 9.5: DOM Manipulation (for browser environments)
// Note: This would work in a browser environment
// const button = document.getElementById('myButton') as HTMLButtonElement;
// button.addEventListener('click', (event: MouseEvent) => {
//   console.log('Button clicked!');
// });

// Exercise 9.6: Asynchronous JavaScript
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Exercise 9.7: ES6+ Features
class Calculator {
  private value: number;

  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  add(num: number): Calculator {
    this.value += num;
    return this;
  }

  multiply(num: number): Calculator {
    this.value *= num;
    return this;
  }

  getValue(): number {
    return this.value;
  }
}

// Usage examples
console.log(greet('World'));
console.log(add(5, 3));
console.log(person);
console.log(numbers);
console.log(names);

const calc = new Calculator(10);
const result = calc.add(5).multiply(2).getValue();
console.log('Calculator result:', result);

// Async example
fetchData('https://api.example.com/data')
  .then(data => console.log('Fetched data:', data))
  .catch(error => console.error('Error:', error));

export { greet, add, Person, Calculator };
