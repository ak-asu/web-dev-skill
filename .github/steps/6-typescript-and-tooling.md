# Chapter 6: TypeScript & Tooling

This chapter provides a comprehensive guide to using TypeScript in your React portfolio site, built with Vite, to enhance code quality and maintainability. TypeScript, a statically typed superset of JavaScript, adds type safety, catching errors early and improving developer productivity. We'll explore TypeScript's core concepts, its application in React, common types, project configuration, linting and formatting tools, and how to define interfaces for your portfolio's data structures. Designed for beginners, this guide uses clear explanations and practical examples to help you strengthen your codebase.

## :keyboard: Activity: Chapter Tasks

1. **Complete the TypeScript Quiz**: Answer questions correctly in the `resources/Quiz6.md` file
2. **Configure TypeScript Files**:
   - Set up `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`
   - Configure proper settings for React and TypeScript
3. **Define TypeScript Types**:
   - Create interfaces for portfolio data in `src/types/index.ts`
4. **Prepare Data Files**:
   - Set up structured JSON data files in `src/data/json/`
   - Create the data index file with proper typing
5. **Prepare Asset Files**:
   - Add necessary images and assets to `src/assets/`

## 1. Understanding TypeScript

TypeScript extends JavaScript by adding optional static types, which are checked during compilation. Developed by Microsoft, it's widely used in modern web development for its ability to improve code reliability and tooling support.

### What is TypeScript?
- A superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code.
- Adds type annotations (e.g., `let name: string`) to define variable types.
- Compiles to plain JavaScript, ensuring compatibility with browsers and Node.js.

### TypeScript vs. JavaScript
| **Aspect**            | **JavaScript**                              | **TypeScript**                              |
|-----------------------|---------------------------------------------|---------------------------------------------|
| **Typing**            | Dynamic (types checked at runtime)          | Static (types checked at compile time)      |
| **Error Detection**   | Errors often found during execution         | Errors caught during development            |
| **Tooling**           | Basic IDE support                           | Enhanced autocompletion, refactoring        |
| **Learning Curve**    | Simpler, no type knowledge needed           | Requires learning types and syntax          |

### Benefits for Your Portfolio Site
- **Error Prevention**: Catches type mismatches, like passing a number to a string prop.
- **Code Clarity**: Types act as documentation, making components easier to understand.
- **Scalability**: Simplifies managing complex data, like project lists or form inputs.
- **IDE Support**: Tools like VSCode provide autocompletion and error highlighting.

### Basic Syntax
TypeScript adds type annotations to JavaScript:

```typescript
// JavaScript
let age = 25;
function add(a, b) {
  return a + b;
}

// TypeScript
let age: number = 25;
function add(a: number, b: number): number {
  return a + b;
}
```

For a deeper dive, explore the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).

## 2. TypeScript in React

In your React project, TypeScript ensures components receive the correct props, state, and event data, reducing bugs in features like project cards or contact forms.

### Typing Props
Use interfaces or type aliases to define prop types. Interfaces are preferred for object shapes due to their extensibility.

```typescript
interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

Alternatively, use a type alias:

```typescript
type ProjectCardProps = {
  title: string;
  description: string;
};
```

### Typing State
For functional components with `useState`, specify the state type using generics.

```typescript
import { useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};
```

For complex state, use an interface:

```typescript
interface FormState {
  name: string;
  email: string;
}

const [form, setForm] = useState<FormState>({ name: '', email: '' });
```

### Typing Events
Event handlers require specific event types, like `React.ChangeEvent` or `React.MouseEvent`.

```typescript
const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="Enter email"
      />
      <button type="submit" className="bg-primary text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```

### Using React.FC
`React.FC` (Functional Component) types functional components and includes `children` by default. However, some developers avoid it for explicitness.

```typescript
// With React.FC
const Header: React.FC<{ title: string }> = ({ title, children }) => (
  <header>{title}{children}</header>
);

// Without React.FC
interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header = ({ title, children }: HeaderProps) => (
  <header>{title}{children}</header>
);
```

For beginners, `React.FC` is simpler, but explicit typing offers more control. See the [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components) for guidance.

