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

### 📦 Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB Atlas** (Database)
- **Mongoose** (ODM for MongoDB)
- **Morgan** (Logging)
- **CORS** (Cross-Origin Resource Sharing)

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
This application uses **MongoDB Atlas** for data storage.

#### 🔹 **1. Create a MongoDB Atlas Account**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a free account and start a new cluster.
3. In **Database Access**, create a new user with the role **Read & Write**.
4. In **Network Access**, add **0.0.0.0/0** to allow connections from anywhere.

#### 🔹 **2. Get Your Connection String**
1. Go to **Database > Connect > Connect Your Application**.
2. Copy the MongoDB URI, it should look like:
   ```
   mongodb+srv://your-username:your-password@cluster0.mongodb.net/phonebookApp?retryWrites=true&w=majority
   ```

#### 🔹 **3. Store MongoDB Credentials in `.env`**
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

## 📂 API Endpoints
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

## 🗄️ Working with MongoDB in the Terminal
📌 **To manually add or retrieve contacts, use `mongo.js`.**

### ➕ **Add a new contact from the terminal**
```sh
node mongo.js yourpassword "John Doe" "123-456789"
```

### 📞 **Retrieve all contacts**
```sh
node mongo.js yourpassword
```

---

## 📂 Project Structure
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
  - *Note: The backend is deployed on a free-tier plan, so there may be some delay when the server is cold. If there are no recent requests, the server may be temporarily inactive.*

---

## 🇹🇷 Telefon Rehberi API

### 📌 Giriş
Bu proje, bir telefon rehberi yönetmek için geliştirilen basit bir **RESTful API**'dir. API, kişileri listeleme, ekleme ve silme işlemlerini yapmanıza olanak tanır. Uygulama **Express.js** kullanılarak geliştirilmiş olup, **Morgan** ile HTTP istekleri loglanmakta ve **CORS** desteği ile çapraz kaynak erişimine izin vermektedir.

Bu proje, **Helsinki Üniversitesi Full Stack Open kursunun 3. Bölüm Egzersizleri** kapsamındadır.

---

## 🛠️ MongoDB Atlas Kurulumu ve Kullanımı
1️⃣ **[MongoDB Atlas](https://www.mongodb.com/atlas) hesabı açın.**  
2️⃣ **Ücretsiz bir veritabanı (Cluster) oluşturun.**  
3️⃣ **Database Access** kısmından bir kullanıcı oluşturun (**Read & Write yetkisi verin**).  
4️⃣ **Network Access** kısmına gidin ve **`0.0.0.0/0`** ekleyin.  
5️⃣ **Bağlantı URI’sini `.env` dosyanıza ekleyin:**  
   ```env
   MONGO_URI=mongodb+srv://fullstack:SeninŞifren@cluster0.mongodb.net/phonebookApp?retryWrites=true&w=majority
   ```

### 📞 **MongoDB Kullanımı**
- **Yeni kişi eklemek için:**
  ```sh
  node mongo.js SeninŞifren "Ahmet Yılmaz" "0532-4567890"
  ```
- **Kişileri listelemek için:**
  ```sh
  node mongo.js SeninŞifren
  ```

---

### 🌐 **Canlı Demo**
- **Frontend:** [Telefon Rehberi Uygulaması](https://fso-frontend-phonebook.netlify.app/) 🌍
- **Backend API:** [Telefon Rehberi Backend](https://phonebook-backend-77kw.onrender.com/api/persons) ⚡

---

💡 **Herhangi bir geri bildiriminiz varsa, paylaşabilirsiniz!** 🚀

