import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestMotto from '../components/LatestMotto';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LeftAside from '../components/homelayout/LeftAside';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestMotto></LatestMotto>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
        <section className="bg-[url('/bannerimg.png')] bg-cover bg-center my-7">
          <Banner></Banner>
        </section>
      </header>
      <main>
        <aside className=''>
          <LeftAside></LeftAside>
        </aside>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
