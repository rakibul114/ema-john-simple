import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleNameBlur = (event) => {
        setName(event.target.value);
    };

    const handleAddressBlur = (event) => {
      setAddress(event.target.value);
    };

    const handlePhoneBlur = (event) => {
      setPhone(event.target.value);
    };

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
      console.log(shipping);
    };
    
    return (
      <div className="form-container">
        <div>
          <form onSubmit={handleCreateUser}>
            <h1 className="form-title">Shipping Information</h1>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                onBlur={handleNameBlur}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                value={user?.email} readOnly
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddressBlur}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                onBlur={handlePhoneBlur}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="login-button" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    );
};

export default Shipment;