## 3. Common TypeScript Types

TypeScript provides a range of types to model your portfolio site's data.

### Primitive Types
- `string`: Text, e.g., `let title: string = "Project 1";`
- `number`: Numbers, e.g., `let id: number = 1;`
- `boolean`: True/false, e.g., `let isPublished: boolean = true;`
- `null` and `undefined`: Absence of value.

### Arrays and Tuples
- **Arrays**: `string[]` or `Array<string>` for lists of the same type.
- **Tuples**: Fixed-length arrays with specific types.

```typescript
let skills: string[] = ['React', 'TypeScript'];
let userInfo: [string, number] = ['Alice', 30]; // Name and age
```

### Interfaces and Type Aliases
Define object shapes for consistent data.

```typescript
interface Project {
  id: number;
  title: string;
  description?: string; // Optional
}

type Certification = {
  id: number;
  name: string;
  issuer: string;
};
```

Interfaces can be extended:

```typescript
interface ExtendedProject extends Project {
  link: string;
}
```

### Enums
Enums define named constants, useful for fixed options.

```typescript
enum ProjectStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED',
}

let status: ProjectStatus = ProjectStatus.Published;
```

### Union and Intersection Types
- **Union**: Allows multiple types, e.g., `number | string`.
- **Intersection**: Combines types, e.g., `TypeA & TypeB`.

```typescript
type ID = number | string;
let projectId: ID = 'proj-001';

interface Details {
  category: string;
}
type FullProject = Project & Details;
```

### Generics
Generics create reusable components that work with multiple types.

```typescript
function getFirst<T>(items: T[]): T {
  return items[0];
}

let firstSkill = getFirst<string>(['React', 'TypeScript']); // 'React'
```

In React, generics are useful for components like lists:

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>{items.map((item, index) => <li key={index}>{renderItem(item)}</li>)}</ul>
);
```

For more on types, see [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

## 4. Configuring tsconfig.json

The `tsconfig.json` file configures the TypeScript compiler. Your Vite project includes a default configuration optimized for React.

### Key Options
| **Option**                | **Purpose**                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| `target`                  | Sets the JavaScript version (e.g., `"ESNext"`) for compiled output.         |
| `module`                  | Specifies module system (e.g., `"ESNext"`) for Vite's ES modules.           |
| `jsx`                     | Enables JSX support (e.g., `"react-jsx"`) for React components.             |
| `strict`                  | Enforces strict type checking for better code quality.                      |
| `noEmit`                  | Prevents TypeScript from emitting JavaScript, as Vite handles builds.       |
| `include`                 | Specifies files to compile (e.g., `["src"]`).                               |

Example `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### IDE Support
VSCode provides excellent TypeScript support:
- **Autocompletion**: Suggests types and properties.
- **Error Highlighting**: Shows type errors in real-time.
- **Go to Definition**: Navigates to type or function definitions.

Ensure VSCode uses the workspace TypeScript version (check the status bar). For details, see [TypeScript Compiler Options](https://www.typescriptlang.org/tsconfig).

## 5. Linting and Formatting for TypeScript

Linting and formatting ensure consistent, error-free code. Your project (from Chapter 3) includes ESLint and Prettier, which we'll extend for TypeScript.

### Extending ESLint with @typescript-eslint
Install TypeScript-specific ESLint plugins:

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Update `eslint.config.js` (for ESLint v9+):

```javascript
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

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
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  }
).concat(eslintPluginPrettier);
```

This configuration:
- Applies TypeScript rules to `.ts` and `.tsx` files.
- Integrates React and Prettier rules.
- Ignores the `dist` folder.

Run linting with:

```bash
npm run lint
```

### Integrating Prettier
Ensure Prettier is set up (from Chapter 3):

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Verify `.prettierrc`:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

Enable format-on-save in VSCode's `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

For more on linting, see [ESLint Documentation](https://eslint.org/docs/latest/) and [Prettier Documentation](https://prettier.io/docs/en/index.html).

## 6. Defining Interfaces for the Portfolio Site

Interfaces ensure type safety for your portfolio's data, such as projects or form inputs.

### Project Interface
For a project card displaying title, description, image, and link:

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Site',
    description: 'A responsive online store built with React.',
    imageUrl: '/images/project1.jpg',
    link: 'https://example.com',
  },
  // Add more projects
];

