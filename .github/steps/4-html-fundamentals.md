# Chapter 4: HTML Fundamentals

This chapter introduces HTML (HyperText Markup Language), the foundation of web development, tailored for beginners building a portfolio site with React and Vite. We’ll explore core HTML elements, semantic HTML for better structure, accessibility practices, SEO essentials, and how HTML integrates with React. By mastering these concepts, you’ll create structured, accessible, and search-friendly web pages.

## 1. Introduction to HTML

HTML is the standard language for structuring content on the web, defining elements like headings, paragraphs, and images. Invented by Tim Berners-Lee in 1991, it has evolved from HTML 1.0 to HTML5, standardized in 2014 by the World Wide Web Consortium (W3C). HTML5 is the current version, offering semantic elements, multimedia support, and improved forms.

- **Purpose**: HTML provides the skeleton of a webpage, styled by CSS and made interactive with JavaScript.
- **Relevance to React**: In React, HTML-like JSX is used within components, but the initial structure starts with an HTML file, making HTML knowledge essential.

For a deeper dive, visit [MDN: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).

## 2. Core HTML Elements

HTML uses tags to define content types. Below are the essential elements for building a portfolio site:

| **Element**       | **Description**                                                                 | **Example**                                                                 |
|-------------------|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Headings**      | `<h1>` to `<h6>` define headings, with `<h1>` being the most important.         | `<h1>My Portfolio</h1>`                                                     |
| **Paragraphs**    | `<p>` defines a paragraph of text.                                             | `<p>I am a web developer.</p>`                                              |
| **Lists**         | `<ul>` for unordered lists, `<ol>` for ordered lists, `<li>` for list items.   | `<ul><li>Project 1</li><li>Project 2</li></ul>`                             |
| **Links**         | `<a href="url">` creates hyperlinks to other pages or resources.                | `<a href="https://github.com">GitHub</a>`                                   |
| **Images**        | `<img src="image.jpg" alt="description">` embeds images with alternative text.  | `<img src="profile.jpg" alt="My Profile Picture">`                           |
| **Buttons**       | `<button>` creates clickable buttons.                                          | `<button>Click Me</button>`                                                 |
| **Forms**         | `<form>` contains inputs like `<input>`, `<textarea>`, and `<button>` for user input. | `<form><input type="text" placeholder="Name"><button type="submit">Submit</button></form>` |

**Example Code**:
```html
<h1>Welcome to My Portfolio</h1>
<p>Experienced in React and TypeScript.</p>
<ol>
  <li>Project 1: E-commerce Site</li>
  <li>Project 2: Blog Platform</li>
</ol>
<a href="https://linkedin.com">LinkedIn</a>
<img src="project.jpg" alt="Project Screenshot">
<button>View Projects</button>
<form>
  <input type="email" placeholder="Email">
  <textarea placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>
```

These elements are directly applicable in React’s JSX, where you’ll use similar syntax within components.

## 3. Semantic HTML

Semantic HTML elements describe their purpose, improving accessibility, SEO, and code readability. Unlike non-semantic elements like `<div>`, semantic tags convey meaning to browsers and developers.

### Key Semantic Elements
| **Element**   | **Role**                                                                 |
|---------------|--------------------------------------------------------------------------|
| `<header>`    | Introductory content or navigation, often with logos or titles.           |
| `<nav>`       | Navigation menu with links to other pages or sections.                   |
| `<main>`      | Primary content of the page, unique to each page.                        |
| `<section>`   | Thematic grouping of content, like chapters or portfolio categories.     |
| `<article>`   | Independent, self-contained content, such as project descriptions.       |
| `<footer>`    | Footer information, like copyright or contact details.                   |

### Benefits
- **Accessibility**: Screen readers use semantic tags to navigate content, e.g., identifying `<nav>` as a menu.
- **SEO**: Search engines prioritize semantic structures for better indexing.
- **Maintainability**: Clearer code structure aids collaboration and updates.

**Example Structure**:
```html
<header>
  <h1>John Doe’s Portfolio</h1>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>Web developer with 2 years of experience.</p>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <article>
      <h3>E-commerce Site</h3>
      <p>Built with React and Tailwind CSS.</p>
    </article>
  </section>
</main>
<footer>
  <p>&copy; 2025 John Doe</p>
</footer>
```

For a visual, see [MDN: Structuring Documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents), which illustrates a typical layout with semantic elements.

## 4. Accessibility Basics

Accessibility ensures websites are usable by everyone, including those with disabilities. For a portfolio site, basic practices include:

- **Alt Attributes for Images**: Provide descriptive `alt` text for `<img>` tags to assist screen readers.
  ```html
  <img src="project.jpg" alt="E-commerce site screenshot showing product listings">
  ```
