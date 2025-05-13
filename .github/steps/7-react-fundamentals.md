# Chapter 7: React Fundamentals

This chapter guides beginners through building a portfolio site as a React single-page application (SPA). You’ll learn React’s core concepts—functional components, JSX, props, state, event handling, list rendering, and navigation—while creating interactive components like About, Skills, Projects, and a Navbar. Practical examples, including a “Show More” button and scroll-based navigation highlighting, ensure you apply these concepts effectively. Tailored for your Vite + React + TypeScript project, this guide uses Tailwind CSS for styling and focuses on a single-page scroll layout, with an optional introduction to React Router.

## 1. Introduction to React and Single-Page Applications

React, developed by Facebook, is a JavaScript library for building user interfaces, particularly single-page applications (SPAs). An SPA loads a single HTML page and dynamically updates content as users interact, avoiding full page reloads for a smoother experience. For your portfolio site, React enables interactive components, like a project gallery or a contact form, that update seamlessly.

### Why Use React?
- **Component-Based**: Break your UI into reusable components, like a Navbar or Skills list.
- **Efficient Updates**: React’s virtual DOM minimizes browser updates, improving performance.
- **Rich Ecosystem**: Integrates with tools like Vite, TypeScript, and Tailwind CSS.

For more details, visit the [React Documentation](https://react.dev/).

## 2. React Components and JSX

React applications are built using components, reusable pieces of code that define parts of the UI. Functional components, the modern standard, are JavaScript functions returning JSX, a syntax extension resembling HTML.

### Functional Components
A functional component is a function that returns JSX to describe the UI.

```tsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

### JSX Syntax
JSX allows you to write HTML-like code within JavaScript, which React transpiles into JavaScript function calls. For example:

```tsx
const element = <div className="container">Welcome to my portfolio!</div>;
```

Key JSX rules:
- Use `className` instead of `class` for CSS classes.
- Self-closing tags (e.g., `<img />`) require a slash.
- JavaScript expressions are embedded in curly braces `{}`.

In your portfolio, components like `About` or `Skills` will use JSX to structure content, styled with Tailwind CSS classes.

## 3. Props and State

Props and state make components dynamic and reusable.

### Props
Props (properties) pass data from a parent to a child component, making components configurable. They are read-only within the child.

```tsx
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

// Usage in a parent component
<Greeting name="John" />
```

### State with useState
State manages data that changes within a component. The `useState` hook declares state variables and their setters.

```tsx
import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

For your portfolio, state can toggle visibility, like showing extra text in the About section.

## 4. Event Handling

React handles events like clicks or input changes using camelCase event names (e.g., `onClick`, `onChange`) and function handlers.

### Example: Button Click
```tsx
const Button: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

### Example: Input Change
```tsx
const Input: React.FC = () => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return <input type="text" value={text} onChange={handleChange} />;
};
```

In your portfolio, event handling will power features like the “Show More” button or form submissions.

## 5. Rendering Lists and Conditional Rendering

React excels at rendering dynamic lists and conditionally displaying content.

### Rendering Lists
Use the `map` function to render arrays as JSX elements. Each element needs a unique `key` prop for efficient updates.

```tsx
const SkillList: React.FC = () => {
  const skills = ['React', 'TypeScript', 'CSS'];

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};
```

### Conditional Rendering
Render elements based on conditions using ternary operators or logical `&&`.

```tsx
const ToggleContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>This is visible!</p>}
    </div>
  );
};
```

These techniques will be used in your Skills and About components.

## 6. Navigation in React

For a single-page portfolio, anchor links can scroll to sections. Highlighting the active section enhances usability.

### Anchor-Based Navigation
Assign IDs to sections and use `<a>` tags in the Navbar.

```tsx
<section id="about">About</section>
<section id="skills">Skills</section>
```

```tsx
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <a href="#about" className="mr-4">About</a>
      <a href="#skills" className="mr-4">Skills</a>
      <a href="#projects">Projects</a>
    </nav>
  );
};
```

### Scroll-Based Highlighting
Use `useState` and `use

