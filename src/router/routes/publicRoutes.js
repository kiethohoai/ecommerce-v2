import React, { lazy } from 'react';

const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));

const publicRoutes = [
  {
    path: '/',
    element: <h1>Home Page</h1>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default publicRoutes;
