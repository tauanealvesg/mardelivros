import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Importando as páginas
import Home from './routes/Home'
import Livros from './routes/Livros'
import Cadastro from './routes/Cadastro'
import QuemSomos from './routes/QuemSomos'
import Login from './routes/Login'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <QuemSomos />
      },
      {
        path: "/pag2",
        element: <Home />
      },
      {
        path: "/pag3",
        element: <Livros />
      },
      {
        path: "/pag4",
        element: <Cadastro />
      },
      {
        path: "/pag5",
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
