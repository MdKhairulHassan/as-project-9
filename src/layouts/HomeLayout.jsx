import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestMotto from '../components/LatestMotto';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LeftAside from '../components/homelayout/LeftAside';
import Loading from '../pages/Loading';
import Footer from '../components/Footer';

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        {/* {(import.meta.env.VITE_name)} */}
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
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5 my-20">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-9">
          {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
