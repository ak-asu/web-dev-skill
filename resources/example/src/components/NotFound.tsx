import React from 'react';


const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-400 dark:bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
