import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './widgets/ErrorBoundary/ErrorBoundary';
import { router } from './widgets/Router/router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
