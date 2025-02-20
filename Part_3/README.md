# Phonebook API 🚀

## 🌍 English

### 📌 Introduction
This is a simple RESTful API for managing a phonebook. The API allows users to retrieve, add, and delete contacts. The application is built using **Express.js** with logging provided by **Morgan** and CORS enabled for cross-origin requests.

This project is part of the **University of Helsinki's Full Stack Open course (Part 3 Exercises)**.

### 🚀 Features
- List all contacts
- Get details of a single contact
- Delete a contact
- Add a new contact
- Log HTTP requests
- Handles unknown endpoints
- **MongoDB as database (hosted on MongoDB Atlas)**
- **Data validation using Mongoose**
- **Code linting with ESLint**

### 📺 Validation and Data Integrity
This API includes **Mongoose validation** to ensure data integrity:
- **Name must be at least 3 characters long**
- **Phone number must follow the format:** `XX-XXXXXXX` or `XXX-XXXXXXXX`
- If validation fails, an appropriate error message is returned.

### 📺 Code Quality with ESLint
- The project uses **ESLint** for static code analysis.
- Predefined style rules enforce clean and consistent code.
- To check for linting issues, use:
  ```sh
  npm run lint
  ```
- To automatically fix linting errors:
  ```sh
  npx eslint . --fix
  ```

### 📺 Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB Atlas** (Database)
- **Mongoose** (ODM for MongoDB)
- **Morgan** (Logging)
- **CORS** (Cross-Origin Resource Sharing)
- **ESLint** (Code Quality and Linting)

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the repository
```sh
$ git clone https://github.com/CotNeo/fullstack-Open.git
$ cd fullstack-Open
```

### 2️⃣ Install dependencies
```sh
$ npm install
```

### 3️⃣ Configure MongoDB Atlas (Database Setup)

#### 👉 **1. Create a MongoDB Atlas Account**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a free account and start a new cluster.
3. In **Database Access**, create a new user with the role **Read & Write**.
4. In **Network Access**, add **0.0.0.0/0** to allow connections from anywhere.

#### 👉 **2. Get Your Connection String**
1. Go to **Database > Connect > Connect Your Application**.
2. Copy the MongoDB URI, it should look like:
   ```
   mongodb+srv://your-username:your-password@cluster0.mongodb.net/phonebookApp?retryWrites=true&w=majority
   ```

#### 👉 **3. Store MongoDB Credentials in `.env`**
1. **Create a `.env` file** in the root directory.
2. **Paste the following line into the `.env` file:**
   ```env
   MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/phonebookApp?retryWrites=true&w=majority
   ```
3. **Make sure `.env` is added to `.gitignore` to keep credentials safe.**

### 4️⃣ Start the server
```sh
$ npm start
```
Or, run in development mode with **nodemon**:
```sh
$ npm run dev
```

---

## 📚 API Endpoints
| Method | Endpoint           | Description                        |
|--------|-------------------|------------------------------------|
| GET    | `/api/persons`    | Get all contacts                  |
| GET    | `/api/persons/:id` | Get a single contact by ID        |
| DELETE | `/api/persons/:id` | Delete a contact by ID            |
| POST   | `/api/persons`    | Add a new contact                 |
| POST   | `/api/persons/bulk` | Add multiple contacts at once    |
| PUT    | `/api/persons/:id` | Update a contact's number         |
| GET    | `/info`           | Get total contact count & time    |

---

## 📚 Project Structure
```
Phonebook-Backend/
│── package.json         # Project dependencies
│── package-lock.json    # Dependency lock file
│── index.js             # Main application file
│── .gitignore           # Ignoring unnecessary files
│── .env                 # Environment variables (not pushed to GitHub)
├───models/
│   ├── person.js        # MongoDB Mongoose Schema
├───node_modules/        # Installed dependencies
```

---

## 🌐 Live Demo
- **Frontend:** [Phonebook App](https://fso-frontend-phonebook.netlify.app/) 🌍
- **Backend API:** [Phonebook Backend](https://phonebook-backend-77kw.onrender.com/api/persons) ⚡

---

## 🇹🇷 Telefon Rehberi API

### 📌 Giriş
Bu proje, bir telefon rehberi yönetmek için geliştirilen basit bir **RESTful API**'dir. API, kişileri listeleme, ekleme ve silme işlemlerini yapmanıza olanak tanır. Uygulama **Express.js** kullanılarak geliştirilmiş olup, **Morgan** ile HTTP istekleri loglanmakta ve **CORS** desteği ile çapraz kaynak erişimine izin vermektedir.

Bu proje, **Helsinki Üniversitesi Full Stack Open kursunun 3. Bölüm Egzersizleri** kapsamındadır.

---

## 🔧 Validation & ESLint
- **Ad Soyad** minimum 3 karakter olmalıdır.
- **Telefon numarası** `XX-XXXXXXX` veya `XXX-XXXXXXXX` formatında olmalıdır.
- **Kod Kalitesi:** Proje, **ESLint** ile kod standartlarını koruyarak daha okunaklı hale getirilmiştir.
- **Kod format kontrolü:**
  ```sh
  npm run lint
  ```
- **Hataları otomatik düzeltmek için:**
  ```sh
  npx eslint . --fix
  ```

---

💡 **Herhangi bir geri bildiriminiz varsa, paylaşabilirsiniz!** 🚀