- **Correct Heading Order**: Use headings sequentially (`<h1>`, `<h2>`, `<h3>`) without skipping levels to maintain a logical structure.
  ```html
  <h1>Portfolio</h1>
  <h2>Projects</h2>
  <h3>Project 1</h3>
  ```
- **ARIA Roles**: Enhance dynamic content accessibility (e.g., `<button aria-label="Toggle menu">`). For beginners, focus on native HTML elements first.

These practices align with Web Content Accessibility Guidelines (WCAG) and are critical for inclusive web design. Learn more at [WebAIM: Introduction to Web Accessibility](https://webaim.org/intro/).

## 5. SEO Basics

Search Engine Optimization (SEO) improves a website’s visibility on search engines like Google. Key HTML elements in the `<head>` section include:

- **`<title>`**: Defines the page title, shown in browser tabs and search results.
- **`<meta name="description" content="...">`**: Summarizes page content for search snippets.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Ensures responsive design for mobile devices.

**Example**:
```html
<head>
  <title>John Doe - Web Developer Portfolio</title>
  <meta name="description" content="Showcasing John Doe’s web development projects built with React.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

Semantic HTML also boosts SEO by providing clear content hierarchy. For advanced SEO, consider structured data (e.g., schema.org), but for beginners, focus on meta tags and semantics. See [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## 6. Essential HTML Tags

Beyond core elements, these tags are vital for structuring a webpage:

| **Tag**       | **Purpose**                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `<head>`      | Contains metadata, like `<title>`, `<meta>`, and `<link>` for stylesheets.   |
| `<body>`      | Holds visible content, like text, images, and interactive elements.          |
| `<div>`       | Generic container for grouping content, often for styling or layout.         |
| `<script>`    | Embeds or references JavaScript, e.g., `<script src="script.js"></script>`.  |
| `<link>`      | Links external resources, e.g., `<link rel="stylesheet" href="styles.css">`. |

**Example**:
```html
<head>
  <title>My Site</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Hello</h1>
  </div>
  <script src="script.js"></script>
</body>
```

In a Vite + React project, the `index.html` includes:
```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```
This loads the React app, as explained in the next section.

## 7. HTML5 Features

HTML5 enhances web capabilities with new elements and attributes:

- **Multimedia**: `<video>` and `<audio>` embed media without plugins.
  ```html
  <video controls>
    <source src="demo.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
  ```
- **Graphics**: `<canvas>` enables JavaScript-driven graphics.
  ```html
  <canvas id="myCanvas"></canvas>
  ```
- **Forms**: New input types (`email`, `date`, `range`) and attributes (`placeholder`, `required`).
  ```html
  <input type="date" required>
  <input type="range" min="0" max="100">
  ```

These features are useful for interactive portfolio elements, like project demos or contact forms, and are supported in JSX.

## 8. Using HTML with React

React uses JSX, a syntax resembling HTML, to define component structure. JSX is transpiled to JavaScript, but understanding HTML is crucial for writing effective components.

**Example Component**:
```jsx
function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <p>Built with React and Vite.</p>
    </div>
  );
}
```

In a Vite project, the `index.html` is the entry point:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

The `<script type="module" src="/src/main.tsx">` tag loads the React app, where `main.tsx` renders the app:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- **HTML’s Role**: Provides the initial structure and metadata, critical for SEO and accessibility.
- **JSX vs. HTML**: JSX uses HTML-like syntax but supports JavaScript expressions, e.g., `{variable}`.
- **Best Practice**: Use semantic HTML in JSX for accessibility and maintainability.

For React-specific HTML usage, see [React: JSX Documentation](https://react.dev/learn/writing-markup-with-jsx).

## 9. Best Practices

- **Validate HTML**: Use tools like the [W3C Markup Validator](https://validator.w3.org/) to ensure correct syntax.
- **Minimize `<div>` Overuse**: Prefer semantic elements over generic `<div>` tags.
- **Test Accessibility**: Use screen readers or tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) to verify accessibility.
- **Optimize SEO**: Regularly update meta descriptions and ensure fast load times.

## Conclusion

HTML is the cornerstone of web development, providing structure for both static sites and dynamic React applications. By mastering core elements, semantic HTML, accessibility, SEO, and React integration, you’ll build a professional portfolio site that’s accessible, discoverable, and engaging. The next chapter will explore CSS for styling your site.

## Key Citations
- [Wikipedia: HTML History and Overview](https://en.wikipedia.org/wiki/HTML)
- [MDN Web Docs: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [MDN Web Docs: HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN Web Docs: Structuring Documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
- [W3C: HTML5 Specification](https://www.w3.org/TR/html52/)
- [WebAIM: Introduction to Web Accessibility](https://webaim.org/intro/)
- [Google Developers: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [React: JSX Documentation](https://react.dev/learn/writing-markup-with-jsx)
- [W3C Markup Validator](https://validator.w3.org/)
- [Google Developers: Lighthouse Tool](https://developers.google.com/web/tools/lighthouse)