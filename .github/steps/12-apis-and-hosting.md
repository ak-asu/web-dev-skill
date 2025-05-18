# Chapter 12: Configuration, Environment Variables, APIs, Integrations, CI/CD, Hosting

This chapter guides you through configuring your React portfolio site, built with Vite, TypeScript, and Tailwind CSS, for production, integrating external data via APIs, and automating deployment with continuous integration and continuous deployment (CI/CD). Designed for beginners, it covers environment variables, REST API consumption, secret management, dynamic content loading, error handling, and hosting on platforms like GitHub Pages or Vercel. Practical examples, such as fetching GitHub repositories for the Projects section and setting up GitHub Actions, ensure your site is scalable, secure, and maintainable, showcasing your skills professionally.

## :keyboard: Activity: Chapter Tasks

1. **Complete the APIs and Hosting Quiz**: Answer questions correctly in the `resources/Quiz12.md` file
2. **Implement Contact Component and API Integration**:
   - Create or update `src/components/Contact.tsx` with a functional contact form
   - Configure API handling for the contact form in `src/api/contact.ts`
   - Use environment variables to store configuration securely
3. **Setup Deployment Workflow**:
   - Create a deployment workflow in `.github/workflows/deploy.yml`
   - Configure GitHub Pages for automated deployment
   - Test that your site builds and deploys correctly

## 1. Introduction

Modern web applications require robust configuration, secure data integration, and automated workflows to ensure reliability and ease of maintenance. This chapter equips you with the skills to:
- Configure your Vite project using environment variables for different environments.
- Fetch and display dynamic data from REST APIs, enhancing your portfolio’s interactivity.
- Secure sensitive information like API keys using environment variables and GitHub Secrets.
- Automate testing, building, and deployment with GitHub Actions for CI/CD.
- Host your static site on GitHub Pages or Vercel, ensuring accessibility and scalability.

These practices transform your portfolio into a production-ready application, demonstrating your ability to handle real-world development workflows.

## 2. Environment Variables in Vite

Environment variables allow you to manage configuration settings that vary between environments, such as development and production, without hardcoding sensitive data like API keys.

### Understanding Environment Variables
Environment variables are key-value pairs defined outside your codebase, typically in `.env` files or CI/CD systems. In Vite, they are accessed via `import.meta.env`, but only variables prefixed with `VITE_` are exposed to client-side code for security.

### Setting Up Environment Variables
1. **Create `.env` Files**:
   - In your project root, create `.env` for development:
     ```
     VITE_API_URL=[invalid url, do not cite]
     VITE_GH_TOKEN=your_development_token
     ```
   - Create `.env.production` for production:
     ```
     VITE_API_URL=https://api.example.com
     VITE_GH_TOKEN=your_production_token
     ```

2. **Access Variables**:
   Use `import.meta.env` in your code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   const ghToken = import.meta.env.VITE_GH_TOKEN;
   console.log('API URL:', apiUrl);
   ```

3. **Environment Modes**:
   Vite uses modes to load the appropriate `.env` file:
   - Development: `vite` loads `.env`.
   - Production: `vite build` loads `.env.production`.
   - Custom modes: Use `vite --mode custom` with `.env.custom`.

### Best Practices
- **Never Commit `.env` Files**: Add `.env` and `.env.*` to `.gitignore` to prevent exposing secrets.
- **Validate Variables**: Check for missing variables at runtime:
  ```typescript
  if (!import.meta.env.VITE_GH_TOKEN) {
    console.error('GitHub token is missing');
  }
  ```
- **Use Descriptive Names**: Prefix with `VITE_` and use clear names like `VITE_API_URL`.

For more details, see [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html).

## 3. Application Configuration

Application configuration tailors your app’s behavior based on the environment, optimizing for development (e.g., debugging) or production (e.g., performance).

### Development vs. Production
| **Aspect**         | **Development**                          | **Production**                          |
|--------------------|------------------------------------------|-----------------------------------------|
| **Debugging**      | Enable logs, dev tools                  | Disable logs for performance            |
| **API Endpoints**  | Use local or mock APIs                  | Use live APIs                           |
| **Optimization**   | Unminified code for readability         | Minified, optimized code                |

### Configuring with Vite
Use `import.meta.env.MODE` to apply environment-specific logic:
```typescript
const isDev = import.meta.env.MODE === 'development';

