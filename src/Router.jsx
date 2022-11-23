import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Employees } from './pages/Employees';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
