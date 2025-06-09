import { createBrowserRouter } from 'react-router-dom';
import { Login } from './../containers/Login/index';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },

]);