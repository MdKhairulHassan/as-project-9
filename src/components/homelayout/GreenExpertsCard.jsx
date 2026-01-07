// import React from 'react';

// const GreenExpertsCard = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default GreenExpertsCard;

import { FaLeaf } from 'react-icons/fa';

const GreenExpertsCard = () => {
  return (
    <section className="py-14 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mt-20 mb-10">
          <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2 max-[420px]:text-2xl">
            <FaLeaf className="text-green-600" />
            Meet Our Green Experts
          </h2>
          <p className="text-gray-600 mt-2  max-[420px]:text-sm">
            Trusted professionals guiding you to healthier indoor plants
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Expert 1 */}
          <div className="card bg-base-100 shadow-xl text-center">
            <figure className="px-6 pt-6">
              <img
                src="/hilton-carter.jpg"
                alt="Expert 1"
                className="rounded-full w-32 h-32 object-cover"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="card-title text-green-700">Hilton Carter</h3>
              <p className="text-sm text-gray-600">Indoor Plant Specialist</p>
            </div>
          </div>

          {/* Expert 2 */}
          <div className="card bg-base-100 shadow-xl text-center">
            <figure className="px-6 pt-6">
              <img
                src="/dr.bill-wolverton.jpg"
                alt="Expert 2"
                className="rounded-full w-32 h-32 object-cover"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="card-title text-green-700">Dr. Bill Wolverton</h3>
              <p className="text-sm text-gray-600">
                Air Purifying Plants Expert
              </p>
            </div>
          </div>

          {/* Expert 3 */}
          <div className="card bg-base-100 shadow-xl text-center">
            <figure className="px-6 pt-6">
              <img
                src="/monique-kemperman.jpg"
                alt="Expert 3"
                className="rounded-full w-32 h-32 object-cover"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="card-title text-green-700">Monique Kemperman</h3>
              <p className="text-sm text-gray-600">
                Tropical & Decorative Plants
              </p>
            </div>
          </div>

          {/* Expert 4 */}
          <div className="card bg-base-100 shadow-xl text-center">
            <figure className="px-6 pt-6">
              <img
                src="/rosemary-gladstar.jpg"
                alt="Expert 4"
                className="rounded-full w-32 h-32 object-cover"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="card-title text-green-700">Rosemary Gladstar</h3>
              <p className="text-sm text-gray-600">Medicinal & Herbal Plants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenExpertsCard;
