import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
