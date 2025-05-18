# Chapter 7: React Fundamentals

This chapter guides beginners through building a portfolio site as a React single-page application (SPA). You'll learn React's core concepts—functional components, JSX, props, state, event handling, list rendering, and navigation—while creating interactive components like About, Skills, Projects, and a Navbar. Practical examples, including a "Show More" button and scroll-based navigation highlighting, ensure you apply these concepts effectively. Tailored for your Vite + React + TypeScript project, this guide uses Tailwind CSS for styling and focuses on a single-page scroll layout, with an optional introduction to React Router.

## :keyboard: Activity: Chapter Tasks

To complete this chapter, you need to:

1. **Complete the React Quiz**: Answer questions correctly in the `resources/Quiz7.md` file
2. **Create React Components**:
   - Build `About.tsx`, `Hero.tsx`, `Footer.tsx`, and `NotFound.tsx` components
   - Add proper TypeScript typing and styling
   - Implement React hooks like useState where appropriate
3. **Update App.tsx**:
   - Import and use the components you created

## 1. Introduction to React and Single-Page Applications

React, developed by Facebook, is a JavaScript library for building user interfaces, particularly single-page applications (SPAs). An SPA loads a single HTML page and dynamically updates content as users interact, avoiding full page reloads for a smoother experience. For your portfolio site, React enables interactive components, like a project gallery or a contact form, that update seamlessly.

### Why Use React?
- **Component-Based**: Break your UI into reusable components, like a Navbar or Skills list.
- **Efficient Updates**: React's virtual DOM minimizes browser updates, improving performance.
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

In your portfolio, event handling will power features like the "Show More" button or form submissions.

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

**Features**:
- Renders a dynamic list with `.map()`.
- Uses unique keys for efficient rendering.

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
- Uses `useState` for toggling visibility.
- Conditionally renders extra text with `&&`.

## 6. Navigation in React

For a single-page portfolio, anchor links can scroll to sections. Highlighting the active section enhances usability. React Router is useful for larger projects. See [React Router Documentation](https://reactrouter.com/en/main).

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
Use `useState` and `useEffect` to highlight the current section based on scroll position.

## 7. Best Practices and Tips

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

## 8. Required Tasks and Examples

For the tasks in this chapter, you need to create or update the following components:

### 1. Hero.tsx Component

Create a hero section for the landing page. This section should introduce you and your portfolio. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/Hero.tsx).

### 2. About.tsx Component

Create a component that displays information about yourself, including your background, interests and more. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/About.tsx).

### 3. Footer.tsx Component

Create a footer component for the site which will be displayed at the bottom of the page. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/Footer.tsx).

### 4. NotFound.tsx Component

Create a 404 page component which will be displayed when a user navigates to a non-existent route. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/NotFound.tsx).

### 5. App.tsx Updates

Update your App.tsx to include the new components. This file manages the overall layout and routing of your application. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/App.tsx).

## 9. Conclusion

This chapter has equipped you with React fundamentals to build a dynamic portfolio site. You've created functional components, managed state and props, handled events, rendered lists, and implemented navigation. The About, Skills, Projects, and Navbar components demonstrate these concepts in action, forming a solid foundation for your SPA. Next, consider adding a Contact form or exploring advanced React features like context or custom hooks to enhance your site.

For further learning, explore the [React Documentation](https://react.dev/) or build additional features like a theme toggle.