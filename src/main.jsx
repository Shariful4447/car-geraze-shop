import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  
  RouterProvider,
 } from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Pages/Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto'>
      <React.StrictMode>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </React.StrictMode>,
  </div>
)
