# Step 3: Project Setup, Linting, Vite

_Nice work finishing "Project Planning & Requirements" :sparkles:_

This chapter provides a comprehensive guide to initializing a web development project for your portfolio site using modern tools. We will set up a React application with TypeScript using Vite, a high-performance build tool. To ensure code quality, we’ll configure ESLint for linting and Prettier for consistent formatting. Additionally, we’ll integrate Tailwind CSS for rapid styling. This guide is designed for beginners, offering step-by-step instructions and explanations of key files and concepts.

## :keyboard: Activity: Chapter Tasks

1. Once you've reviewed the material, open the `resources/Quiz3.md` file to take the quiz.
2. Setup your project using the instructions provided in this chapter. Follow the steps to install Node.js, Vite, and Tailwind CSS, and configure ESLint and Prettier.

Remember: There's no need to create a new branch - simply edit the quiz file, commit your changes, and push them to the main branch.

## 1. Introduction to Project Setup

A robust project setup is the foundation of a successful web development project. It ensures code quality, scalability, and an efficient development workflow. By using modern tools, you can streamline development and focus on building your portfolio site. This chapter covers:

- **Installing Tools**: Setting up Node.js, npm, and Vite.
- **Project Creation**: Initializing a React + TypeScript project with Vite.
- **Directory Structure**: Understanding the project’s file organization.
- **Configuration Files**: Explaining `vite.config.ts`, `tsconfig.json`, and `package.json`.
- **Styling with Tailwind CSS**: Integrating a utility-first CSS framework.
- **Linting and Formatting**: Configuring ESLint and Prettier for code quality.

These steps will prepare you to build a professional portfolio site with best practices in place.

## 2. Installing Necessary Tools

Before starting, you need to install the tools required for the project.

### Node.js and npm

Node.js is a JavaScript runtime that allows you to execute JavaScript outside the browser. npm (Node Package Manager) is included with Node.js and manages project dependencies.

