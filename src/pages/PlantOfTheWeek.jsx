import React from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from '../components/PlantsCard';
import { FaLeaf } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlantOfTheWeek = () => {
  const data = useLoaderData();
  return (
    <>
      <header className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </header>
      <div className="w-11/12 mx-auto">
        <div className="text-center mt-20 mb-10">
          <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2">
            <FaLeaf className="text-green-600" />
            Plant Of The Week
          </h2>
          <p className="text-gray-600 mt-2">The popular plants for this week</p>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-7 mb-20 max-sm:grid-cols-2 max-md:grid-cols-3">
          {data.map(plants => (
            <PlantsCard key={plants.plantId} plants={plants}></PlantsCard>
          ))}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PlantOfTheWeek;
