import React, { use } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import userImg from '../assets/profile-blank.png';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Navbar = () => {
  const { user, logOut, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
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
    googleSignIn()
      .then(() => {
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch();
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
      <div>
        <p
          className={`bg-sky-300 py-2 px-3 rounded-sm font-bold ${
            user || 'hidden'
          }`}
        >
          {user && `Email: ${user.email}`}
        </p>
      </div>
      <div className="flex gap-x-5">
        <NavLink className={'hover:font-bold'} to={'/'}>
          Home
        </NavLink>
        {user && (
          <NavLink className={'hover:font-bold'} to={'/plant_of_the_Week'}>
            Plant Of The Week
          </NavLink>
        )}
        {/* <NavLink className={'hover:font-bold'} to={'/plant_of_the_Week'}>
          Plant Of The Week
        </NavLink> */}
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
            <Link
              to={'/auth/login'}
              className="py-2 bg-black text-white px-5 rounded-sm"
            >
              Login
            </Link>
            <Link
              to={'/auth/register'}
              className="py-2 bg-black text-white px-5 rounded-sm"
            >
              Register
            </Link>
            <Link
              className="py-2 bg-black text-white px-5 rounded-sm"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="mr-1 inline-block" /> Login With Google
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
