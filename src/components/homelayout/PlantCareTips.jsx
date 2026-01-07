import React, { use } from 'react';
import PlantCareCard from '../PlantCareCard';
import { FaLeaf } from 'react-icons/fa';
const plantCareTipsPromise = fetch('/plantcaretips.json').then(res =>
  res.json()
);
const PlantCareTips = () => {
  const plantCareTips = use(plantCareTipsPromise);
  return (
    <div>
      <div className="text-center mt-20 mb-10">
        <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2 max-[420px]:text-2xl">
          <FaLeaf className="text-green-600" />
          Plant Care Tips
        </h2>
        <p className="text-gray-600 mt-2 max-[420px]:text-sm">
          Best plant care tips from us
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5 max-sm:grid-cols-1">
        {plantCareTips.map(tip => (
          <PlantCareCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
