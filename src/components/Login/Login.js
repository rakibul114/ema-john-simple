import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleIcon from '../../images/google.png';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, {replace: true});
  }

  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };


    return (
      <div className="form-container">
        <div>
          <form onSubmit={handleUserSignIn}>
            <h1 className="form-title">Login</h1>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <p style={{ color: 'red' }}>{error?.message}</p>
            {
              loading && <p>Loading...</p>
            }

            <input className="login-button" type="submit" value="Login" />
          </form>
          <p>
            New to Ema-John?{" "}
            <Link className="form-link" to="/signup">
              Create an account
            </Link>
          </p>
          <div className="bar-container">
            <hr className="bar1" /> <span className="bar-text">or</span>{" "}
            <hr className="bar2" />
          </div>
          <div>
            <button className="google-button">
              <img src={googleIcon} alt="" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;