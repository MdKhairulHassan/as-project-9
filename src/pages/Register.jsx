import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const [nameError, setNameError] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fail, setFail] = useState('');

  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    setSuccess(false);
    setFail('');

    // console.log(e.target);

    const form = e.target;
    const name = form.name.value;

    // for name requirement
    if (name.length < 5) {
      setNameError('Name should be more than 5 character');
      return;
    } else {
      setNameError('');
    }

    const photo = form.photo.value;
    const email = form.email.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    const password = form.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
    // passwordRegex.test('Abcdef1!'); // true

    // for password requirement
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            form.reset();
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
        // console.log(errorCode);
        // alert(errorMessage);
        setSuccess(false);
        setFail(errorCode);
        toast.error(errorMessage, {
          theme: 'colored',
        });
        // ..
      });
  };

  const handleTogglePasswordShow = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
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
              {emailError && (
                <p className={'text-xs text-error'}>Email is not valid</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={`${showPassword ? 'text' : 'password'}`}
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  className="p-2 cursor-pointer btn-xs absolute top-2 right-5"
                  onClick={handleTogglePasswordShow}
                >
                  {showPassword ? <FaRegEye /> : <LuEyeClosed />}
                </button>
              </div>

              {passwordError && (
                <p className={'text-xs text-error'}>
                  Must have an Uppercase, Lowercase letter and Length must be at
                  least 6 character
                </p>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              {success && (
                <p className={'text-xs text-green-500'}>
                  account create successfully
                </p>
              )}

              {fail && (
                <p className="text-xs text-error">
                  account create fail: {fail}
                </p>
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
