import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/profile-blank.png';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut, googleSignIn } = use(AuthContext);
  const handleLogOut = () => {
    // console.log('user trying to logout');
    logOut()
      .then(() => {
        // alert('You Logged Out successfully');
        toast.success('You Logged Out successfully', {
          theme: 'dark',
        });
      })
      .catch(error => {
        // console.log(error);
        toast.error(error, {
          theme: 'colored',
        });
      });
  };

  const handleGoogleSignIn = () => {
    // console.log('google button clicked');
    googleSignIn().then().catch();
    // .then(result => {
    //   const user = result.user;
    //   // console.log(result.user);
    // })
    // .catch(error => {
    //   const err = error;
    //   // console.log(error);
    // });
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="flex gap-x-5">
        <NavLink className={'hover:font-bold'} to={'/'}>
          Home
        </NavLink>
        <NavLink className={'hover:font-bold'} to={'/plants'}>
          Plants
        </NavLink>
        <NavLink className={'hover:font-bold'} to={'/profiles/myprofile'}>
          My profile
        </NavLink>
      </div>
      <div className="flex items-center gap-x-2">
        <ToastContainer />
        <img
          className="w-[50px] rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn bg-black text-white px-10"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to={'/auth/login'} className="btn bg-black text-white px-10">
              Login
            </Link>
            <div
              className="btn bg-black text-white px-5"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle className="mr-1" /> Login With Google
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
