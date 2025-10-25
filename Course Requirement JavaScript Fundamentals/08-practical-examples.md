# Practical Examples

## 🎯 Learning Objectives
- Apply JavaScript concepts in real-world scenarios
- Build practical applications and utilities
- Practice problem-solving with JavaScript
- Learn best practices and coding patterns
- Create reusable code components

## 🏗️ Project 1: Todo List Application

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .todo-input { display: flex; gap: 10px; margin-bottom: 20px; }
        .todo-input input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        .todo-input button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .todo-item { display: flex; align-items: center; gap: 10px; padding: 10px; border: 1px solid #ddd; margin-bottom: 10px; border-radius: 4px; }
        .todo-item.completed { background: #f8f9fa; text-decoration: line-through; }
        .todo-item input[type="checkbox"] { margin-right: 10px; }
        .todo-item button { background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Todo List</h1>
    <div class="todo-input">
        <input type="text" id="todoInput" placeholder="Add a new todo">
        <button id="addBtn">Add</button>
    </div>
    <ul id="todoList"></ul>
    
    <script src="todo.js"></script>
</body>
</html>
```

### JavaScript Implementation
```javascript
class TodoList {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.init();
    }
    
    init() {
        this.render();
        this.addEventListeners();
    }
    
    addTodo(text) {
        if (text.trim()) {
            const todo = {
                id: Date.now(),
                text: text.trim(),
                completed: false,
                createdAt: new Date().toISOString()
            };
            this.todos.push(todo);
            this.saveToStorage();
            this.render();
        }
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
    }
    
    render() {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = this.todos.map(todo => `
            <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${todo.text}</span>
                <button class="delete-btn">Delete</button>
            </li>
        `).join('');
    }
    
    addEventListeners() {
        // Add todo
        document.getElementById('addBtn').addEventListener('click', () => {
            const input = document.getElementById('todoInput');
            this.addTodo(input.value);
            input.value = '';
        });
        
        // Enter key to add todo
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo(e.target.value);
                e.target.value = '';
            }
        });
        
        // Toggle and delete todos
        document.getElementById('todoList').addEventListener('click', (e) => {
            const todoItem = e.target.closest('.todo-item');
            const todoId = parseInt(todoItem.dataset.id);
            
            if (e.target.type === 'checkbox') {
                this.toggleTodo(todoId);
            }
            
            if (e.target.classList.contains('delete-btn')) {
                this.deleteTodo(todoId);
            }
        });
    }
    
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

// Initialize the app
const todoList = new TodoList();
```

## 🏗️ Project 2: Weather App

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; }
        .weather-card { background: linear-gradient(135deg, #74b9ff, #0984e3); color: white; padding: 20px; border-radius: 10px; text-align: center; }
        .search-box { display: flex; gap: 10px; margin-bottom: 20px; }
        .search-box input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        .search-box button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .weather-info { margin-top: 20px; }
        .temperature { font-size: 3em; font-weight: bold; }
        .description { font-size: 1.2em; margin: 10px 0; }
        .details { display: flex; justify-content: space-around; margin-top: 20px; }
        .detail { text-align: center; }
        .detail-value { font-size: 1.5em; font-weight: bold; }
        .error { color: #e74c3c; text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="search-box">
        <input type="text" id="cityInput" placeholder="Enter city name">
        <button id="searchBtn">Search</button>
    </div>
    
    <div id="weatherCard" class="weather-card" style="display: none;">
        <h2 id="cityName"></h2>
        <div class="weather-info">
            <div class="temperature" id="temperature"></div>
            <div class="description" id="description"></div>
            <div class="details">
                <div class="detail">
                    <div class="detail-value" id="humidity"></div>
                    <div>Humidity</div>
                </div>
                <div class="detail">
                    <div class="detail-value" id="windSpeed"></div>
                    <div>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="error" class="error" style="display: none;"></div>
    
    <script src="weather.js"></script>
</body>
</html>
```

### JavaScript Implementation
```javascript
class WeatherApp {
    constructor() {
        this.apiKey = 'YOUR_API_KEY'; // Replace with actual API key
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.init();
    }
    
    init() {
        this.addEventListeners();
    }
    
    async fetchWeather(city) {
        try {
            const response = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather:', error);
            throw error;
        }
    }
    
    displayWeather(weatherData) {
        const weatherCard = document.getElementById('weatherCard');
        const errorDiv = document.getElementById('error');
        
        // Hide error, show weather card
        errorDiv.style.display = 'none';
        weatherCard.style.display = 'block';
        
        // Update weather information
        document.getElementById('cityName').textContent = weatherData.name;
        document.getElementById('temperature').textContent = `${Math.round(weatherData.main.temp)}°C`;
        document.getElementById('description').textContent = weatherData.weather[0].description;
        document.getElementById('humidity').textContent = `${weatherData.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `${weatherData.wind.speed} m/s`;
    }
    
    displayError(message) {
        const weatherCard = document.getElementById('weatherCard');
        const errorDiv = document.getElementById('error');
        
        // Hide weather card, show error
        weatherCard.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = message;
    }
    
    async searchWeather(city) {
        if (!city.trim()) {
            this.displayError('Please enter a city name');
            return;
        }
        
        try {
            const weatherData = await this.fetchWeather(city);
            this.displayWeather(weatherData);
        } catch (error) {
            this.displayError('City not found. Please try again.');
        }
    }
    
    addEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const cityInput = document.getElementById('cityInput');
        
        searchBtn.addEventListener('click', () => {
            const city = cityInput.value.trim();
            this.searchWeather(city);
        });
        
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const city = cityInput.value.trim();
                this.searchWeather(city);
            }
        });
    }
}

