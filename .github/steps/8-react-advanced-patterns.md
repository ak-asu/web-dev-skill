# Chapter 8: React Advanced Patterns

This chapter dives into advanced React patterns to optimize and organize your portfolio site, built as a single-page application (SPA) with Vite, React, TypeScript, and Tailwind CSS. Designed for beginners, it covers sophisticated techniques like `useEffect` for side effects, Context API for global state, code splitting with `React.lazy` and `Suspense`, and performance optimizations using `useMemo`, `useCallback`, and `React.memo`. You'll implement a global theme toggle, lazy-load the Projects section, enhance navigation with scroll-based highlighting, and optimize rendering to ensure a fast, user-friendly experience. Practical examples and clear explanations make these concepts accessible, empowering you to elevate your portfolio site.

## :keyboard: Activity: Chapter Tasks

1. **Complete the React Advanced Patterns Quiz**: Answer questions correctly in the `resources/Quiz8.md` file
2. **Implement Advanced React Patterns in Components**:
   - Create or update `Navbar.tsx` with scroll-based highlighting using `useEffect`
   - Create or update `Projects.tsx` with performance optimizations
   - Create or update `Skills.tsx` with at least one advanced pattern

## 1. Introduction to Advanced React Patterns

Advanced React patterns enhance your portfolio site by improving performance, scalability, and code organization. These techniques address common challenges in SPAs, such as managing global state, reducing load times, and preventing unnecessary re-renders. By mastering these patterns, you'll create a professional site that showcases your skills effectively to potential employers or clients.

This chapter covers:
- **Advanced Hooks**: Using `useEffect` for side effects like scroll listeners and document updates.
- **Context API**: Managing global state, such as a light/dark theme toggle.
- **Code Splitting and Lazy Loading**: Loading components on demand to improve initial load times.
- **Performance Optimizations**: Minimizing re-renders with `useMemo`, `useCallback`, and `React.memo`.
- **Practical Implementation**: Applying these techniques to your portfolio's Navbar, Projects, and theme system.

These patterns build on the foundational React concepts from Chapter 7, preparing you for more complex projects.

## 2. Advanced Hooks: useEffect

The `useEffect` hook manages side effects in functional components, such as data fetching, DOM manipulations, or event listeners. Side effects are operations that interact with the outside world, beyond rendering UI. In your portfolio site, `useEffect` can enhance navigation and user experience.

### Understanding useEffect
`useEffect` runs after every render by default, but you can control when it runs using a dependency array:
- Empty array (`[]`): Runs once on mount and cleanup on unmount.
- Dependencies (`[dep1, dep2]`): Runs when listed dependencies change.
- No array: Runs after every render (rarely used).

### Example: Scroll-Based Navigation Highlighting
To highlight the active section in your Navbar as users scroll, use `useEffect` to add a scroll listener. This updates the active link based on the visible section.

```tsx
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 50;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
      <ul className="flex justify-around">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`${
                activeSection === section ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300'
              } hover:text-blue-500`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
```

**Explanation**:
- **useEffect**: Adds a scroll event listener on mount and removes it on unmount to prevent memory leaks.
- **Scroll Logic**: Checks which section is in view by comparing `scrollY` to each section's position.
- **State Update**: Sets `activeSection` to highlight the current link with Tailwind classes.

### Optimization: Debouncing Scroll Events
Scroll events fire frequently, potentially impacting performance. Debouncing delays execution until scrolling pauses, reducing updates. Install `lodash` for a debounce utility:

```bash
npm install lodash
```

You can do the following in the Navbar:

```tsx
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 50;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
      <ul className="flex justify-around">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`${
                activeSection === section ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300'
              } hover:text-blue-500`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
```

**Explanation**:
- **Debounce**: Limits `handleScroll` to run every 100ms, improving performance.
- **Cleanup**: Cancels the debounced function to avoid pending executions.

For more on `useEffect`, see the [React Hooks Documentation](https://react.dev/reference/react/useEffect).

## 3. Context API: Managing Global State

The Context API enables sharing data across components without prop drilling, ideal for global state like themes or user preferences. For your portfolio, a theme toggle for light/dark modes is a practical application.

### Creating ThemeContext
Define a `ThemeContext` to manage the theme state and toggle function. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/tree/main/resources/example/src/context/)

