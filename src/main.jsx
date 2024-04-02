import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Routers.jsx'
import ContextComponent from './components/ContextComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponent>
      <RouterProvider router={router} />
    </ContextComponent>
  </React.StrictMode>,
)
