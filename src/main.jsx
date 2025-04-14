import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Skills from './Skills.jsx';
import Layout from './Layout.jsx';
import Projects from './Projects.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<App />}/>
      <Route path='projects' element={<Projects />}/>
      <Route path='skills' element={<Skills />}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
