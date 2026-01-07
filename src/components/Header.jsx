import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-center mb-7 mt-5">
        <h2 className="text-6xl font-bold text-green-700 flex justify-center items-center gap-2  max-[420px]:gap-0  max-[420px]:text-4xl">
          <div className="w-14">
            <FaLeaf className="text-green-600" />
          </div>
          GreenNest
        </h2>
        <p className="font-medium text-lg pl-2 max-[420px]:pl-5  max-[420px]:text-sm">
          Indoor Plant Care & Store
        </p>
      </div>
    </div>
  );
};

export default Header;
