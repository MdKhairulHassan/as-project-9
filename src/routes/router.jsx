import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryPlants from '../pages/CategoryPlants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <CategoryPlants></CategoryPlants>,
      },
    ],
  },
  {
    path: '/auth',
    element: <h2>Authentication layout</h2>,
  },
  {
    path: '/plants',
    element: <h2>plants layout</h2>,
  },
  {
    path: '/*',
    element: <h2>error 404</h2>,
  },
]);

export default router;
