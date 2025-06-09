import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalsStyles';
import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer />
  </React.StrictMode>,
);