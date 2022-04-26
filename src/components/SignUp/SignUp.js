import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import googleIcon from '../../images/google.png';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
      useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not matched');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    };

    return (
      <div className="form-container">
        <div>
          <form onSubmit={handleCreateUser}>
            <h1 className="form-title">Sign Up</h1>
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
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                onBlur={handleConfirmPassword}
                type="password"
                name="confirm-password"
                id=""
                required
              />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
            <input className="login-button" type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account?{" "}
            <Link className="form-link" to="/login">
              Login
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

export default SignUp;