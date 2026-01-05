import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <header className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </header>
      <main className='w-11/12 mx-auto py-5'>
        <Outlet></Outlet>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AuthLayout;
