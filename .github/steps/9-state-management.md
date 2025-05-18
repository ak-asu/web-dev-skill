# Chapter 9: State Management with Redux Toolkit

This chapter explores state management in your React portfolio site using Redux Toolkit, a powerful toolset designed to simplify Redux for managing complex or cross-cutting state. Tailored for beginners, it covers the essentials of Redux, the advantages of Redux Toolkit, and practical steps to implement it in your Vite + React + TypeScript project. You'll learn to manage global state for theme toggling and project data, replacing the Context API approach from Chapter 8 and enhancing scalability. The chapter includes code examples, best practices, and a brief look at state persistence, ensuring your portfolio site is robust and maintainable.

## :keyboard: Activity: Chapter Tasks

1. **Complete the Redux State Management Quiz**: Answer questions correctly in the `resources/Quiz9.md` file
2. **Implement Redux State Management**:
   - Install the required Redux packages
   - Create a Redux store configuration
   - Define at least one Redux slice (e.g., for theme or projects)
   - Connect Redux to your React application

## 1. Introduction to State Management in React

State management is crucial in React applications as they grow in complexity. Local state, managed with `useState` or `useReducer`, works well for individual components, but sharing state across multiple components often leads to "prop drilling," where data is passed through many layers, making code hard to maintain.

React's Context API, used in Chapter 8 for theme management, provides a global state solution, allowing components to access data without prop drilling. However, for applications with intricate state logic, frequent updates, or performance requirements, Redux offers a more robust alternative.

### Why Redux?
Redux centralizes the application's state in a single store, making it easier to manage, debug, and test. It enforces predictable state updates through actions and reducers, which is particularly valuable for complex applications. Key benefits include:
- **Centralized State**: All state lives in one place, simplifying access and updates.
- **Predictability**: Pure reducers ensure consistent state changes.
- **Debugging**: Redux DevTools enable time-travel debugging and state inspection.
- **Scalability**: Handles complex state interactions in large apps.

For your portfolio site, Redux can manage global state like theme preferences and project data, reducing reliance on props or Context for cross-component communication.

## 2. Understanding Redux

Redux is a predictable state container for JavaScript applications, commonly paired with React. It organizes state management around a few core concepts:
- **Store**: A single object holding the entire application state.
- **Actions**: Plain objects describing events, e.g., `{ type: 'TOGGLE_THEME' }`.
- **Reducers**: Pure functions that take the current state and an action, returning a new state.
- **Dispatch**: The method to send actions to the store, triggering state updates.

### Redux vs. Context API
While Context API is simpler for small apps, Redux excels in scenarios requiring:
- Frequent state updates across many components.
- Complex state logic, like asynchronous data fetching.
- Advanced debugging with tools like Redux DevTools.

For your portfolio, Redux is a learning opportunity to manage theme and project data, preparing you for larger projects where state complexity increases.

## 3. Redux Toolkit: A Modern Approach

Traditional Redux setup involves significant boilerplate, such as manually creating action types and creators. Redux Toolkit (RTK), the official recommended toolset, simplifies this process with utilities that reduce code and enforce best practices.

### Key Features of Redux Toolkit
- **configureStore**: Sets up the store with sensible defaults, including middleware like `redux-thunk`.
- **createSlice**: Combines reducers and action creators, generating them automatically.
- **Immer Integration**: Allows writing "mutative" code that is converted to immutable updates, simplifying reducer logic.
- **Built-in Addons**: Includes tools for async logic and selector optimization.

### Why Use Redux Toolkit?
- **Reduced Boilerplate**: Less code for actions and reducers.
- **Best Practices**: Encourages standard patterns, avoiding common pitfalls.
- **Efficiency**: Streamlines development, letting you focus on app logic.

