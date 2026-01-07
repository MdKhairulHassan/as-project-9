import React from 'react';
import { Link } from 'react-router';
// import bannerImg from '../assets/bannerimg.png';

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-40">
      <p className="text-7xl font-semibold pt-1">
        Best house <br /> plants varieties.
      </p>
      <div className="mt-7">
        <Link
          to={'/plants'}
          className="bg-black text-white px-4 py-2 rounded-2xl"
        >
          All Plants
        </Link>
      </div>
    </div>
  );
};

export default Banner;
