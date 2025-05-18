# Chapter 5: CSS and Tailwind

This chapter provides a comprehensive guide to styling your portfolio site using CSS and Tailwind CSS within a React and Vite project. CSS is the backbone of web styling, controlling layout, colors, and typography, while Tailwind CSS offers a utility-first approach to streamline development. We'll cover CSS fundamentals, Tailwind's integration, and practical examples to create a responsive, visually appealing portfolio site. All styling will be managed through Tailwind classes in JSX and the `index.css` file, adhering to the requirement to avoid additional CSS files.

## :keyboard: Activity: Chapter Tasks

1. **Complete the CSS and Tailwind Quiz**: Answer questions correctly in the `resources/Quiz5.md` file
2. **Set up Tailwind CSS 4**:
   - Update `package.json` with Tailwind 4 and related packages
   - Configure `vite.config.ts` to use the Tailwind plugin
3. **Prepare CSS Files**:
   - Set up `tailwind.config.js` with proper content, theme, and plugins
   - Create `src/index.css` with Tailwind imports and layer definitions
   - Create `src/App.css` with component-specific styles

## 1. Introduction to CSS and Tailwind CSS

Styling transforms the structure of your portfolio site into an engaging user experience. CSS (Cascading Style Sheets) defines how HTML elements appear, from fonts to layouts. Tailwind CSS, a utility-first framework, accelerates styling by providing pre-defined classes that you apply directly in your markup, reducing the need for custom CSS.

This chapter covers:
- **CSS Fundamentals**: Selectors, box model, specificity, positioning, responsive design, and developer tools.
- **Tailwind CSS**: Setup, utility classes, customization, responsive design, and dark mode.
- **Practical Styling**: Applying styles to navigation, project grids, and theme toggles in your portfolio site.

By the end, you’ll be equipped to style your site efficiently and consistently, leveraging both CSS principles and Tailwind’s utilities.

## 2. CSS Fundamentals

Understanding CSS is crucial, even when using Tailwind, as it underpins how styles are applied and managed.

### 2.1 Selectors

Selectors target HTML elements to apply styles. Common selectors include:

- **Element Selectors**: Target tags, e.g., `p { color: blue; }` styles all paragraphs.
- **Class Selectors**: Target classes, e.g., `.highlight { background: yellow; }`.
- **ID Selectors**: Target unique IDs, e.g., `#header { font-size: 24px; }`.
- **Attribute Selectors**: Target attributes, e.g., `[type="text"] { border: 1px solid gray; }`.
- **Pseudo-Classes**: Target states, e.g., `a:hover { text-decoration: underline; }`.

