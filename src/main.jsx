import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorPage from './ErrorPage';
import Root, { loader as rootLoader } from './routes/root';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