Effect` to highlight the current section based on scroll position.

```tsx
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50) {
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
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between">
        <a href="#about" className={activeSection === 'about' ? 'font-bold text-blue-500' : 'hover:text-blue-500'}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'font-bold text-blue-500' : 'hover:text-blue-500'}>Skills</a>
        <a href="#projects" className={activeSection === 'projects' ? 'font-bold text-blue-500' : 'hover:text-blue-500'}>Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
```

### Optional: React Router
For multi-page navigation, React Router manages routes. Install it:

```bash
npm install react-router-dom
```

Set up routes in `App.tsx`:

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
```

Update `Navbar.tsx` with `Link`:

```tsx
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link to="/" className="mr-4 hover:text-blue-500">About</Link>
      <Link to="/skills" className="mr-4 hover:text-blue-500">Skills</Link>
      <Link to="/projects" className="hover:text-blue-500">Projects</Link>
    </nav>
  );
};
```

For a simple portfolio, anchor links suffice, but React Router is useful for larger projects. See [React Router Documentation](https://reactrouter.com/en/main).

## 7. Building Portfolio Components

Let’s create the core components for your portfolio site, applying the concepts above.

### About Component
The About section displays a bio with a “Show More” button to toggle extra text.

```tsx
import { useState } from 'react';

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="p-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300">
        I am a web developer with experience in React and TypeScript.
      </p>
      {showMore && (
        <p className="text-gray-600 dark:text-gray-300">
          I have worked on various projects, including e-commerce sites and personal blogs. I am passionate about creating user-friendly interfaces.
        </p>
      )}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-2 text-blue-500 hover:underline"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default About;
```

**Features**:
- Uses `useState` for toggling visibility.
- Conditionally renders extra text with `&&`.
- Styled with Tailwind CSS for responsiveness and dark mode.

### Skills Component
The Skills section lists skills using `.map()`.

```tsx
const Skills: React.FC = () => {
  const skills = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'];

  return (
    <section id="skills" className="p-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Skills</h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
```

**Features**:
- Renders a dynamic list with `.map()`.
- Uses unique keys for efficient rendering.
- Applies Tailwind classes for styling.

### Projects Component
The Projects section displays a grid of projects, receiving data via props.

```tsx
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="p-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
```

**Features**:
- Receives `projects` array via props.
- Uses `.map()` for list rendering with unique `id` keys.
- Responsive grid layout with Tailwind.

### Assembling the App
Combine components in `App.tsx`:

```tsx
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

const projects = [
  {
    id: 1,
    title: 'E-commerce Site',
    description: 'A fully functional online store built with React and Stripe.',
    link: 'https://example.com/ecommerce',
  },
  {
    id: 2,
    title: 'Personal Blog',
    description: 'A blog platform with Markdown support and dark mode.',
    link: 'https://example.com/blog',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16">
        <About />
        <Skills />
        <Projects projects={projects} />
      </main>
    </div>
  );
};

export default App;
```

**Features**:
- Passes `projects` array as props to `Projects`.
- Uses `pt-16` to offset content below the fixed Navbar.
- Organizes sections for smooth scrolling.

## 8. Best Practices and Tips

| **Practice** | **Description** |
|--------------|-----------------|
| **Unique Keys** | Always provide unique `key` props for lists, preferably using IDs rather than indices. |
| **Component Reusability** | Design components to accept props for flexibility, e.g., passing `projects` to `Projects`. |
| **State Management** | Use local state with `useState` for simple interactions; consider lifting state up for shared data. |
| **Clean JSX** | Keep JSX concise; extract complex logic to functions or hooks. |
| **Accessibility** | Use semantic HTML and ARIA attributes, e.g., `aria-current` for active nav links. |

**Common Pitfalls**:
- Avoid missing `key` props in lists, which can cause rendering issues.
- Don’t overuse state; use props for static data.
- Test scroll highlighting to ensure accurate section detection.

## 9. Conclusion

This chapter has equipped you with React fundamentals to build a dynamic portfolio site. You’ve created functional components, managed state and props, handled events, rendered lists, and implemented navigation. The About, Skills, Projects, and Navbar components demonstrate these concepts in action, forming a solid foundation for your SPA. Next, consider adding a Contact form or exploring advanced React features like context or custom hooks to enhance your site.

For further learning, explore the [React Documentation](https://react.dev/) or build additional features like a theme toggle.