// Initialize the app
const weatherApp = new WeatherApp();
```

## 🏗️ Project 3: Calculator

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f0f0f0; }
        .calculator { background: #333; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .display { background: #000; color: #fff; padding: 20px; text-align: right; font-size: 2em; margin-bottom: 10px; border-radius: 5px; min-height: 60px; }
        .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .btn { padding: 20px; font-size: 1.2em; border: none; border-radius: 5px; cursor: pointer; background: #666; color: white; }
        .btn:hover { background: #777; }
        .btn.operator { background: #ff9500; }
        .btn.operator:hover { background: #ffad33; }
        .btn.clear { background: #a6a6a6; }
        .btn.clear:hover { background: #bfbfbf; }
        .btn.zero { grid-column: span 2; }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="btn clear" onclick="calculator.clear()">C</button>
            <button class="btn clear" onclick="calculator.clearEntry()">CE</button>
            <button class="btn operator" onclick="calculator.operator('/')">/</button>
            <button class="btn operator" onclick="calculator.operator('*')">×</button>
            
            <button class="btn" onclick="calculator.number('7')">7</button>
            <button class="btn" onclick="calculator.number('8')">8</button>
            <button class="btn" onclick="calculator.number('9')">9</button>
            <button class="btn operator" onclick="calculator.operator('-')">-</button>
            
            <button class="btn" onclick="calculator.number('4')">4</button>
            <button class="btn" onclick="calculator.number('5')">5</button>
            <button class="btn" onclick="calculator.number('6')">6</button>
            <button class="btn operator" onclick="calculator.operator('+')">+</button>
            
            <button class="btn" onclick="calculator.number('1')">1</button>
            <button class="btn" onclick="calculator.number('2')">2</button>
            <button class="btn" onclick="calculator.number('3')">3</button>
            <button class="btn operator" onclick="calculator.equals()" rowspan="2">=</button>
            
            <button class="btn zero" onclick="calculator.number('0')">0</button>
            <button class="btn" onclick="calculator.decimal()">.</button>
        </div>
    </div>
    
    <script src="calculator.js"></script>
</body>
</html>
```

### JavaScript Implementation
```javascript
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForOperand = false;
    }
    
    updateDisplay() {
        this.display.textContent = this.currentInput;
    }
    
    number(num) {
        if (this.waitingForOperand) {
            this.currentInput = num;
            this.waitingForOperand = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }
    
    decimal() {
        if (this.waitingForOperand) {
            this.currentInput = '0.';
            this.waitingForOperand = false;
        } else if (this.currentInput.indexOf('.') === -1) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }
    
    operator(nextOperator) {
        const inputValue = parseFloat(this.currentInput);
        
        if (this.previousInput === null) {
            this.previousInput = inputValue;
        } else if (this.operator) {
            const currentValue = this.previousInput || 0;
            const newValue = this.calculate(currentValue, inputValue, this.operator);
            
            this.currentInput = String(newValue);
            this.previousInput = newValue;
        }
        
        this.waitingForOperand = true;
        this.operator = nextOperator;
        this.updateDisplay();
    }
    
    calculate(firstValue, secondValue, operator) {
        switch (operator) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '*':
                return firstValue * secondValue;
            case '/':
                return firstValue / secondValue;
            default:
                return secondValue;
        }
    }
    
    equals() {
        const inputValue = parseFloat(this.currentInput);
        
        if (this.previousInput !== null && this.operator) {
            const newValue = this.calculate(this.previousInput, inputValue, this.operator);
            this.currentInput = String(newValue);
            this.previousInput = null;
            this.operator = null;
            this.waitingForOperand = true;
        }
        this.updateDisplay();
    }
    
    clear() {
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    }
    
    clearEntry() {
        this.currentInput = '0';
        this.updateDisplay();
    }
}

// Initialize the calculator
const calculator = new Calculator();
```