- **Installation**: Download the installer from the [Node.js website](https://nodejs.org/) and follow the instructions for your operating system (Windows, macOS, or Linux).
- **Verification**: After installation, check the versions to confirm:

```bash
node --version
npm --version
```

- **Requirement**: Vite requires Node.js version 18+ or 20+. Ensure you have a compatible version installed.

### Vite

Vite is a modern build tool designed for speed and efficiency. It uses native ES modules for a fast development server and leverages Rollup for optimized production builds. We’ll use Vite to scaffold our project, so no separate installation is needed before creating the project.

## 3. Setting Up a React + TypeScript Project with Vite

Vite simplifies project setup with templates for popular frameworks like React. We’ll create a React project with TypeScript for type safety and modern JavaScript features.

### Creating the Project

Run the following command to scaffold a new Vite project:

```bash
npm create vite@latest web-dev -- --template react-ts
```

- **Explanation**:
  - `npm create vite@latest`: Uses the `create-vite` tool to initialize a project.
  - `web-dev`: The project name (replace with your preferred name).
  - `-- --template react-ts`: Specifies the React + TypeScript template.

Follow the prompts if any appear, or the project will be created automatically.

### Installing Dependencies

Navigate to the project directory and install dependencies:

```bash
cd web-dev
npm install
```

This installs React, TypeScript, and Vite-related packages defined in `package.json`.

### Running the Development Server

Start the development server to preview your application:

```bash
npm run dev
```

The server typically runs at `http://localhost:5173`. Open this URL in your browser to see the default Vite + React template.

### Why Choose Vite?

Vite offers significant advantages over traditional bundlers like Webpack, making it ideal for beginners and professionals alike:

- **Instant Server Startup**: Vite uses native ES modules, serving code directly to the browser without pre-bundling everything, resulting in near-instant server starts.
- **Fast Hot Module Replacement (HMR)**: Changes to your code are reflected in the browser almost instantly, speeding up development.
- **Efficient Production Builds**: Vite uses Rollup to create optimized bundles with features like code splitting and tree-shaking.
- **Performance Comparison**: Studies suggest Vite’s development server starts 2–3× faster than Webpack due to its on-demand bundling approach, as noted in resources like [Kinsta’s Vite vs. Webpack Comparison](https://kinsta.com/blog/vite-vs-webpack/).

For more details, explore the [Vite Documentation](https://vite.dev/guide/).

## 4. Understanding Directory Structure

After creating the project, Vite generates a standard directory structure. Understanding this structure helps you organize your code effectively.

| **File/Folder**       | **Description**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `public/`             | Static assets (e.g., images, fonts) served directly without processing.          |
| `src/`                | Source code for the application.                                                |
| `src/assets/`         | Assets like images or SVGs used in your components.                             |
| `src/components/`     | Reusable React components (may need to be created manually).                     |
| `src/context/`        | Context API providers for managing global state.                                |
| `src/data/`           | Mock data or API response structures for development and testing.               |
| `src/types/`          | Custom TypeScript types and interfaces.                                         |
| `src/hooks/`          | Custom React hooks for reusable logic.                                          |
| `src/utils/`          | Utility functions or helper methods.                                            |
| `src/App.tsx`         | Main application component, defining the app’s structure.                       |
| `src/main.tsx`        | Entry point, rendering the app into the DOM.                                    |
| `index.html`          | HTML template, serving as the app’s entry point.                                |
| `vite.config.ts`      | Vite configuration file for plugins and build settings.                         |
| `tsconfig.json`       | TypeScript compiler configuration.                                              |
| `tsconfig.node.json`  | TypeScript configuration for Node.js-specific files (e.g., `vite.config.ts`).   |
| `package.json`        | Project metadata, scripts, and dependencies.                                    |

This structure is minimal yet flexible, allowing you to add folders like `hooks/` or `utils/` as your project grows.

## 5. Configuration Files

Configuration files define how your project behaves, from build settings to type checking. Below, we explain the key files and their contents.

### vite.config.ts

The [`vite.config.ts`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/vite.config.ts) file customizes Vite’s behavior, such as enabling plugins or setting build options. A default configuration for a React + TypeScript project looks like:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

- **Key Elements**:
  - `defineConfig`: A helper to provide TypeScript support and better IDE integration.
  - `plugins: [react()]`: Enables React support, including JSX compilation and Fast Refresh for HMR.
  - Comments like `// https://vite.dev/config/`: Link to Vite’s configuration documentation for reference.

You can extend this file later to add more plugins or customize settings like the server port.

### tsconfig.json

The [`tsconfig.json`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/tsconfig.json) file configures the TypeScript compiler, ensuring your code is type-checked and compiled correctly. A typical configuration is:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- **Key Options**:
  - `"target": "ESNext"`: Compiles to the latest ECMAScript features.
  - `"lib": ["DOM", "DOM.Iterable", "ESNext"]`: Includes browser and modern JavaScript APIs.
  - `"strict": true`: Enables strict type-checking for better code quality.
  - `"jsx": "react-jsx"`: Configures JSX for React, allowing TypeScript to process `.tsx` files.
  - `"include": ["src"]`: Specifies that only the `src/` folder is type-checked.

The `tsconfig.node.json` file, referenced here, configures TypeScript for Node.js-specific files like `vite.config.ts`.

### package.json

The [`package.json`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/package.json) file contains project metadata, scripts, and dependencies. A default example is:

```json
{
  "name": "my-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

- **Key Sections**:
  - `"scripts"`: Defines commands like `npm run dev` (starts the development server), `npm run build` (creates a production build), and `npm run preview` (previews the production build).
  - `"dependencies"`: Lists runtime dependencies like React and React DOM.
  - `"devDependencies"`: Includes development tools like TypeScript, Vite, and the React plugin.
  - `"type": "module"`: Enables ES modules, aligning with Vite’s architecture.

## 6. Setting Up Tailwind CSS

Tailwind CSS is a utility-first CSS framework that simplifies styling by providing pre-defined classes. It integrates seamlessly with Vite, especially with the latest Tailwind CSS v4. We will talk more about Tailwind CSS in the 5th chapter, but for now, we’ll set it up to ensure your project is ready for styling.

### Installation and Configuration

Follow these steps to set up Tailwind CSS:

1. **Install Tailwind CSS and the Vite Plugin**:

```bash
npm install tailwindcss @tailwindcss/vite
```

2. **Configure the Vite Plugin**:

Update `vite.config.ts` to include the Tailwind CSS plugin:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

3. **Create a Tailwind Configuration File**:

Generate a `tailwind.config.js` file:

```bash
npx tailwindcss init
```

Update it to specify the paths to your template files:

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

- **Explanation**: The `content` array tells Tailwind which files to scan for class names, ensuring only used styles are included in the final CSS.

4. **Import Tailwind CSS**:

In your `src/index.css` file, add:

```css
@import "tailwindcss";
```

5. **Start the Development Server**:

Run `npm run dev` to ensure Tailwind is integrated correctly.

6. **Use Tailwind Classes**:

In your React components, apply Tailwind classes. For example, in `src/App.tsx`:

```tsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello, World!
    </h1>
  )
}
```

This applies a large, bold, underlined heading style.

### Benefits of Tailwind CSS

- **Rapid Development**: Utility classes like `text-3xl` or `font-bold` eliminate the need to write custom CSS.
- **Small Bundle Size**: Tailwind removes unused classes during production builds, optimizing performance.
- **Vite Integration**: The `@tailwindcss/vite` plugin simplifies setup, requiring minimal configuration.

For more details, refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite).

## 7. Linting and Formatting

Linting and formatting tools ensure your code is consistent, error-free, and adheres to best practices. We’ll use ESLint for linting and Prettier for formatting, configured to work with TypeScript and React.

### Installing ESLint and Prettier

Install the necessary packages:

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint-plugin-prettier prettier
```

- **Package Roles**:
  - `eslint`: Core ESLint tool for linting JavaScript and TypeScript.
  - `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`: Enable TypeScript support.
  - `eslint-plugin-react` and `eslint-plugin-react-hooks`: Add React-specific linting rules.
  - `eslint-config-prettier` and `eslint-plugin-prettier`: Integrate Prettier with ESLint, disabling conflicting rules.

### Configuring ESLint

Create an `eslint.config.js` file in the project root to configure ESLint. This example uses ESLint v9’s flat configuration format, suitable for modern projects:

```js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
).concat(eslintPluginPrettier)
```

- **Key Configurations**:
  - `ignores: ['dist']`: Excludes the `dist/` folder (build output) from linting.
  - `extends`: Inherits recommended rules from ESLint and TypeScript-ESLint.
  - `files`: Targets `.ts` and `.tsx` files.
  - `plugins`: Adds React, React Hooks, and React Refresh (for Vite’s HMR) support.
  - `.concat(eslintPluginPrettier)`: Integrates Prettier’s recommended configuration, ensuring ESLint and Prettier work together.

### Configuring Prettier

Create a `.prettierrc` file to define formatting preferences:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

- **Options Explained**:
  - `"singleQuote": true`: Uses single quotes instead of double quotes for strings.
  - `"trailingComma": "es5"`: Adds trailing commas in objects and arrays where valid in ES5.

These settings are minimal but effective. You can customize further based on your team’s style guide, as detailed in the [Prettier Documentation](https://prettier.io/docs/en/options.html).

### Running the Linter

Add a linting script to `package.json`:

```json
"scripts": {
  "lint": "eslint src --ext .ts,.tsx"
}
```

Run the linter to check your code:

```bash
npm run lint
```

This command scans the `src/` folder for issues in `.ts` and `.tsx` files, reporting errors or warnings based on the configured rules.

### Enhancing the Development Experience

To make linting and formatting seamless:

- **VSCode Integration**: Install the ESLint and Prettier extensions in VSCode. Enable `"editor.formatOnSave": true` in your VSCode settings to format files automatically on save.
- **Pre-Commit Hooks**: Consider using tools like Husky and lint-staged to run ESLint and Prettier before commits, ensuring only clean code is committed.

## 8. Best Practices and Tips

To maintain a high-quality project, follow these best practices:

- **Use Version Control**: Initialize a Git repository (`git init`) to track changes and collaborate. Host your project on platforms like GitHub for backup and visibility.
- **Organize Code**: Structure your `src/` folder with subdirectories like `components/`, and `utils/` to separate concerns.
- **Regular Linting**: Run `npm run lint` frequently to catch issues early. Fix warnings to maintain a clean codebase.
- **Consistent Formatting**: Rely on Prettier to enforce a uniform code style, reducing debates over formatting.
- **Testing Setup**: Plan to add a testing framework like Vitest (optimized for Vite) to write unit and integration tests, ensuring your components work as expected.
- **Optimize Tailwind Usage**: In `tailwind.config.js`, ensure `content` paths are accurate to avoid including unused styles, keeping your CSS bundle small.
- **Monitor Performance**: After running `npm run build`, check the output file sizes in the `dist/` folder. Use tools like Lighthouse to identify performance bottlenecks.

### Common Pitfalls to Avoid

- **Incorrect Node.js Version**: Ensure you’re using Node.js 18+ or 20+, as Vite may not work with older versions.
- **Missing Dependencies**: Always run `npm install` after cloning or creating a project to avoid runtime errors.
- **Overwriting Default Configs**: Be cautious when modifying `tsconfig.json` or `vite.config.ts`, as incorrect settings can break the build.
- **Ignoring Linting Errors**: Address ESLint warnings promptly, as they often indicate potential bugs or maintainability issues.

## 9. Conclusion

By following this guide, you’ve set up a modern web development project with Vite, React, and TypeScript, integrated Tailwind CSS for styling, and configured ESLint and Prettier for code quality. This setup provides a fast, scalable foundation for your portfolio site, allowing you to focus on building features like project showcases and contact forms. In the next chapter, we’ll explore designing and developing the site’s components, leveraging the tools established here.

## References

- [Vite Documentation](https://vite.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Kinsta’s Vite vs. Webpack Comparison](https://kinsta.com/blog/vite-vs-webpack/)
- [Medium Article on ESLint and Prettier Setup](https://medium.com/%40josprima.id/setup-reactjs-typescript-project-with-vite-eslint-and-prettier-2024-e714f7daca1a)