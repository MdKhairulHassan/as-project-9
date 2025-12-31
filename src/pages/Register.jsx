import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="font-semibold text-2xl text-center pt-5">
            Register your account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-center font-medium text-sm">
                Already have an account?{' '}
                <Link to={'/auth/login'} className="text-red-600 font-bold">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
