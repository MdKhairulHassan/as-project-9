import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PlantsDetailsCard from '../components/PlantsDetailsCard';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';

const PlantsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(data, id);
  const [plants, setPlants] = useState({});
  // console.log(plants);

  useEffect(() => {
    const plantsDetails = data.find(singlePlants => singlePlants.plantId == id);
    setPlants(plantsDetails);
  }, [data, id]);
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto pt-10 pb-20">
        <section>
          <h2 className="font-bold mb-5 ml-7">Plants Details</h2>
          <PlantsDetailsCard plants={plants}></PlantsDetailsCard>
          <Link
            to={`/category/${plants.category_id}`}
            className="btn ml-7 font-bold"
          >
            <FaArrowLeftLong /> Back
          </Link>
        </section>
      </main>
    </div>
  );
};

export default PlantsDetails;