## 🏗️ Project 4: Image Gallery

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .gallery-item { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
        .gallery-item:hover { transform: scale(1.05); }
        .gallery-item img { width: 100%; height: 200px; object-fit: cover; }
        .gallery-item-info { padding: 15px; }
        .gallery-item-title { font-weight: bold; margin-bottom: 5px; }
        .gallery-item-description { color: #666; font-size: 0.9em; }
        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; }
        .modal-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 90%; max-height: 90%; }
        .modal img { max-width: 100%; max-height: 100%; border-radius: 8px; }
        .modal-close { position: absolute; top: 20px; right: 30px; color: white; font-size: 30px; cursor: pointer; }
        .search-box { margin-bottom: 20px; }
        .search-box input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; }
    </style>
</head>
<body>
    <div class="search-box">
        <input type="text" id="searchInput" placeholder="Search images...">
    </div>
    
    <div class="gallery" id="gallery"></div>
    
    <div class="modal" id="modal">
        <span class="modal-close" id="modalClose">&times;</span>
        <div class="modal-content">
            <img id="modalImage" src="" alt="">
        </div>
    </div>
    
    <script src="gallery.js"></script>
</body>
</html>
```

### JavaScript Implementation
```javascript
class ImageGallery {
    constructor() {
        this.images = [
            { id: 1, title: 'Mountain View', description: 'Beautiful mountain landscape', url: 'https://picsum.photos/400/300?random=1' },
            { id: 2, title: 'Ocean Sunset', description: 'Stunning sunset over the ocean', url: 'https://picsum.photos/400/300?random=2' },
            { id: 3, title: 'Forest Path', description: 'Peaceful forest walking path', url: 'https://picsum.photos/400/300?random=3' },
            { id: 4, title: 'City Skyline', description: 'Modern city skyline at night', url: 'https://picsum.photos/400/300?random=4' },
            { id: 5, title: 'Flower Garden', description: 'Colorful flower garden', url: 'https://picsum.photos/400/300?random=5' },
            { id: 6, title: 'Desert Dunes', description: 'Vast desert sand dunes', url: 'https://picsum.photos/400/300?random=6' }
        ];
        this.filteredImages = [...this.images];
        this.init();
    }
    
    init() {
        this.render();
        this.addEventListeners();
    }
    
    render() {
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = this.filteredImages.map(image => `
            <div class="gallery-item" data-id="${image.id}">
                <img src="${image.url}" alt="${image.title}" loading="lazy">
                <div class="gallery-item-info">
                    <div class="gallery-item-title">${image.title}</div>
                    <div class="gallery-item-description">${image.description}</div>
                </div>
            </div>
        `).join('');
    }
    
    filterImages(searchTerm) {
        this.filteredImages = this.images.filter(image => 
            image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.render();
    }
    
    openModal(imageId) {
        const image = this.images.find(img => img.id === imageId);
        if (image) {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modalImage');
            modalImage.src = image.url;
            modalImage.alt = image.title;
            modal.style.display = 'block';
        }
    }
    
    closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }
    
    addEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.filterImages(e.target.value);
        });
        
        // Gallery item clicks
        const gallery = document.getElementById('gallery');
        gallery.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const imageId = parseInt(galleryItem.dataset.id);
                this.openModal(imageId);
            }
        });
        
        // Modal close
        const modalClose = document.getElementById('modalClose');
        modalClose.addEventListener('click', () => {
            this.closeModal();
        });
        
        // Close modal when clicking outside
        const modal = document.getElementById('modal');
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
}

// Initialize the gallery
const gallery = new ImageGallery();
```

## 🏗️ Project 5: Form Validation

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; }
        .form-group input.error, .form-group select.error, .form-group textarea.error { border-color: #e74c3c; }
        .error-message { color: #e74c3c; font-size: 14px; margin-top: 5px; }
        .success-message { color: #27ae60; font-size: 14px; margin-top: 5px; }
        .submit-btn { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
        .submit-btn:hover { background: #0056b3; }
        .submit-btn:disabled { background: #ccc; cursor: not-allowed; }
    </style>
</head>
<body>
    <h1>User Registration Form</h1>
    <form id="registrationForm">
        <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required>
            <div class="error-message" id="firstNameError"></div>
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required>
            <div class="error-message" id="lastNameError"></div>
        </div>
        
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required>
            <div class="error-message" id="emailError"></div>
        </div>
        
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone">
            <div class="error-message" id="phoneError"></div>
        </div>
        
        <div class="form-group">
            <label for="password">Password *</label>
            <input type="password" id="password" name="password" required>
            <div class="error-message" id="passwordError"></div>
        </div>
        
        <div class="form-group">
            <label for="confirmPassword">Confirm Password *</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <div class="error-message" id="confirmPasswordError"></div>
        </div>
        
        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" min="13" max="120">
            <div class="error-message" id="ageError"></div>
        </div>
        
        <div class="form-group">
            <label for="country">Country</label>
            <select id="country" name="country">
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
            </select>
            <div class="error-message" id="countryError"></div>
        </div>
        
        <div class="form-group">
            <label for="bio">Bio</label>
            <textarea id="bio" name="bio" rows="4" maxlength="500"></textarea>
            <div class="error-message" id="bioError"></div>
        </div>
        
        <button type="submit" class="submit-btn" id="submitBtn">Register</button>
    </form>
    
    <script src="form-validation.js"></script>
</body>
</html>
```