if (isDev) {
  console.log('Running in development mode');
} else {
  // Production-specific logic
}
```

### Example: Feature Flags
Enable features like analytics only in production:
```env
# .env.production
VITE_ENABLE_ANALYTICS=true
```

```typescript
if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
  // Initialize analytics
}
```

This approach keeps your codebase flexible and maintainable.

## 4. Consuming REST APIs

REST APIs provide a standardized way to fetch data from external services, enabling dynamic content in your portfolio, such as live project data from GitHub.

### REST API Basics
REST (Representational State Transfer) APIs use HTTP methods (GET, POST, etc.) to interact with resources. Responses are typically JSON, making them easy to integrate with React.

### Using `fetch`
The `fetch` API is native to browsers and suitable for simple requests:
```typescript
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
```

### Using `axios`
`axios` simplifies requests with features like automatic JSON parsing:
```bash
npm install axios
```

```typescript
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};
```

### Example: GitHub API
Fetch your public GitHub repositories:
```typescript
const fetchRepos = async () => {
  const response = await fetch(`[invalid url, do not cite]);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};
```

For authenticated requests, include a token:
```typescript
const fetchRepos = async () => {
  const token = import.meta.env.VITE_GH_TOKEN;
  const response = await fetch(`[invalid url, do not cite] {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};
```

Learn more at [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [Axios Documentation](https://axios-http.com/docs/intro).

## 5. Example API Integration (Optional)

Let's implement a practical example: a contact form that sends messages using a third-party form handling service (Formspree). This integration demonstrates how to use environment variables, handle form submissions, and provide user feedback.

### Setting Up Formspree

[Formspree](https://formspree.io/) is a service that handles form submissions without requiring your own backend:

1. **Create a Formspree Account**: Sign up at [formspree.io](https://formspree.io/)
2. **Create a New Form**: From your dashboard, create a new form to get an endpoint URL
3. **Store the Endpoint**: Add it to your environment variables

```env
# .env
VITE_FORM_ENDPOINT=https://formspree.io/f/your-unique-form-id
```

### Creating the API Module

Create a dedicated module to handle form submissions in [`src/api/contact.ts`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/api/contact.ts)

### Implementing the Contact Component

Update your Contact component to use the API module. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/example/src/components/Contact.tsx).

### Key Learning Points

1. **Separation of Concerns**:
   - API logic is separated into its own module
   - Component focuses on UI and state management

2. **Error Handling**:
   - Validate form data before submission
   - Handle network errors and API response errors
   - Provide clear feedback to users

3. **User Experience**:
   - Show loading state during submission
   - Display success or error messages
   - Include honeypot field for spam protection

4. **Environment Variables**:
   - Store API endpoint in environment variables
   - Check for missing configuration at runtime

This example demonstrates a complete integration flow: user input → validation → API call → response handling → user feedback. The pattern can be adapted for other APIs in your portfolio, such as fetching projects from GitHub or integrating other third-party services.

## 6. Securing Secrets

Secrets, such as API keys or tokens, must be protected to prevent unauthorized access. Hardcoding secrets in source code risks exposure, especially in public repositories.

### Secrets vs. Environment Variables
- **Secrets**: Sensitive data like API keys, stored securely outside code (e.g., GitHub Secrets).
- **Environment Variables**: Configuration values, including secrets, injected into the application at runtime.

### Storing Secrets in Vite
Use `.env` files for local development, but never commit them:
```env
VITE_GH_TOKEN=your_development_token
```

For CI/CD, use GitHub Secrets:
1. Go to your repository’s “Settings” > “Secrets and variables” > “Actions”.
2. Add a secret named `GH_TOKEN` with your GitHub token.

### Using Secrets in GitHub Actions
Access secrets in workflows using `${{ secrets.SECRET_NAME }}`:
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build
        run: npm run build
        env:
          VITE_GH_TOKEN: ${{ secrets.GH_TOKEN }}
```

GitHub masks secrets in logs, ensuring they remain secure.

## 7. Dynamic Content Loading

Dynamically loading content from APIs keeps your portfolio up-to-date and engaging. In React, use `useEffect` to fetch data when components mount.

### Example: Fetching GitHub Repos for Projects
Update `src/components/Projects.tsx` to fetch and display GitHub repositories:
```typescript
import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const token = import.meta.env.VITE_GH_TOKEN;
        const response = await fetch(`[invalid url, do not cite] {
          headers: token ? { Authorization: `token ${token}` } : {},
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Failed to load projects: {error}</div>;
  }

  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{repo.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{repo.description || 'No description'}</p>
            <a href={repo.html_url} className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
```
- **useEffect**: Fetches data on mount, using the GitHub token if available.
- **State Management**: Tracks loading and error states for user feedback.
- **Fallback UI**: Displays loading or error messages when appropriate.

Replace `yourusername` with your GitHub username.

## 8. Error Handling in API Requests

Robust error handling ensures your portfolio remains usable even when APIs fail.

### Common Error Scenarios
| **Scenario**         | **Description**                              | **Handling Strategy**                     |
|----------------------|----------------------------------------------|-------------------------------------------|
| **Network Error**    | No internet or server down                  | Display user-friendly message, retry option |
| **HTTP Error**       | 404 (Not Found), 403 (Forbidden)            | Specific messages based on status code    |
| **Parsing Error**    | Invalid JSON or unexpected data             | Log error, show fallback UI               |

### Enhanced Error Handling
Extend the Projects example with detailed error handling:
```typescript
useEffect(() => {
  const fetchRepos = async () => {
    try {
      const token = import.meta.env.VITE_GH_TOKEN;
      const response = await fetch(`[invalid url, do not cite] {
        headers: token ? { Authorization: `token ${token}` } : {},
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('GitHub user not found');
        } else if (response.status === 403) {
          throw new Error('API rate limit exceeded');
        }
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data: Repo[] = await response.json();
      setRepos(data);
    } catch (err) {
      if (err instanceof TypeError) {
        setError('Network error. Please check your connection.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchRepos();
}, []);
```

### Error Boundary
For unexpected errors, use an error boundary to catch rendering issues:
```typescript
import { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-red-500">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const App: React.FC = () => (
  <ErrorBoundary>
    <Projects />
  </ErrorBoundary>
);
```

## 9. Continuous Integration with GitHub Actions

Continuous Integration (CI) automates testing and building your code on every push or pull request, catching issues early.

### Setting Up CI (Optional)
Create `.github/workflows/ci.yml`:
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type-checking
        run: npm run type-check

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
        env:
          VITE_GH_TOKEN: ${{ secrets.GH_TOKEN }}
```

### Required Scripts
Ensure your `package.json` includes:
```json
"scripts": {
  "lint": "eslint src --ext .ts,.tsx",
  "type-check": "tsc --noEmit",
  "test": "vitest run",
  "build": "vite build"
}
```

- **Linting**: Checks code style with ESLint.
- **Type-Checking**: Validates TypeScript types.
- **Tests**: Runs unit tests with Vitest (if set up).
- **Build**: Creates production-ready files.

For more on GitHub Actions, see [GitHub Actions Documentation](https://docs.github.com/en/actions).

## 10. Automated Deployment

Automated deployment ensures your site updates automatically when code is merged, reducing manual effort.

### Deploying to GitHub Pages
Create `.github/workflows/deploy.yml`. It is used to deploy your site to GitHub Pages automatically on pushes to the `main` branch. A sample is provided [here](https://github.com/ak-asu/web-dev-skill/blob/main/resources/deploy.yml).

### Enable GitHub Pages
1. Go to your repository’s “Settings” > “Pages”.
2. Set the source to the `gh-pages` branch.
3. Your site will be available at `https://yourusername.github.io/yourrepo`.

### Alternative: Vercel
1. **Link Repository**:
   - Sign up at [Vercel](https://vercel.com/).
   - Import your GitHub repository.
   - Vercel auto-detects Vite settings.

2. **Set Environment Variables**:
   - In Vercel’s dashboard, go to “Settings” > “Environment Variables”.
   - Add `VITE_GH_TOKEN`.

3. **Deploy**:
   - Vercel deploys automatically on pushes to `main`.
   - Preview deployments are created for pull requests.

Vercel offers features like automatic HTTPS and domain management, making it a strong alternative. See [Vercel Documentation](https://vercel.com/docs).

## 11. Maintaining the Live Site
- **Monitor Deployments**: Check GitHub Actions logs for build or deployment failures.
- **Update Content**: Regularly push updates to keep API-driven content fresh.
- **Add Features**: Consider analytics or a contact form backend to enhance functionality.
- **Custom Domain**: Purchase a domain and configure it in GitHub Pages or Vercel settings for a professional URL.

## 12. Conclusion
This chapter has equipped you to configure, integrate, and deploy your portfolio site with modern development practices. Environment variables secure your configuration, APIs bring dynamic content, and GitHub Actions automate testing and deployment. Hosting on GitHub Pages or Vercel ensures your site is accessible and scalable. These skills prepare you for professional web development, showcasing a portfolio that reflects your technical expertise and attention to detail.