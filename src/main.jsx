import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorPage from './ErrorPage';
import Index from './routes/index';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
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
