import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const [nameError, setNameError] = useState('');
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    setSuccess(false);
    setFail(false);
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError('Name should be more than 5 character');
      return;
    } else {
      setNameError('');
    }

    // =====================================
    // if (name.length < 5) {
    //   setNameError('Name should be more than 5 character');
    //   return;
    // } else {
    //   setNameError('');
    // }
    // =====================================

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          });
        setUser(user);
        toast.success('account create success', {
          theme: 'colored',
        });
        setSuccess(true);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // alert(errorMessage);
        setSuccess(false);
        setFail(true);
        toast.error(errorMessage, {
          theme: 'dark',
        });
        // ..
      });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="font-semibold text-2xl text-center pt-5">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {nameError && <p className={'text-xs text-error'}>{nameError}</p>}

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              {success && (
                <p className={'text-xs text-green-500'}>
                  account create successfully
                </p>
              )}

              {fail && (
                <p className="text-xs text-error">account create fail</p>
              )}

              <p className="text-center font-medium text-sm">
                Already have an account?{' '}
                <Link to={'/auth/login'} className="text-red-600 font-bold">
                  Login
                </Link>
              </p>
            </fieldset>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