### JavaScript Implementation
```javascript
class FormValidator {
    constructor() {
        this.form = document.getElementById('registrationForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.init();
    }
    
    init() {
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearError(input);
            });
        });
    }
    
    validateForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        let isValid = true;
        
        // Clear all errors
        this.clearAllErrors();
        
        // Validate required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
        requiredFields.forEach(field => {
            if (!this.validateField(document.getElementById(field))) {
                isValid = false;
            }
        });
        
        // Validate optional fields
        if (data.phone && !this.validateField(document.getElementById('phone'))) {
            isValid = false;
        }
        
        if (data.age && !this.validateField(document.getElementById('age'))) {
            isValid = false;
        }
        
        if (data.bio && !this.validateField(document.getElementById('bio'))) {
            isValid = false;
        }
        
        if (isValid) {
            this.showSuccess('Form submitted successfully!');
            this.form.reset();
        }
    }
    
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = `${this.getFieldLabel(fieldName)} is required`;
            isValid = false;
        }
        
        // Specific field validations
        if (value && isValid) {
            switch (fieldName) {
                case 'firstName':
                case 'lastName':
                    if (value.length < 2) {
                        errorMessage = 'Must be at least 2 characters long';
                        isValid = false;
                    }
                    break;
                    
                case 'email':
                    if (!this.isValidEmail(value)) {
                        errorMessage = 'Please enter a valid email address';
                        isValid = false;
                    }
                    break;
                    
                case 'phone':
                    if (!this.isValidPhone(value)) {
                        errorMessage = 'Please enter a valid phone number';
                        isValid = false;
                    }
                    break;
                    
                case 'password':
                    if (value.length < 8) {
                        errorMessage = 'Password must be at least 8 characters long';
                        isValid = false;
                    } else if (!this.isValidPassword(value)) {
                        errorMessage = 'Password must contain at least one letter and one number';
                        isValid = false;
                    }
                    break;
                    
                case 'confirmPassword':
                    const password = document.getElementById('password').value;
                    if (value !== password) {
                        errorMessage = 'Passwords do not match';
                        isValid = false;
                    }
                    break;
                    
                case 'age':
                    const age = parseInt(value);
                    if (age < 13 || age > 120) {
                        errorMessage = 'Age must be between 13 and 120';
                        isValid = false;
                    }
                    break;
                    
                case 'bio':
                    if (value.length > 500) {
                        errorMessage = 'Bio must be less than 500 characters';
                        isValid = false;
                    }
                    break;
            }
        }
        
        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }
        
        return isValid;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
    
    isValidPassword(password) {
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        return hasLetter && hasNumber;
    }
    
    getFieldLabel(fieldName) {
        const labels = {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            phone: 'Phone Number',
            password: 'Password',
            confirmPassword: 'Confirm Password',
            age: 'Age',
            country: 'Country',
            bio: 'Bio'
        };
        return labels[fieldName] || fieldName;
    }
    
    showError(field, message) {
        field.classList.add('error');
        const errorElement = document.getElementById(`${field.name}Error`);
        errorElement.textContent = message;
    }
    
    clearError(field) {
        field.classList.remove('error');
        const errorElement = document.getElementById(`${field.name}Error`);
        errorElement.textContent = '';
    }
    
    clearAllErrors() {
        const errorElements = this.form.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        const errorFields = this.form.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
    }
    
    showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.textAlign = 'center';
        successDiv.style.marginTop = '20px';
        successDiv.style.padding = '10px';
        successDiv.style.background = '#d4edda';
        successDiv.style.border = '1px solid #c3e6cb';
        successDiv.style.borderRadius = '4px';
        
        this.form.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// Initialize the form validator
const formValidator = new FormValidator();
```

## 🎯 Key Takeaways

1. **Practice makes perfect** - Build real projects to master JavaScript
2. **Start simple** - Begin with basic functionality and add features gradually
3. **Use modern features** - Apply ES6+ features for cleaner code
4. **Handle errors gracefully** - Always validate input and handle errors
5. **Make it user-friendly** - Focus on user experience and interface design

## 📚 Next Steps

Now that you've seen practical examples, let's practice with:
- [Exercises and Projects](./09-exercises-projects.md)

---

*These practical examples demonstrate real-world JavaScript applications. Use them as inspiration for your own projects!*
