import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import './index.css';
import { persistor, store } from './app/Redux/Store/Store.js';
import { Provider } from 'react-redux';
import ErrorBoundary from './widgets/ErrorBoundary/ErrorBoundary.js';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
