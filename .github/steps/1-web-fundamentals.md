# Step 1: Web Fundamentals

_Welcome to "Learning Web Fundamentals"! :wave:_

This guide provides a comprehensive introduction to web fundamentals, designed for beginners. It covers how the web works, the roles of HTML, CSS, and JavaScript, browser rendering, and other essential topics to establish a solid foundation for web development.

## :keyboard: Activity: Chapter Tasks

1. Once you've reviewed the material, open the `resources/Quiz1.md` file to take the quiz.
2. For each question in the quiz, place an 'X' inside the brackets [ ] for your chosen answer.
3. After you've answered all questions, commit your changes to the `resources/Quiz1.md` file.
4. The GitHub Actions workflow will automatically check your answers and, if correct, will progress you to the next chapter.

Remember: There's no need to create a new branch - simply edit the quiz file, commit your changes, and push them to the main branch.

## 1. Introduction to the Web

The World Wide Web (WWW), often called the Web, is an information system that enables content sharing over the Internet through user-friendly interfaces. It was invented by Tim Berners-Lee in 1989 and has transformed how we access and share information.

### What is the World Wide Web?
- The Web is a collection of interconnected documents and resources, linked by hyperlinks and identified by URLs (Uniform Resource Locators).
- It operates on the Internet, a global network of computers, but is distinct as an application running on this infrastructure.
- Web browsers (e.g., Chrome, Firefox) access web resources via HTTP, displaying content like text, images, and videos.

### Brief History of the Web
- **1989**: Tim Berners-Lee proposes the Web at CERN to facilitate information sharing among researchers.
- **1990**: The first web browser and server are developed.
- **1993**: CERN releases the Web to the public domain, spurring widespread adoption.
- **1994**: The World Wide Web Consortium (W3C) is founded to standardize web technologies.
- **1995-2000**: The dot-com boom drives commercialization and growth.
- **2000s-present**: Advances in mobile web, social media, and interactive applications shape the modern Web.

For more details, visit [Wikipedia: World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web).

## 2. How the Web Works

Understanding the mechanics of the Web involves exploring client-server architecture, HTTP, URLs, and DNS.

### Client-Server Architecture
The Web relies on a client-server model, where:
- **Clients** are devices or applications (e.g., web browsers) that request resources.
- **Servers** are computers that store and provide resources, such as web pages or databases.

**How it works**:
- A user enters a URL in a browser (client).
- The browser sends a request to the server hosting the website.
- The server processes the request and returns resources, which the browser displays.

**Analogy**: Think of a restaurant where customers (clients) order food from waiters (servers), who fetch and deliver the requested items.