```tsx
import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### Applying the Theme
Wrap your app with `ThemeProvider` and use `useEffect` to apply the theme class to the HTML element.

```tsx
import { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const App: React.FC = () => {
  const { theme } = useTheme();

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
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
```

### Theme Toggle Component
Create a button to toggle the theme.

```tsx
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
```

Add `ThemeToggle` to your Navbar:

```tsx
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  // ... existing code ...
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`${
                  activeSection === section ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300'
                } hover:text-blue-500`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};
```

**Explanation**:
- **Context**: `ThemeContext` provides `theme` and `toggleTheme` to all components.
- **useEffect**: Updates the `dark` class on the HTML element, enabling Tailwind's `dark:` classes.
- **Accessibility**: `aria-label` improves screen reader support for the toggle button.

Components can now use `dark:` classes, e.g., `bg-white dark:bg-gray-800`, to adapt to the theme. Learn more at the [React Context Documentation](https://react.dev/reference/react/createContext).

## 4. Code Splitting and Lazy Loading

Code splitting reduces initial load times by loading only the necessary code. React's `React.lazy` and `Suspense` enable dynamic imports, ideal for heavy components like Projects, which may include images or complex UI.

### Implementing Lazy Loading
Lazy-load the Projects section to defer its loading until it's visible.

```tsx
import React, { Suspense } from 'react';
const Projects = React.lazy(() => import('./components/Projects'));

const App: React.FC = () => {
  const { theme } = useTheme();

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
        <About />
        <Suspense fallback={<div className="p-4 text-center">Loading Projects...</div>}>
          <Projects />
        </Suspense>
      </main>
    </div>
  );
};
```

### Lazy Loading on Scroll
To load Projects only when it enters the viewport, use `react-intersection-observer`. Install it:

```bash
npm install react-intersection-observer
```

Update `App.tsx`:

```tsx
import { useInView } from 'react-intersection-observer';
import React, { Suspense } from 'react';
import { useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
const Projects = React.lazy(() => import('./components/Projects'));

const App: React.FC = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <About />
        <div ref={ref} id="projects">
          {inView ? (
            <Suspense fallback={<div className="p-4 text-center">Loading Projects...</div>}>
              <Projects />
            </Suspense>
          ) : (
            <div className="p-4 text-center">Loading...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
```

**Explanation**:
- **React.lazy**: Dynamically imports `Projects` when rendered.
- **Suspense**: Displays a fallback UI while loading.
- **Intersection Observer**: Loads `Projects` only when its container is 10% visible, reducing initial bundle size.

Ensure `Projects.tsx` is optimized, e.g., by minimizing large assets. For details, see the [React Lazy Documentation](https://react.dev/reference/react/lazy).

## 5. Performance Optimizations

Performance is critical for a smooth user experience. React components re-render when their state or props change, or when a parent re-renders. Unnecessary re-renders can slow down your site, especially for components like project cards.

### Understanding Re-Renders
Use [React Developer Tools](https://react.dev/learn/react-developer-tools) to profile your app and identify re-renders. Common causes include:
- State updates triggering parent re-renders.
- Functions or objects recreated on each render, causing child components to re-render.

### Using useMemo
`useMemo` memoizes expensive computations, recomputing only when dependencies change. For example, if filtering projects based on a category:

```tsx
import { useState, useMemo } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
}

const Projects: React.FC = () => {
  const [category, setCategory] = useState('all');
  const projects: Project[] = [
    { id: 1, title: 'E-commerce', category: 'web' },
    { id: 2, title: 'Blog', category: 'blog' },
  ];

  const filteredProjects = useMemo(() => {
    return category === 'all' ? projects : projects.filter((p) => p.category === category);
  }, [category, projects]);

  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h3 className="text-xl">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
```

**Explanation**: `useMemo` ensures filtering only occurs when `category` or `projects` changes, avoiding redundant computations.

### Using useCallback
`useCallback` memoizes functions, preventing recreation on each render, which is crucial when passing callbacks to child components.

```tsx
import { useState, useCallback } from 'react';

interface Project {
  id: number;
  title: string;
}

const ProjectCard: React.FC<{ project: Project; onClick: (id: number) => void }> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project.id)}
      className="p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer"
    >
      <h3 className="text-xl">{project.title}</h3>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const projects: Project[] = [
    { id: 1, title: 'E-commerce' },
    { id: 2, title: 'Blog' },
  ];

  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={handleClick} />
        ))}
      </div>
    </section>
  );
};
```

**Explanation**: `useCallback` ensures `handleClick` is stable, preventing `ProjectCard` from re-rendering unnecessarily.

### Using React.memo
`React.memo` wraps components to prevent re-renders if props are unchanged. Apply it to `ProjectCard`:

```tsx
import { memo } from 'react';

