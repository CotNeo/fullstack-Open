# DOM Manipulation

## 🎯 Learning Objectives
- Understand the Document Object Model (DOM)
- Learn to select and manipulate DOM elements
- Master event handling and event listeners
- Practice creating dynamic web content
- Understand DOM traversal and manipulation methods

## 🌐 What is the DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

### DOM Tree Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
    <div id="container">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</body>
</html>
```

## 🔍 Selecting DOM Elements

### Basic Selection Methods
```javascript
// Get element by ID
const header = document.getElementById("header");
console.log(header);

// Get elements by class name
const buttons = document.getElementsByClassName("btn");
console.log(buttons); // HTMLCollection

// Get elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // HTMLCollection

// Query selector (modern approach)
const firstButton = document.querySelector(".btn");
const allButtons = document.querySelectorAll(".btn");
const container = document.querySelector("#container");
```

### Advanced Selection
```javascript
// Select by attribute
const links = document.querySelectorAll("a[href]");
const externalLinks = document.querySelectorAll("a[href^='http']");

// Select by pseudo-class
const firstChild = document.querySelector("li:first-child");
const lastChild = document.querySelector("li:last-child");
const nthChild = document.querySelector("li:nth-child(2)");

// Select by relationship
const parent = document.querySelector("#container");
const children = parent.querySelectorAll("li");
const nextSibling = document.querySelector("h1 + p");
const allSiblings = document.querySelectorAll("h1 ~ p");
```

## 🎨 Manipulating Element Content

### Text Content
```javascript
// Get text content
const paragraph = document.querySelector("p");
console.log(paragraph.textContent); // "This is a paragraph"

// Set text content
paragraph.textContent = "New paragraph text";

// Inner HTML (be careful with XSS)
paragraph.innerHTML = "<strong>Bold text</strong> and <em>italic text</em>";

// Inner text (ignores HTML tags)
paragraph.innerText = "This is plain text";
```

### Attributes
```javascript
// Get attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.href); // Direct property access

// Set attributes
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");

// Remove attributes
link.removeAttribute("target");

// Check if attribute exists
if (link.hasAttribute("href")) {
    console.log("Link has href attribute");
}

// Toggle attributes
link.toggleAttribute("disabled");
```

### Classes
```javascript
const element = document.querySelector(".my-element");

// Add class
element.classList.add("active");
element.classList.add("highlight", "selected");

// Remove class
element.classList.remove("inactive");
element.classList.remove("highlight", "selected");

// Toggle class
element.classList.toggle("active");

// Check if class exists
if (element.classList.contains("active")) {
    console.log("Element has active class");
}

// Replace class
element.classList.replace("old-class", "new-class");
```

## 🎨 Styling Elements

### Inline Styles
```javascript
const element = document.querySelector("#myElement");

// Set style properties
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "16px";
element.style.margin = "10px";

// Get computed styles
const computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color);
console.log(computedStyle.backgroundColor);
```

### CSS Classes
```javascript
// Add/remove CSS classes
element.classList.add("highlight");
element.classList.remove("inactive");

// Toggle classes
element.classList.toggle("active");

// Multiple classes
element.classList.add("btn", "btn-primary", "btn-lg");
```

## 🏗️ Creating and Modifying Elements

### Creating Elements
```javascript
// Create new element
const newDiv = document.createElement("div");
newDiv.textContent = "New div element";
newDiv.className = "new-element";
newDiv.id = "newDiv";

// Create element with attributes
const newLink = document.createElement("a");
newLink.href = "https://example.com";
newLink.textContent = "Visit Example";
newLink.target = "_blank";
```

### Adding Elements to DOM
```javascript
// Append to parent
const container = document.querySelector("#container");
container.appendChild(newDiv);

// Insert before existing element
const existingElement = document.querySelector("#existing");
container.insertBefore(newDiv, existingElement);

// Insert at specific position
container.insertAdjacentElement("afterbegin", newDiv);
container.insertAdjacentElement("beforeend", newDiv);
container.insertAdjacentElement("afterend", newDiv);
container.insertAdjacentElement("beforebegin", newDiv);

// Insert HTML
container.insertAdjacentHTML("beforeend", "<p>New paragraph</p>");
```

### Removing Elements
```javascript
// Remove element
const elementToRemove = document.querySelector("#toRemove");
elementToRemove.remove();

// Remove from parent
const parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove);

// Remove all children
const container = document.querySelector("#container");
container.innerHTML = ""; // Quick way
while (container.firstChild) {
    container.removeChild(container.firstChild);
}
```

## 🎯 Event Handling

### Basic Event Listeners
```javascript
// Add event listener
const button = document.querySelector("#myButton");
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event.target);
});

