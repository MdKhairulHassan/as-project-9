import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/profile-blank.png';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-x-5">
        <NavLink className={'hover:font-bold'} to={'/'}>
          Home
        </NavLink>
        <NavLink className={'hover:font-bold'} to={'/plants'}>
          Plants
        </NavLink>
        <NavLink className={'hover:font-bold'} to={'/myProfile'}>
          My profile
        </NavLink>
      </div>
      <div className="flex items-center gap-x-2">
        <img className="w-[50px] rounded-full" src={userImg} alt="" />
        <div className="btn bg-black text-white px-10">Login</div>
        <div className="btn bg-black text-white px-5">
          <FaGoogle className='mr-1' /> Login With Google
        </div>
      </div>
    </div>
  );
};

export default Navbar;
