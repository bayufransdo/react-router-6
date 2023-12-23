import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
