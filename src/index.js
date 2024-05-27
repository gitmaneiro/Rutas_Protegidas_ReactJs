import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AppProvider } from './context/AppContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
          <RouterProvider router={router}/>
      </AppProvider>
  </React.StrictMode>
);


