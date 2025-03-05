 # GraphQL Library Project

## 📂 Project Structure
This project is a full-stack library application developed using GraphQL. The backend is built with Express and Apollo Server, while the frontend is developed with React and Apollo Client.

### 📂 Directory Structure
```
📦 graphql-library
├── 📂 backend       # Server-side (GraphQL API)
│   ├── 📂 models      # Mongoose data models
│   │   ├── author.js  # Author model definition
│   │   ├── book.js    # Book model definition
│   ├── 📂 resolvers   # GraphQL resolvers
│   │   ├── index.js   # Main resolver
│   │   ├── bookResolvers.js   # Resolvers for books
│   │   ├── authorResolvers.js # Resolvers for authors
│   ├── 📂 schema      # GraphQL schema definitions
│   │   ├── index.js   # Main schema management
│   │   ├── typeDefs.js # GraphQL type definitions
│   ├── 📂 utils       # Utility functions
│   │   ├── db.js      # MongoDB connection management
│   │   ├── auth.js    # Authentication logic
│   ├── .env          # Environment variables
│   ├── index.js      # Server entry point
│   ├── package.json  # Node.js dependencies
│   ├── README.md     # Backend documentation
│
├── 📂 frontend      # Client-side (React application)
│   ├── 📂 src       # React components
│   │   ├── 📂 components # UI components
│   │   │   ├── Authors.js     # Authors list component
│   │   │   ├── Books.js       # Books list component
│   │   │   ├── NewBook.js     # Add new book form
│   │   │   ├── Login.js       # Login screen
│   │   │   ├── GenreFilter.js # Book filtering by genre
│   │   │   ├── Navbar.js      # Navigation bar
│   │   ├── 📂 pages      # Page components
│   │   │   ├── Home.js         # Home page
│   │   │   ├── AuthorsPage.js  # Authors page
│   │   │   ├── BooksPage.js    # Books page
│   │   │   ├── LoginPage.js    # Login page
│   │   ├── 📂 graphql    # GraphQL queries and mutations
│   │   │   ├── queries.js       # GraphQL queries
│   │   │   ├── mutations.js     # GraphQL mutations
│   │   │   ├── subscriptions.js # GraphQL subscriptions
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # React application entry point
│   ├── .env              # Environment variables
│   ├── package.json      # Node.js dependencies
│   ├── README.md         # Frontend documentation
│
├── .gitignore           # Git ignored files
├── README.md            # General project documentation
```

---
## 📌 Project Description
This project implements a library management system using GraphQL API. Users can view book listings, check author details, add new books, and update author birth years. Authentication is integrated to secure operations requiring user permissions.

### 🔹 **Backend Features**
- GraphQL API built with Apollo Server and Express.
- Database management using MongoDB and Mongoose.
- User authentication and JWT-based session management.
- Real-time updates using subscriptions (`bookAdded`).

### 🔹 **Frontend Features**
- UI developed with React and Apollo Client.
- Page navigation using React Router.
- User login and logout functionalities.
- Book filtering by genre and personalized recommendations.
- Optimized GraphQL queries for efficient client-side rendering.

---
### 🚀 **Setup Instructions**
#### **1️⃣ Backend Setup**
1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Set up environment variables:** Create a `.env` file and configure MongoDB connection.
3. **Start the server:**
   ```sh
   npm start
   ```

#### **2️⃣ Frontend Setup**
1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Configure environment variables:** Create a `.env` file and set the API endpoint.
3. **Start the React application:**
   ```sh
   npm start
   ```

#### **3️⃣ Testing GraphQL API**
To test GraphQL queries and mutations, use one of the following clients:
- **Apollo Sandbox**
- **GraphQL Playground**
- **Postman**

---
This project is a complete full-stack GraphQL library application solution for Full Stack Open course exercises 8.1 - 8.26. 📚✨