const ProjectList: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {projects.map(project => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
);
```

### Form Data Interface
For a contact form with name, email, and message:

```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Message"
      />
      <button type="submit" className="bg-primary text-white p-2 rounded">
        Send
      </button>
    </form>
  );
};
```

### Best Practices for Interfaces
- Use clear, specific names (e.g., `Project` instead of `Data`).
- Include optional properties (`?`) for flexibility.
- Break complex interfaces into smaller ones for reusability.
- Use `readonly` for immutable properties if needed.

```typescript
interface Image {
  url: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  image: Image;
}
```

## 7. Best Practices and Tips
- **Start Small**: Begin with simple types and gradually add complexity.
- **Leverage IDE Features**: Use VSCode's TypeScript support for quick fixes and suggestions.
- **Run Linting Regularly**: Catch issues early with `npm run lint`.
- **Avoid `any` Type**: Be explicit to maximize type safety.
- **Test Components**: Ensure typed props and state work as expected in your UI.


## 8. Required Tasks and Examples

For the tasks in this chapter, you'll need to create several key files:

### TypeScript Configuration Files

Create or update your TypeScript configuration files.
- `tsconfig.json`: Base configuration for TypeScript. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/tsconfig.json).
- `tsconfig.app.json`: App-specific configuration for React and TypeScript. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/tsconfig.app.json).
- `tsconfig.node.json`: Configuration for Vite's Node environment. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/tsconfig.node.json).

### Type Definitions

Create a data index file to import and export your data with proper typing. The types are used throughout your application to ensure consistent data handling. A sample is provided in [`src/data/index.ts`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/data/index.ts).

Create `src/types/index.ts` with these interfaces for your portfolio data:
- `Project`
- `Certification`
- `Education`
- `Experience`
- `Skill`
- `Achievement`
- `Social`
- `PersonalInfo`

### Data Files

Create the following data files in the `src/data/json/` directory:
- `education.json`
- `certifications.json`
- `achievements.json`
- `personal-info.json`
- `socials.json`
- `projects.json`
- `skills.json`
- `experience.json`

Add your data in JSON format. Each file should contain an array of objects representing the respective data type. For example, `projects.json` might look like this:

```json
[
  {
    "id": 1,
    "title": "E-commerce Site",
    "description": "A responsive online store built with React.",
    "imageUrl": "/images/project1.jpg",
    "link": "https://example.com"
  }
]
```

A sample is provided in [`src/data/json/`](https://github.com/ak-asu/web-dev-skill/tree/main/resources/example/src/data/json/).

### Assets

Create an assets folder at `src/assets/` and add placeholder images for:
- Profile image
- Project thumbnails
- Logo (if needed)

You can use SVG files, placeholder images, or your own images. An assets folder is used for storing all static files like images, fonts, and icons. A sample is provided in [`src/assets/`](https://github.com/ak-asu/web-dev-skill/tree/main/resources/example/src/assets/).

## 9. Conclusion
TypeScript transforms your React development by adding type safety, reducing errors, and enhancing tooling. By typing props, state, and events, configuring your project with `tsconfig.json`, and using ESLint and Prettier, you create a robust codebase for your portfolio site. Defining interfaces for projects and forms ensures consistent data handling. As you build, experiment with TypeScript's features to write cleaner, more maintainable code.

The next chapter will explore JavaScript and interactivity, building on this foundation to add dynamic features to your site.

## Key Citations
- [TypeScript Official Documentation: Handbook and Guides](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet: Practical Examples](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Generics: Reusable Type Definitions](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Compiler Options: Configuration Reference](https://www.typescriptlang.org/tsconfig)
- [ESLint Documentation: Linting Rules and Setup](https://eslint.org/docs/latest/)
- [Prettier Documentation: Code Formatting Options](https://prettier.io/docs/en/index.html)