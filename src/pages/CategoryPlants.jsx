import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import PlantsCard from '../components/PlantsCard';

const CategoryPlants = () => {
  // const obj = useParams();
  // console.log(obj);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);

  const [categoryPlants, setCategoryPlants] = useState([]);

  useEffect(() => {
    if (id == '0') {
      setCategoryPlants(data);
      return;
    }
    const filteredPlants = data.filter(plants => plants.category_id == id);
    console.log(filteredPlants);
    setCategoryPlants(filteredPlants);
  }, [data, id]);
  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-red-600">({categoryPlants.length}) </span>
        Plants
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {categoryPlants.map(plants => (
          <PlantsCard key={plants.plantId} plants={plants}></PlantsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryPlants;