interface Project {
  id: number;
  title: string;
}

const ProjectCard = memo(({ project, onClick }: { project: Project; onClick: (id: number) => void }) => {
  return (
    <div
      onClick={() => onClick(project.id)}
      className="p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer"
    >
      <h3 className="text-xl">{project.title}</h3>
    </div>
  );
});

export default ProjectCard;
```

**Explanation**: `React.memo` checks if `project` or `onClick` has changed, skipping re-renders if they're the same. Combined with `useCallback`, this optimizes performance.

### Optimization Checklist
| **Technique** | **Use Case** | **Portfolio Example** |
|---------------|--------------|-----------------------|
| `useMemo`     | Expensive computations | Filtering projects by category |
| `useCallback` | Stable function props | Click handlers for project cards |
| `React.memo`  | Prevent child re-renders | ProjectCard component |

For advanced profiling, use [React Developer Tools](https://react.dev/learn/react-developer-tools).

## 6. Best Practices and Tips

- **Profile Regularly**: Use React Developer Tools to monitor re-renders and optimize bottlenecks.
- **Keep Context Lean**: Store only global data in Context to avoid unnecessary updates.
- **Test Lazy Loading**: Simulate slow networks in browser dev tools to verify fallbacks.
- **Debounce Events**: Apply debouncing to high-frequency events like scroll or resize.
- **Avoid Over-Optimization**: Only memoize when profiling shows a performance issue.

**Common Pitfalls**:
- Forgetting to clean up event listeners in `useEffect`, causing memory leaks.
- Overusing `React.memo`, which adds overhead for simple components.
- Incorrect dependency arrays in `useEffect` or `useCallback`, leading to stale data.


## 7. Required Tasks and Examples

For the tasks in this chapter, you need to create or update the following components:

### Navbar.tsx

Create a Navbar component that implements scroll-based navigation highlighting using useEffect. A sample implementation is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/Navbar.tsx).

### Projects.tsx

Create a Projects component that uses performance optimizations like React.memo or useMemo. A sample implementation is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/Projects.tsx).

### Skills.tsx

Create a Skills component that leverages at least one advanced React pattern. Employ an infinite horizontal scrolling technique to load skills dynamically. A sample implementation is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/Skills.tsx).

### App.tsx
Update your `App.tsx` to include the new components. A sample implementation is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/App.tsx).

## 8. Conclusion

This chapter has equipped you with advanced React patterns to optimize your portfolio site. By leveraging `useEffect` for side effects, Context API for global state, `React.lazy` for code splitting, and `useMemo`, `useCallback`, and `React.memo` for performance, you've built a fast, maintainable SPA. These techniques—applied to a theme toggle, lazy-loaded Projects, and optimized components—demonstrate professional React development. Continue experimenting with these patterns and explore tools like React Query for data fetching in future projects.

## Key Citations
- [React Hooks Documentation: useEffect and useState](https://react.dev/reference/react)
- [React Context Documentation: Managing Global State](https://react.dev/reference/react/createContext)
- [React Lazy Documentation: Code Splitting and Lazy Loading](https://react.dev/reference/react/lazy)
- [React Memo Documentation: Performance Optimization](https://react.dev/reference/react/memo)
- [React Developer Tools: Profiling and Debugging](https://react.dev/learn/react-developer-tools)
- [Intersection Observer API: Detecting Element Visibility](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)