// Remove event listener
function handleClick(event) {
    console.log("Button clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

### Common Event Types
```javascript
const element = document.querySelector("#myElement");

// Mouse events
element.addEventListener("click", handleClick);
element.addEventListener("dblclick", handleDoubleClick);
element.addEventListener("mousedown", handleMouseDown);
element.addEventListener("mouseup", handleMouseUp);
element.addEventListener("mouseover", handleMouseOver);
element.addEventListener("mouseout", handleMouseOut);
element.addEventListener("mousemove", handleMouseMove);

// Keyboard events
element.addEventListener("keydown", handleKeyDown);
element.addEventListener("keyup", handleKeyUp);
element.addEventListener("keypress", handleKeyPress);

// Form events
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

// Input events
const input = document.querySelector("input");
input.addEventListener("input", handleInput);
input.addEventListener("change", handleChange);
input.addEventListener("focus", handleFocus);
input.addEventListener("blur", handleBlur);
```

### Event Object
```javascript
function handleClick(event) {
    // Event properties
    console.log(event.type); // "click"
    console.log(event.target); // Element that triggered event
    console.log(event.currentTarget); // Element with event listener
    
    // Mouse position
    console.log(event.clientX, event.clientY); // Relative to viewport
    console.log(event.pageX, event.pageY); // Relative to document
    
    // Keyboard events
    console.log(event.key); // Key pressed
    console.log(event.code); // Physical key code
    console.log(event.ctrlKey); // Ctrl key pressed
    console.log(event.shiftKey); // Shift key pressed
    console.log(event.altKey); // Alt key pressed
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event propagation
    event.stopPropagation();
}
```

### Event Delegation
```javascript
// Instead of adding listeners to each item
const list = document.querySelector("#myList");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("List item clicked:", event.target.textContent);
    }
});

// Dynamic content
function addListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    // No need to add event listener - delegation handles it
}
```

## 🎨 Form Handling

### Form Validation
```javascript
const form = document.querySelector("#myForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let isValid = true;
    const errors = [];
    
    // Email validation
    if (!emailInput.value.includes("@")) {
        isValid = false;
        errors.push("Please enter a valid email");
    }
    
    // Password validation
    if (passwordInput.value.length < 6) {
        isValid = false;
        errors.push("Password must be at least 6 characters");
    }
    
    if (isValid) {
        console.log("Form is valid, submitting...");
        // Submit form
    } else {
        console.log("Form has errors:", errors);
        // Show errors to user
    }
});
```

### Input Handling
```javascript
const input = document.querySelector("#myInput");

// Real-time validation
input.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 3) {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "green";
    }
});

// Format input (e.g., phone number)
input.addEventListener("input", function(event) {
    let value = event.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    event.target.value = value;
});
```

## 🎯 DOM Traversal

### Parent and Child Relationships
```javascript
const element = document.querySelector("#myElement");

// Parent
const parent = element.parentNode;
const parentElement = element.parentElement;

// Children
const children = element.children; // HTMLCollection
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Siblings
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// All siblings
const siblings = Array.from(element.parentElement.children)
    .filter(child => child !== element);
```

### Finding Elements
```javascript
const container = document.querySelector("#container");

// Find within container
const button = container.querySelector("button");
const allButtons = container.querySelectorAll("button");

// Find by relationship
const nextButton = container.querySelector("button + button");
const allAfterFirst = container.querySelectorAll("button:not(:first-child)");
```

## 🎨 Dynamic Content Creation

### Creating a Todo List
```javascript
class TodoList {
    constructor(containerId) {
        this.container = document.querySelector(containerId);
        this.todos = [];
        this.init();
    }
    
    init() {
        this.render();
        this.addEventListeners();
    }
    
    addTodo(text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        this.todos.push(todo);
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        }
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.render();
    }
    
    render() {
        this.container.innerHTML = `
            <div class="todo-input">
                <input type="text" id="todoInput" placeholder="Add a new todo">
                <button id="addBtn">Add</button>
            </div>
            <ul class="todo-list">
                ${this.todos.map(todo => `
                    <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                        <span class="todo-text">${todo.text}</span>
                        <button class="toggle-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
                        <button class="delete-btn">Delete</button>
                    </li>
                `).join('')}
            </ul>
        `;
    }
    
    addEventListeners() {
        // Add todo
        document.getElementById('addBtn').addEventListener('click', () => {
            const input = document.getElementById('todoInput');
            if (input.value.trim()) {
                this.addTodo(input.value.trim());
                input.value = '';
            }
        });
        
        // Toggle and delete todos
        this.container.addEventListener('click', (event) => {
            if (event.target.classList.contains('toggle-btn')) {
                const todoId = parseInt(event.target.closest('.todo-item').dataset.id);
                this.toggleTodo(todoId);
            }
            
            if (event.target.classList.contains('delete-btn')) {
                const todoId = parseInt(event.target.closest('.todo-item').dataset.id);
                this.deleteTodo(todoId);
            }
        });
    }
}

// Usage
const todoList = new TodoList('#todoContainer');
```

## 🏃‍♂️ Practice Exercises

### Exercise 1: Basic DOM Manipulation
```javascript
// Create a simple counter
let count = 0;
const counter = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});
```

### Exercise 2: Dynamic List
```javascript
// Create a dynamic shopping list
const shoppingList = document.querySelector('#shoppingList');
const itemInput = document.querySelector('#itemInput');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${itemText}</span>
            <button class="remove-btn">Remove</button>
        `;
        
        // Add remove functionality
        li.querySelector('.remove-btn').addEventListener('click', () => {
            li.remove();
        });
        
        shoppingList.appendChild(li);
        itemInput.value = '';
    }
});
```

### Exercise 3: Image Gallery
```javascript
// Create an image gallery with thumbnails
const gallery = document.querySelector('#gallery');
const mainImage = document.querySelector('#mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');
        
        // Update main image
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
    });
});
```

## 🎯 Key Takeaways

1. **DOM is the interface** - It connects JavaScript to HTML elements
2. **Select elements efficiently** - Use `querySelector` and `querySelectorAll`
3. **Event delegation is powerful** - Handle events on dynamic content
4. **Manipulate content safely** - Be aware of XSS when using `innerHTML`
5. **Practice makes perfect** - Build real projects to master DOM manipulation

## 📚 Next Steps

Now that you understand DOM manipulation, let's learn about:
- [Asynchronous JavaScript](./06-asynchronous-javascript.md)
- [ES6+ Features](./07-es6-features.md)
- [Practical Examples](./08-practical-examples.md)

---

*DOM manipulation is the key to creating interactive web pages. Master it and you'll be able to build dynamic, engaging user interfaces!*
