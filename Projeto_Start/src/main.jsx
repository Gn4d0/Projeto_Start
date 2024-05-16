import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import cadastroMercado from './pages/Home/cadastroMercado.jsx';
import Home from './pages/Home/Home.jsx';



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />
  },
  
  {
    path: "cadastroMercado",
    element: <cadastroMercado />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
