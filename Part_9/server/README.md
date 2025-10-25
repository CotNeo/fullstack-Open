# Server: Backend Development with TypeScript

This directory contains backend development exercises and the Patientor API.

## 📁 Structure

```
server/
├── basic-exercises/    # Basic TypeScript backend exercises
├── advanced-exercises/ # Advanced backend with Express
├── patientor-backend/ # Complete Patientor API
└── utils/             # Backend utilities and helpers
```

## 🎯 Learning Objectives

- Express.js with TypeScript
- API development
- Schema validation
- Error handling
- Database integration
- Type-safe backend development

## 📚 Exercises

### Basic Backend (9.8-9.14)
- Express server setup
- API endpoint development
- TypeScript configuration
- Error handling
- Validation

### Advanced Backend (9.15-9.22)
- Patientor API development
- Complex data structures
- Schema validation with Zod
- Middleware development
- Type-safe APIs

### Patientor Backend (9.23-9.30)
- Complete medical records API
- Patient management
- Medical entries
- Diagnosis codes
- Full CRUD operations

## 🚀 Getting Started

### Basic Exercises
```bash
cd basic-exercises
npm install
npm run dev
```

### Advanced Exercises
```bash
cd advanced-exercises
npm install
npm run dev
```

### Patientor Backend
```bash
cd patientor-backend
npm install
npm run dev
```

## 🛠️ Technologies

- **TypeScript**: Type-safe JavaScript
- **Express.js**: Web framework
- **Zod**: Schema validation
- **ESLint**: Code quality
- **Node.js**: Runtime environment

## 📖 API Endpoints

### Basic API
- `GET /ping` - Health check
- `GET /api/ping` - API health check

### Advanced API
- `GET /api/diagnoses` - Get all diagnoses
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Add new patient

### Patientor API
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients/:id/entries` - Add entry to patient
- Full CRUD operations for patients and entries

## 🔧 Features

- **Type Safety**: End-to-end type safety
- **Validation**: Comprehensive input validation
- **Error Handling**: Robust error management
- **API Documentation**: Clear endpoint documentation
- **Testing**: Unit and integration tests

## 📝 Documentation

- [Express with TypeScript](https://expressjs.com/en/guide/typescript.html)
- [Zod Documentation](https://zod.dev/)
- [Node.js TypeScript](https://nodejs.org/en/docs/guides/typescript/)
- [API Design Best Practices](https://restfulapi.net/)
