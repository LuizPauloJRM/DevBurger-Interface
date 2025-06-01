import { React } from 'react'
import { ReactDOM } from 'react-dom/client'
import { Login } from './containers/Login/index'  

React.DOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
)