For your portfolio, Redux Toolkit makes it easier to manage theme toggles and project data, aligning with the [Redux Toolkit Documentation](https://redux-toolkit.js.org/).

## 4. Setting Up Redux Toolkit in Your Project (Optional)

To integrate Redux Toolkit into your Vite + React + TypeScript portfolio site, follow these steps to set up the store, define slices, and connect to React.

### Step 1: Install Dependencies
Install the required packages:
```bash
npm install @reduxjs/toolkit react-redux
```

### Step 2: Create the Store
Create `src/app/store.ts` to configure the Redux store, combining reducers for theme and projects.

```typescript
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import projectsReducer from '../features/projects/projectsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Step 3: Define State Slices
Slices manage specific parts of the state with their own reducers and actions.

#### Theme Slice
In `src/features/theme/themeSlice.ts`, create a slice to manage the theme state (light or dark mode).

```typescript
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

#### Projects Slice
In `src/features/projects/projectsSlice.ts`, create a slice to store an array of project objects.

```typescript
import { createSlice } from '@reduxjs/toolkit';

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A responsive online store built with React and Stripe.',
    url: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Personal Blog',
    description: 'A blog platform with Markdown support and dark mode.',
    url: 'https://example.com/project2',
  },
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { projects: initialProjects },
  reducers: {},
});

export default projectsSlice.reducer;
```

### Step 4: Connect Redux to React
In `src/main.tsx`, wrap the app with the `Provider` component to make the store available to all components.

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## 5. Using Redux in Components

Components interact with the Redux store using `useSelector` to read state and `useDispatch` to send actions.

### Theme Toggle Component
Create `src/components/ThemeToggle.tsx` to toggle between light and dark modes.

```typescript
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { RootState } from '../app/store';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
```

### Applying the Theme
In `src/App.tsx`, apply the theme to the document's root element to enable Tailwind's `dark:` classes.

```typescript
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <main className="pt-16">
        <ThemeToggle />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
```

### Projects Component
Update `src/components/Projects.tsx` to render the project list from the Redux store.

```typescript
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Projects: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <a href={project.url} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
```

## 6. Persisting State

Persisting state ensures user preferences, like theme choice, are retained across sessions. A simple approach is to use local storage, though it's best handled outside reducers to keep them pure.

### Example: Persisting Theme
Modify `ThemeToggle.tsx` to save the theme to local storage.

```typescript
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { RootState } from '../app/store';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
```

To initialize the theme from local storage, update `themeSlice.ts`:

```typescript
const savedTheme = localStorage.getItem('theme') || 'light';
const initialState: ThemeState = {
  theme: savedTheme as 'light' | 'dark',
};
```

For more robust persistence, consider [redux-persist](https://github.com/rt2zz/redux-persist), which automatically saves and restores state. Due to its complexity, it's recommended for advanced use cases.

## 7. Best Practices and Tips

| **Practice** | **Description** |
|--------------|-----------------|
| **Selective State** | Store only global state in Redux, like theme or shared data, to avoid complexity. |
| **Modular Slices** | Keep slices focused on specific domains (e.g., theme, projects) for clarity. |
| **Type Safety** | Use TypeScript to define state and action types, enhancing reliability. |
| **Debugging** | Install [Redux DevTools](https://github.com/reduxjs/redux-devtools) for state inspection and time-travel debugging. |
| **Performance** | Avoid large state objects; use selectors to compute derived data efficiently. |

**Common Pitfalls**:
- Overusing Redux for local state, which `useState` can handle.
- Missing cleanup in `useEffect` for side effects like local storage.
- Incorrect TypeScript types, leading to runtime errors.

## 8. Examples for Your Portfolio (Optional)

To implement Redux in your portfolio website, you should set up the following files:

### Store Configuration

Create a Redux store configuration file. You can place it in one of these locations:
- `src/app/store.ts`
- `src/store/index.ts`
- `src/store.ts`

Here's a sample implementation:

```typescript
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolio: portfolioReducer,
  },
  // Optional: Add middleware or devTools configuration
});

// Export types for TypeScript usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Redux Slice Implementation

Create a theme slice for managing light/dark mode:

```typescript
// src/features/theme/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Get initial theme from localStorage if available
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Check user preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      // Note: Side effects like localStorage should ideally be handled outside reducers
      // This is just for demonstration
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
      }
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

### Connect Redux to React

Update your main entry file to provide the Redux store to your application:

```typescript
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

### Using Redux in Components

Create a theme toggle component that uses Redux:

```typescript
// src/components/ThemeToggle.tsx
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { RootState } from '../app/store';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`p-2 rounded-full transition-colors ${
        themeMode === 'dark' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {themeMode === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
```

Apply the theme in your App component:

```typescript
// src/App.tsx
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  // Apply theme to HTML element for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

## 9. When to Use Redux Toolkit

Redux Toolkit shines in scenarios with:
- Complex state logic across multiple components.
- Asynchronous data fetching (e.g., using RTK Query).
- Need for advanced debugging or middleware.

For your portfolio, Redux may be overkill if state remains simple, but it's a valuable learning exercise and prepares you for larger applications. Compare it with Context API or alternatives like Zustand for simpler use cases.

## 10. Conclusion

By integrating Redux Toolkit, you've enhanced your portfolio site's state management, replacing Context API for theme toggling and centralizing project data. This setup improves scalability, making it easier to add features like dynamic project filtering or user settings. The skills learned—creating stores, slices, and using Redux hooks—equip you for building complex React applications. Next, consider exploring RTK Query for API data fetching or optimizing performance with memoized selectors.

## Key Citations
- [Redux Toolkit Official Documentation for Setup and Usage](https://redux-toolkit.js.org/)
- [Redux Official Documentation for Core Concepts](https://redux.js.org/)
- [React-Redux Official Documentation for Integration](https://react-redux.js.org/)
- [FreeCodeCamp Tutorial on Redux and Redux Toolkit](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)
- [Redux DevTools for Debugging State Changes](https://github.com/reduxjs/redux-devtools)
- [Redux Persist for State Persistance](https://github.com/rt2zz/redux-persist)