# Client: Frontend Development with React + TypeScript

This directory contains frontend development exercises and the Patientor application.

## 📁 Structure

```
client/
├── basic-exercises/    # Basic React with TypeScript
├── advanced-exercises/ # Advanced React patterns
├── patientor-frontend/ # Complete Patientor application
└── components/         # Reusable React components
```

## 🎯 Learning Objectives

- React with TypeScript
- Component architecture
- State management
- Form handling
- API integration
- Type-safe frontend development

## 📚 Exercises

### Basic React (9.15-9.16)
- React component typing
- Props interfaces
- Discriminated unions
- Type narrowing

### Advanced React (9.17-9.20)
- State management
- API integration
- Form handling
- Error handling

### Patientor Frontend (9.21-9.30)
- Complete medical records application
- Patient management
- Medical entries
- Diagnosis integration
- Full-stack integration

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

### Patientor Frontend
```bash
cd patientor-frontend
npm install
npm run dev
```

## 🛠️ Technologies

- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Material-UI**: Component library
- **Axios**: HTTP client

## 📖 Features

### Basic Features
- Component typing
- Props interfaces
- State management
- Event handling

### Advanced Features
- Discriminated unions
- Type narrowing
- API integration
- Form validation

### Patientor Features
- Patient management
- Medical entries
- Diagnosis codes
- Full-stack integration

## 🔧 Development

### Component Architecture
```typescript
interface ComponentProps {
  data: DataType;
  onAction: (value: string) => void;
}

const Component = (props: ComponentProps) => {
  // Component implementation
};
```

### State Management
```typescript
const [state, setState] = useState<StateType>(initialValue);
```

### API Integration
```typescript
useEffect(() => {
  apiCall().then(data => setData(data));
}, []);
```

## 📝 Documentation

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Material-UI Documentation](https://mui.com/)
