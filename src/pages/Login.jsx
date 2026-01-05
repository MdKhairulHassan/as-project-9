import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const Login = () => {
  const { signIn, forgetPassword } = use(AuthContext);

  const [error, setError] = useState('');
  const [forgetPasswordError, setForgetPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogin = e => {
    e.preventDefault();
    setError('');
    const form = e.target;

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

    // console.log({ email, password });

    signIn(email, password)
      .then(result => {
        setSuccess(true);
        toast.success('account create success', {
          theme: 'colored',
        });
        result.user;
        form.reset();
        // const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
        toast.error(errorMessage, {
          theme: 'colored',
        });
      });
  };

  const handleForgetPassword = e => {
    e.preventDefault();

    const email = emailRef.current?.value;

    if (!email) {
      toast.error('Please enter your email first', {
        theme: 'colored',
      });
      return;
    }

    forgetPassword(email)
      .then(() => {
        // console.log('please check your email');
        setForgetPasswordError('');
        toast.success('please check your email', {
          theme: 'colored',
        });
      })
      .catch(error => {
        // console.error(error);
        setForgetPasswordError(error.message);
        toast.error(error.message, { theme: 'colored' });
      });
  };

  const handleTogglePasswordShow = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center pt-5">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
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

            <div>
              <button
                type="button"
                className="link link-hover font-bold"
                onClick={handleForgetPassword}
              >
                Forgot password?
              </button>
            </div>

            {forgetPasswordError && (
              <p className="text-red-400 text-xs">{forgetPasswordError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            {success && (
              <p className="text-green-500 text-xs my-2">Login success</p>
            )}
            <p className="text-center font-medium text-sm">
              Don't have an account?{' '}
              <Link to={'/auth/register'} className="text-red-600 font-bold">
                Register
              </Link>
            </p>
          </fieldset>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
