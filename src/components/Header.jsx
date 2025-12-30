import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center items-center gap-x-2">
        <img className="w-[100px]" src={logo} alt="" />
        <div>
          <p className="font-bold text-6xl">
            GreenNest
            <br />
          </p>
          <p className="font-medium text-lg pl-2">Indoor Plant Care & Store</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