*Source: [GeeksforGeeks: Client-Server Architecture](https://www.geeksforgeeks.org/client-server-architecture-system-design/)*

### HTTP Protocol
HTTP (Hypertext Transfer Protocol) governs communication between clients and servers.

- **Requests**: Clients send requests specifying actions (e.g., retrieve a webpage).
- **Responses**: Servers reply with resources or error messages.
- **Stateless**: Each request is independent, with no memory of previous interactions.

**Key Components**:
- **HTTP Methods**:
  - **GET**: Retrieves a resource (e.g., a webpage).
  - **POST**: Submits data to the server (e.g., form submissions).
  - Others include PUT, DELETE, HEAD, etc.
- **Status Codes**:
  - **200 OK**: Request successful.
  - **404 Not Found**: Resource not available.
  - **500 Internal Server Error**: Server issue.
- **Headers**: Provide metadata, like content type or caching instructions.

**Example**:
- Typing `example.com` in a browser sends a GET request.
- The server responds with HTML, which the browser renders.

Learn more at [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

### URLs and DNS
- **URL**: A string identifying a web resource, with components like:
  - **Protocol**: `http` or `https`.
  - **Domain**: `example.com`.
  - **Path**: `/about`.
  - **Parameters**: `?id=123`.
- **DNS (Domain Name System)**: Translates domain names (e.g., `example.com`) into IP addresses (e.g., `192.0.2.1`) that computers use to locate servers.

**Process**:
- A browser queries a DNS server for the IP address of a domain.
- The DNS server responds, enabling the browser to connect to the correct server.

## 3. HTML: The Structure of Web Pages

HTML (Hypertext Markup Language) is the backbone of web pages, defining their structure and content using tags.

### Basic HTML Elements
- `<html>`: Root element of the page.
- `<head>`: Contains metadata (e.g., title, character encoding).
- `<body>`: Holds visible content.
- `<h1>` to `<h6>`: Headings of varying importance.
- `<p>`: Paragraphs.
- `<a>`: Hyperlinks.
- `<img>`: Images.

**Example HTML**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>This is a simple webpage.</p>
    <a href="https://example.com">Visit Example</a>
</body>
</html>
```

### Semantic HTML
- Uses tags like `<article>`, `<section>`, `<nav>`, and `<footer>` to convey meaning.
- Improves accessibility and search engine optimization (SEO).
- Example: `<nav>` for navigation menus, `<main>` for primary content.

For a comprehensive guide, see [MDN: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

## 4. CSS: Styling Web Pages

CSS (Cascading Style Sheets) controls the visual presentation of HTML, including colors, fonts, and layouts.

### CSS Syntax
A CSS rule consists of:
- **Selector**: Targets HTML elements (e.g., `h1`, `.class`, `#id`).
- **Declaration Block**: Contains properties and values (e.g., `color: blue;`).

**Example**:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

### Linking CSS to HTML
- **Inline**: Using the `style` attribute (e.g., `<p style="color: red;">`).
- **Internal**: Within a `<style>` tag in `<head>`.
- **External**: Via a `<link>` tag to a `.css` file.

**External CSS Example**:
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Sample CSS File (`styles.css`)**:
```css
body {
    background-color: #f0f0f0;
}
p {
    font-family: Arial, sans-serif;
}
```

Explore more at [MDN: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## 5. JavaScript: Adding Interactivity

JavaScript is a programming language that enables dynamic and interactive web features.

### Basic Concepts
- **Variables**: Store data (e.g., `let name = "Alice";`).
- **Functions**: Reusable code blocks (e.g., `function greet() {}`).
- **Events**: Respond to user actions (e.g., clicks, key presses).
- **DOM Manipulation**: Modify HTML/CSS dynamically.

**Example: Interactive Button**:
```html
<button onclick="changeText()">Click Me</button>
<p id="demo">Hello</p>

<script>
function changeText() {
    document.getElementById("demo").innerHTML = "World!";
}
</script>
```

### Role in Web Development
- Adds interactivity (e.g., form validation, animations).
- Manipulates the DOM to update content without reloading.
- Integrates with APIs for dynamic data.

Learn more at [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## 6. How Browsers Render Websites

Browsers convert HTML, CSS, and JavaScript into visible web pages through a multi-step process.

### Rendering Process
1. **Parsing HTML**: Constructs the Document Object Model (DOM), a tree of HTML elements.
2. **Parsing CSS**: Builds the CSS Object Model (CSSOM), defining styles.
3. **Render Tree Construction**: Combines DOM and CSSOM, excluding non-visual elements (e.g., `<script>`).
4. **Layout**: Calculates element positions and sizes.
5. **Painting**: Renders pixels on the screen.
6. **Compositing** (optional): Combines layers for efficient rendering.

**Analogy**: Think of building a house:
- HTML is the blueprint (structure).
- CSS is the interior design (style).
- JavaScript adds functionality (like lights turning on).
- The browser assembles and paints the final house.
  
*Source: [MDN: How browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work)*

For details, see [MDN: How browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work).

## 7. Additional Topics

### Web Accessibility
- Ensures websites are usable by everyone, including those with disabilities.
- Practices include:
  - Semantic HTML for screen readers.
  - Alternative text for images (`alt` attribute).
  - Keyboard navigation support.
- Benefits: Wider audience reach, legal compliance.

### Responsive Design
- Adapts websites to various devices (e.g., phones, tablets, desktops).
- Techniques:
  - CSS media queries (e.g., `@media (max-width: 600px) {}`).
  - Flexible layouts using percentages or `rem`/`em` units.
- Example:
  ```css
  @media (max-width: 600px) {
      body {
          font-size: 16px;
      }
  }
  ```

### Web Performance
- Optimizes loading speed for better user experience.
- Strategies:
  - Minimize file sizes (e.g., compress images).
  - Use browser caching.
  - Reduce HTTP requests.
- Tools: Google Lighthouse, PageSpeed Insights.

### Web Security
- Protects users and data with:
  - **HTTPS**: Encrypts communication using SSL/TLS.
  - **Content Security Policy (CSP)**: Prevents cross-site scripting (XSS).
  - **Input Validation**: Guards against malicious inputs.
- Importance: Builds trust, prevents data breaches.

### APIs
- Application Programming Interfaces enable communication between systems.
- Example: Fetching weather data from an external service.
- **Sample JavaScript Fetch**:
  ```javascript
  fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data));
  ```

### Web Hosting and Domains
- **Web Hosting**: Servers that store and serve website files.
- **Domains**: Human-readable addresses (e.g., `example.com`) registered via registrars.
- Process: Purchase a domain, host files on a server, and link them via DNS.

### SEO Basics
- Search Engine Optimization improves website visibility on search engines.
- Techniques:
  - Use descriptive meta tags (e.g., `<meta name="description" content="...">`).
  - Optimize images with `alt` text.
  - Ensure fast loading times.

For further exploration, visit [MDN Web Docs](https://developer.mozilla.org/en-US/).

## 8. Putting It All Together

HTML, CSS, and JavaScript work synergistically:
- **HTML** provides the structure (e.g., a webpage’s skeleton).
- **CSS** enhances appearance (e.g., colors and layouts).
- **JavaScript** adds interactivity (e.g., dynamic updates).

**Example: Simple Interactive Webpage**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Interactive Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p id="message">Click the button!</p>
    <button onclick="updateMessage()">Update Message</button>

    <script>
        function updateMessage() {
            document.getElementById("message").innerHTML = "Hello, Web World!";
        }
    </script>
</body>
</html>
```

This example demonstrates:
- HTML for structure (`<h1>`, `<p>`, `<button>`).
- CSS for styling (centered text, button padding).
- JavaScript for interactivity (updates text on click).

## 9. Learning Resources
- **MDN Web Docs**: Comprehensive tutorials on HTML, CSS, JavaScript, and more ([MDN Web Docs](https://developer.mozilla.org/en-US/)).
- **freeCodeCamp**: Free coding challenges and projects ([freeCodeCamp](https://www.freecodecamp.org/)).
- **W3Schools**: Beginner-friendly tutorials ([W3Schools](https://www.w3schools.com/)).
- **Codecademy**: Interactive web development courses ([Codecademy](https://www.codecademy.com/)).

## Key Citations
- [Wikipedia: World Wide Web - History and Overview](https://en.wikipedia.org/wiki/World_Wide_Web)
- [MDN: HTML - Hypertext Markup Language Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN: CSS - Cascading Style Sheets Tutorial](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN: JavaScript - Programming Language Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN: How browsers work - Rendering Process](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work)
- [GeeksforGeeks: Client-Server Architecture - System Design](https://www.geeksforgeeks.org/client-server-architecture-system-design/)
- [MDN: HTTP - Hypertext Transfer Protocol Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [freeCodeCamp: HTTP Basics - Protocol Explanation](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/)
- [freeCodeCamp: Web Development Basics - HTML, CSS, JavaScript](https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/)