import React, { use } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import userImg from '../assets/profile-blank.png';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { TiThMenu } from 'react-icons/ti';

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

  const linksPage = (
    <>
      <NavLink className={'hover:font-bold text-lg'} to={'/'}>
        Home
      </NavLink>
      {user && (
        <NavLink
          className={'hover:font-bold text-lg'}
          to={'/plant_of_the_Week'}
        >
          Plant Of The Week
        </NavLink>
      )}
      <NavLink className={'hover:font-bold text-lg'} to={'/plants'}>
        Plants
      </NavLink>
      <NavLink className={'hover:font-bold text-lg'} to={'/profiles/myprofile'}>
        My profile
      </NavLink>
    </>
  );

  const linksAuth = (
    <>
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
            className="py-2 bg-black text-white px-5 rounded-sm my-1"
          >
            Login
          </Link>
          <Link
            to={'/auth/register'}
            className="py-2 bg-black text-white px-5 rounded-sm my-1"
          >
            Register
          </Link>
          <Link
            className="py-2 bg-black text-white px-2 rounded-sm flex items-center my-1"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="mr-1 inline-block my-1" />{' '}
            <p className="inline-block">Login With Google</p>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <TiThMenu className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {linksPage}
              {linksAuth}
            </ul>
          </div>

          <div>
            <p
              className={`bg-sky-300 py-2 px-3 rounded-sm font-bold max-[420px]:hidden ${
                user || 'hidden'
              }`}
            >
              {user && `Email: ${user.email}`}
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-5">{linksPage}</ul>
          <div className="flex items-center gap-x-2">
            <ToastContainer />
            <Link to={'/profiles/myprofile'}>
              <img
                className="w-12 rounded-full"
                src={`${user ? user.photoURL : userImg}`}
                alt="profile-picture"
              />
            </Link>
            {linksAuth}
          </div>
        </div>
        <div className="lg:hidden max-sm:navbar-end max-md:navbar-end max-lg:navbar-end">
          <Link to={'/profiles/myprofile'}>
            <img
              className="w-12 rounded-full"
              src={`${user ? user.photoURL : userImg}`}
              alt="profile-picture"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
