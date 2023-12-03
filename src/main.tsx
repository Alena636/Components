import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import './index.css';
import { store } from './app/Redux/Store/Store.js';
import { Provider } from 'react-redux';
import ErrorBoundary from './widgets/ErrorBoundary/ErrorBoundary.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
