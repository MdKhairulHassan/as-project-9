// import React from 'react';
// import { createBrowserRouter } from 'react-router';
// import HomeLayout from '../layouts/HomeLayout';
// import Home from '../pages/Home';
// import CategoryPlants from '../pages/CategoryPlants';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import AuthLayout from '../layouts/AuthLayout';
// import PlantsDetails from '../pages/PlantsDetails';
// import PrivateRoute from '../provider/PrivateRoute';
// import Loading from '../pages/Loading';
// import Plants from '../pages/Plants';
// import MyProfile from '../pages/MyProfile';
// import ProfilesLayout from '../layouts/ProfilesLayout';
// import PlantOfTheWeek from '../pages/PlantOfTheWeek';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomeLayout></HomeLayout>,
//     children: [
//       {
//         path: '',
//         element: <Home></Home>,
//       },
//       {
//         path: '/category/:id',
//         element: <CategoryPlants></CategoryPlants>,
//         loader: () => fetch('/plants.json'),
//         hydrateFallbackElement: <Loading></Loading>,
//       },
//     ],
//   },
//   {
//     path: '/auth',
//     element: <AuthLayout></AuthLayout>,
//     children: [
//       {
//         path: '/auth/login',
//         element: <Login></Login>,
//       },
//       {
//         path: '/auth/register',
//         element: <Register></Register>,
//       },
//     ],
//   },
//   {
//     path: '/plants-details/:id',
//     element: (
//       <PrivateRoute>
//         <PlantsDetails></PlantsDetails>
//       </PrivateRoute>
//     ),
//     loader: () => fetch('/allplantsdata.json'),
//     hydrateFallbackElement: <Loading></Loading>,
//   },
//   {
//     path: '/plant_of_the_Week',
//     element: (
//       <PrivateRoute>
//         <PlantOfTheWeek></PlantOfTheWeek>
//       </PrivateRoute>
//     ),
//     loader: () => fetch('/plantoftheweek.json'),
//     hydrateFallbackElement: <Loading></Loading>,
//   },
//   {
//     path: '/plants',
//     element: (
//       <PrivateRoute>
//         <Plants></Plants>
//       </PrivateRoute>
//     ),
//     loader: () => fetch('/allplantsdata.json'),
//     hydrateFallbackElement: <Loading></Loading>,
//   },
//   {
//     path: '/profiles',
//     element: <ProfilesLayout></ProfilesLayout>,
//     children: [
//       {
//         path: '/profiles/myprofile',
//         element: (
//           <PrivateRoute>
//             <MyProfile></MyProfile>
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
//   {
//     path: '/*',
//     element: (
//       <h2 className="font-bold text-center text-5xl pt-60">error 404</h2>
//     ),
//   },
// ]);

// export default router;

// for vercel deployment
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../pages/Loading';

// Layouts
const HomeLayout = lazy(() => import('../layouts/HomeLayout'));
const AuthLayout = lazy(() => import('../layouts/AuthLayout'));
const ProfilesLayout = lazy(() => import('../layouts/ProfilesLayout'));

// Pages
const Home = lazy(() => import('../pages/Home'));
const CategoryPlants = lazy(() => import('../pages/CategoryPlants'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const PlantsDetails = lazy(() => import('../pages/PlantsDetails'));
const Plants = lazy(() => import('../pages/Plants'));
const MyProfile = lazy(() => import('../pages/MyProfile'));
const PlantOfTheWeek = lazy(() => import('../pages/PlantOfTheWeek'));

// Helper for suspense
const withSuspense = Component => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(HomeLayout),
    children: [
      { path: '', element: withSuspense(Home) },
      {
        path: 'category/:id',
        element: withSuspense(CategoryPlants),
        loader: () => fetch('/plants.json'),
      },
    ],
  },
  {
    path: '/auth',
    element: withSuspense(AuthLayout),
    children: [
      { path: 'login', element: withSuspense(Login) },
      { path: 'register', element: withSuspense(Register) },
    ],
  },
  {
    path: '/plants-details/:id',
    element: <PrivateRoute>{withSuspense(PlantsDetails)}</PrivateRoute>,
    loader: () => fetch('/allplantsdata.json'),
  },
  {
    path: '/plant_of_the_Week',
    element: <PrivateRoute>{withSuspense(PlantOfTheWeek)}</PrivateRoute>,
    loader: () => fetch('/plantoftheweek.json'),
  },
  {
    path: '/plants',
    element: <PrivateRoute>{withSuspense(Plants)}</PrivateRoute>,
    loader: () => fetch('/allplantsdata.json'),
  },
  {
    path: '/profiles',
    element: withSuspense(ProfilesLayout),
    children: [
      {
        path: 'myprofile',
        element: <PrivateRoute>{withSuspense(MyProfile)}</PrivateRoute>,
      },
    ],
  },
  {
    path: '*',
    element: (
      <h2 className="font-bold text-center text-5xl pt-60">error 404</h2>
    ),
  },
]);

export default router;
