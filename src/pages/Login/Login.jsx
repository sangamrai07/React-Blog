import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

import newRequest from '../../utils/newRequest';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({ Email: '', Password: '' });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make POST request to login endpoint with email and password
      const response = await newRequest.post('/User/login', userData,{});
      localStorage.setItem("activeUser",JSON.stringify(response.data));
       
      navigate('/')
      console.log('Login successful');
      
    } catch (error) {
      // Handle login error
      console.log('Login failed:', error);
    }
  };

  return (
    <div className='login'>
      <h1>Log into</h1>
      <h1>your Account</h1>
      <div className="container">
        <form onSubmit={handleSubmit} className='loginForm'>
          <div className="formItems">
            <input type="text" name="Email" value={userData.Email} onChange={handleChange} placeholder='Enter your email...' />
          </div>
          <div className="formItems">
            <input type={showPassword ? "text" : "password"} name="Password" value={userData.Password} onChange={handleChange} placeholder='Enter the password...' />
          </div>
          <div className="formItems">
            <input type="checkbox" onChange={togglePasswordVisibility} /> <span>Show Password</span>
          </div>
          <div className="formItems">
            <button type="submit">Log In</button>
          </div>
        </form>
        <h4>&mdash;&mdash;&mdash;&mdash;&mdash; OR &mdash;&mdash;&mdash;&mdash;&mdash;</h4>
        <p>Don't have an Account?  <Link className='link' to='/signup'><span>Sign Up</span></Link></p>
      </div>
    </div>
  );
}

export default Login;