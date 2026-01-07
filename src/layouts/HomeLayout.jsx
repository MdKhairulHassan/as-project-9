import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestMotto from '../components/LatestMotto';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import Loading from '../pages/Loading';
import Footer from '../components/Footer';
import PlantCareTips from '../components/homelayout/PlantCareTips';
import GreenExpertsCard from '../components/homelayout/GreenExpertsCard';
import { FaLeaf } from 'react-icons/fa';
import BannerSlider from '../components/homelayout/BannerSlider';

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <div>
          <Header></Header>
        </div>
        {/* {(import.meta.env.VITE_name)} */}
        <section className="w-11/12 mx-auto my-3">
          <LatestMotto></LatestMotto>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
        <div>
          <BannerSlider></BannerSlider>
        </div>
      </header>
      <section className="mt-30">
        <div className="text-center mt-20 mb-10">
          <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2  max-[420px]:text-2xl">
            <FaLeaf className="text-green-600" />
            Top Rated Indoor Plants
          </h2>
          <p className="text-gray-600 mt-2  max-[420px]:text-sm">
            Our top collected plants are here with category wise
          </p>
        </div>
      </section>
      <main className="w-11/12 mx-auto grid grid-cols-12 max-[420px]:grid-cols-1 gap-5 mt-14 mb-20">
        <aside className="col-span-3 sticky top-0 h-fit max-[420px]:static max-[420px]:h-auto">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-9">
          {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
      </main>
      <main>
        <section className="w-11/12 mx-auto my-20">
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <PlantCareTips></PlantCareTips>
          </Suspense>
        </section>
        <section className="w-11/12 mx-auto my-20">
          <div>
            <GreenExpertsCard></GreenExpertsCard>
          </div>
        </section>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
