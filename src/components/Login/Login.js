import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
      <div className="form-container">
        <div>
          <form>
            <h1 className="form-title">Login</h1>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
            </div>
            <input className="login-button" type="submit" value="Login" />
          </form>
          <p>
            New to Ema-John?{" "}
            <Link className="form-link" to="/signup">
              Create an account
            </Link>
          </p>
          <div className="bar-container">
            <hr className="bar1" /> <span className='bar-text'>or</span> <hr className="bar2" />
          </div>
        </div>
      </div>
    );
};

export default Login;