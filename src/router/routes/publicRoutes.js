import React from 'react';

import Login from '../../views/auth/Login';
import Register from '../../views/auth/Register';

const publicRoutes = [
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
