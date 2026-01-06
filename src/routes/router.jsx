import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryPlants from '../pages/CategoryPlants';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import PlantsDetails from '../pages/PlantsDetails';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../pages/Loading';
import Plants from '../pages/Plants';
import MyProfile from '../pages/MyProfile';
import ProfilesLayout from '../layouts/ProfilesLayout';
import PlantOfTheWeek from '../pages/PlantOfTheWeek';

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
        loader: () => fetch('/plants.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/plants-details/:id',
    element: (
      <PrivateRoute>
        <PlantsDetails></PlantsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch('/allplantsdata.json'),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: '/plant_of_the_Week',
    element: (
      <PrivateRoute>
        <PlantOfTheWeek></PlantOfTheWeek>
      </PrivateRoute>
    ),
    loader: () => fetch('/plantoftheweek.json'),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: '/plants',
    element: <Plants></Plants>,
    loader: () => fetch('/allplantsdata.json'),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: '/profiles',
    element: <ProfilesLayout></ProfilesLayout>,
    children: [
      {
        path: '/profiles/myprofile',
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: '/*',
    element: <h2 className='font-bold text-center text-5xl pt-60'>error 404</h2>,
  },
]);

export default router;
