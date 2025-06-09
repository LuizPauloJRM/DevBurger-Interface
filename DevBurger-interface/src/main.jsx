import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalsStyles';
import { ToastContainer } from 'react-toastify';

import { Login } from './containers/Login/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer />
  </React.StrictMode>,
);