In React, you’ll use class selectors via `className` in JSX, aligning with Tailwind’s class-based approach. Learn more at [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

### 2.2 The Box Model

The box model represents every HTML element as a rectangular box with:

- **Content**: The core content (text, images).
- **Padding**: Space between content and border.
- **Border**: A line surrounding padding.
- **Margin**: Space outside the border.

The total size is calculated as:
```
Total Width = Content Width + Padding Left + Padding Right + Border Left + Border Right + Margin Left + Margin Right
```

Tailwind uses `box-sizing: border-box` by default, meaning width and height include padding and border, simplifying layout calculations. For example, `w-64` sets an element’s total width to 16rem (256px).

### 2.3 Specificity

Specificity determines which CSS rule applies when multiple rules target the same element. It’s based on selector types:

- Inline styles (highest specificity).
- IDs.
- Classes, attributes, pseudo-classes.
- Elements, pseudo-elements (lowest specificity).

For example, `#header { color: red; }` overrides `.title { color: blue; }` due to higher specificity. Tailwind’s utility classes have equal specificity, and their order in `className` determines precedence, minimizing conflicts.

Explore specificity further at [CSS Tricks: Specificity](https://css-tricks.com/specifics-on-css-specificity/).

### 2.4 Positioning Elements

CSS offers several positioning methods:

- **Normal Flow**: Elements follow their HTML order, stacking vertically.
- **Flexbox**: A one-dimensional layout for rows or columns. Key properties include:
  - `display: flex`
  - `flex-direction: row | column`
  - `justify-content: space-between | center`
  - `align-items: center | stretch`
- **CSS Grid**: A two-dimensional layout for rows and columns. Key properties include:
  - `display: grid`
  - `grid-template-columns: 1fr 1fr`
  - `gap: 16px`
- **Position Property**:
  - `static`: Default, follows normal flow.
  - `relative`: Offset from its normal position.
  - `absolute`: Positioned relative to the nearest positioned ancestor.
  - `fixed`: Positioned relative to the viewport.
  - `sticky`: Toggles between relative and fixed based on scroll.

Tailwind provides utilities like `flex`, `grid`, `justify-between`, and `absolute` to implement these layouts. Practice flexbox and grid with [Flexbox Froggy](https://flexboxfroggy.com/) and [Grid Garden](https://cssgridgarden.com/).

### 2.5 Responsive Design Principles

Responsive design ensures your site adapts to various devices. Key techniques include:

- **Media Queries**: Apply styles based on screen size, e.g., `@media (max-width: 600px) { body { font-size: 14px; } }`.
- **Fluid Layouts**: Use percentages or viewport units (e.g., `vw`, `vh`) for flexible sizing.
- **Mobile-First Approach**: Style for smaller screens first, then enhance for larger screens with media queries.

Tailwind simplifies responsive design with prefixes like `sm:`, `md:`, and `lg:`, eliminating the need for custom media queries in most cases.

### 2.6 Using Developer Tools

Browser developer tools (e.g., Chrome DevTools) are essential for debugging and refining styles:

- **Open DevTools**: Press F12 or right-click and select “Inspect.”
- **Elements Tab**: View HTML and applied styles.
- **Styles Pane**: See CSS rules, including Tailwind classes, and modify them live.
- **Computed Tab**: Check final calculated styles.
- **Responsive Design Mode**: Test layouts on different screen sizes.

When using Tailwind, hover over a class in the Styles pane to see its CSS properties, or add classes temporarily to test changes. This is particularly useful for tweaking spacing or colors.

## 3. Tailwind CSS in Your Vite Project

Tailwind CSS is already integrated into your Vite + React project (from Chapter 3), but we’ll confirm the setup and explore its features.

### 3.1 Confirming Tailwind CSS Installation

Tailwind CSS is installed as a Vite plugin for seamless integration, as noted in the [Tailwind CSS Docs](https://tailwindcss.com/docs/guides/vite). To verify:

1. **Dependencies**: Ensure `tailwindcss` and `@tailwindcss/vite` are in `package.json`:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
2. **Vite Configuration**: Check `vite.config.ts`:
   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```
3. **Tailwind Configuration**: Verify `tailwind.config.js`:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
   The `content` array ensures Tailwind scans your JSX files for classes.
4. **CSS Import**: Confirm `src/index.css` includes:
   ```css
   @import "tailwindcss";
   ```

Run `npm run dev` to ensure the setup works, and check your site at `http://localhost:5173`.

### 3.2 Utility-First Approach

Tailwind’s utility-first approach lets you style elements directly in JSX using classes like:

- **Layout**: `flex`, `grid`, `gap-4`.
- **Spacing**: `p-4` (padding), `m-2` (margin).
- **Colors**: `bg-blue-500`, `text-white`.
- **Typography**: `text-xl`, `font-bold`.

Example:
```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Click Me
</button>
```

This creates a blue button with padding, rounded corners, and a hover effect, all without custom CSS.

### 3.3 Customizing tailwind.config.js

Customize Tailwind to match your portfolio’s branding:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class-based toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Custom blue for branding
        secondary: '#9333ea', // Custom purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
}
```

- **Dark Mode**: `darkMode: 'class'` allows toggling via a `dark` class on the `<html>` element.
- **Custom Colors**: Use `bg-primary` or `text-secondary` in your components.
- **Fonts**: Apply `font-sans` to use the custom font.

### 3.4 Responsive Design with Tailwind

Tailwind’s mobile-first utilities apply styles by default and override them for larger screens using prefixes:

- `sm:` (≥640px)
- `md:` (≥768px)
- `lg:` (≥1024px)

Example:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive Text
</div>
```

This sets text size to small on mobile, base on medium screens, and large on large screens.

### 3.5 Implementing Dark Mode

Use the `dark:` prefix for dark mode styles:

```jsx
<div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
  Content
</div>
```

To toggle dark mode, add/remove the `dark` class on the `<html>` element using JavaScript. We’ll show an example in the practical section.

### 3.6 Working with index.css

The `index.css` file imports Tailwind and can include global styles:

```css
@import "tailwindcss";

@layer base {
  html {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded;
  }
  .btn-primary {
    @apply bg-primary text-white hover:bg-blue-700;
  }
}
```

- **@layer base**: Sets global styles, like fonts or resets.
- **@layer components**: Defines reusable component styles, e.g., `className="btn btn-primary"`.
- **No Additional Files**: All styling is managed here or via Tailwind classes in JSX, per your requirement.

## 4. Styling the Portfolio Site

Let’s apply CSS and Tailwind to style key components of your portfolio site, using Tailwind’s utilities for flexbox, grid, and responsive design.

### 4.1 Navigation Bar

Create a responsive navigation bar with a mobile menu toggle:

```jsx
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary dark:bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">My Portfolio</a>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-secondary">About</a>
          <a href="#projects" className="hover:text-secondary">Projects</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a>
          <a href="#projects" className="block py-2 px-4 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
```

**Explanation**:
- **Layout**: `flex`, `justify-between`, `items-center` create a horizontal layout.
- **Responsive**: `hidden md:flex` shows the menu on medium screens; `md:hidden` toggles the mobile button.
- **Styling**: `bg-primary`, `text-white`, `hover:text-secondary` use custom colors.
- **Interactivity**: React state manages the mobile menu’s visibility.

### 4.2 Project Grid

Display projects in a responsive grid:

```jsx
function Projects() {
  return (
    <section id="projects" className="py-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <img
            src="project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">Project 1</h3>
          <p className="text-gray-600 dark:text-gray-300">Built with React and Tailwind CSS.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
          <img
            src="project2.jpg"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-t"
          />
          <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">Project 2</h3>
          <p className="text-gray-600 dark:text-gray-300">A responsive blog platform.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Projects;
```

**Explanation**:
- **Grid Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` adjusts columns by screen size.
- **Styling**: `shadow`, `rounded`, `p-4` create card effects; `dark:bg-gray-800` supports dark mode.
- **Images**: `w-full h-48 object-cover` ensures consistent, responsive thumbnails.

### 4.3 Theme Toggle

Implement a button to toggle dark mode:

```jsx
import { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
```

**Explanation**:
- **State Management**: `useState` tracks the theme.
- **Class Toggle**: Adds/removes `dark` on the `<html>` element.
- **Styling**: `bg-gray-200 dark:bg-gray-700` adjusts button appearance.

Add this component to your layout, e.g., in the navigation bar or footer.

## 5. Best Practices and Tips

- **Consistency**: Use Tailwind’s design tokens (e.g., `text-sm`, `bg-blue-500`) for uniform styling.
- **Minimize Custom CSS**: Rely on Tailwind classes to avoid maintenance issues; use `index.css` only for global or component styles.
- **Componentization**: Create reusable React components with predefined Tailwind classes.
- **Developer Tools**: Regularly inspect elements to test Tailwind classes and ensure responsiveness.
- **IntelliSense**: Install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) VSCode extension for class auto-completion.
- **Common Mistakes**:
  - Ensure all JSX files are included in `tailwind.config.js`’s `content` array to generate classes.
  - Use correct responsive prefixes (e.g., `md:` for ≥768px, not `lg:`).
  - Test dark mode thoroughly to ensure all elements adapt correctly.

## 6. Required Tasks for Your Portfolio Styling

For your portfolio website built with React, Vite, and Tailwind CSS 4, you need to set up the following files:

### Tailwind CSS 4 Setup

Update your `package.json` to include Tailwind 4 and related packages:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.0",
    "@tailwindcss/typography": "^0.5.0",
    "@tailwindcss/vite": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.0"
  }
}
```

Update your `vite.config.ts` to use the Tailwind plugin:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

These files are essential for setting up Tailwind CSS in your Vite + React project. The `package.json` file includes the necessary dependencies, while the `vite.config.ts` file configures Vite to use the Tailwind plugin.

### Tailwind Configuration

Here's a sample example of an [`tailwind.config.js`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/tailwind.config.js) file with all required elements. It is used to configure Tailwind CSS for your project. It contains the content paths, theme settings, and plugins.

### CSS Files

Here's a sample example of an [`src/index.css`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/index.css) file with all required elements. This file is responsible for importing Tailwind CSS and defining global styles.

Here's a sample example of an [`src/App.css`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/App.css) file with all required elements. This file is responsible for defining component-specific styles.

## 7. Conclusion

This chapter has equipped you with the skills to style your portfolio site using CSS fundamentals and Tailwind CSS. By mastering selectors, the box model, flexbox, grid, and responsive design, and applying Tailwind’s utilities, you can create a professional, accessible, and responsive site. Continue experimenting with Tailwind classes and developer tools to refine your design, preparing you for the next chapter on JavaScript and interactivity.

## Key Citations
- [MDN Web Docs: CSS Reference Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [CSS Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [WebAIM: Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/)
- [Google Developers: Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
- [VSCode Marketplace: Tailwind CSS IntelliSense Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)