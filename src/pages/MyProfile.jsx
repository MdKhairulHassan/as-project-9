import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation } from 'react-router';

const MyProfile = () => {
  const { user, setUser, updateUser } = use(AuthContext);

  const location = useLocation();

  const handleUpdateProfile = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        form.reset();
      })
      .catch(() => {
        // console.log(error);
        setUser(user);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Account Profile
      </h2>

      <h2 className="text-lg font-medium mb-1 text-center">
        Name: {user && user.displayName}
      </h2>
      <h2 className="text-lg font-medium mb-6 text-center">
        Email: {user && user.email}
      </h2>

      {/* Profile Photo */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={user && user.photoURL}
          alt=""
          className="w-32 h-32 rounded-full object-cover border mb-3"
        />
        {/* <input
          type="file"
          // accept="image/*"
          // onChange={handlePhotoChange}
          className="text-sm"
        /> */}
      </div>

      {/* User Info */}
      <form className="space-y-4" onSubmit={handleUpdateProfile}>
        <fieldset>
          <div>
            <label className="block text-sm font-medium mb-1">
              Update Name
            </label>
            <input
              name="name"
              type="text"
              // value={user.name}
              placeholder="Name"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
              required
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium mb-1">
              Update PhotoURL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
              required
            />
          </div>

          <div className="flex justify-center mt-4 flex-col">
            <div className="text-center mb-1">
              {!user && (
                <p className="font-semibold">
                  Please{' '}
                  <Link
                    state={location.pathname}
                    to={'/auth/login'}
                    className="text-red-500 font-bold"
                  >
                    Login{' '}
                  </Link>
                  or
                  <Link
                    state={location.pathname}
                    to={'/auth/register'}
                    className="text-red-500 font-bold"
                  >
                    {' '}
                    Register
                  </Link>{' '}
                  First To Update
                </p>
              )}
            </div>
            <button className="btn btn-accent" type="submit" disabled={!user}>
              Update
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default MyProfile;
