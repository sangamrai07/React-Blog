import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className='login'>
      <h1>Log into</h1>
      <h1>your Account</h1>
      <div className="container">
       
        <form action="" className='loginForm'>
          <div className="formItems">
            <input type="text" placeholder='Enter your email...' />
          </div>
          <div className="formItems">
            <input type={showPassword ? "text" : "password"} placeholder='Enter the password...' />
          </div>
          <div className="formItems">
            <input type="checkbox" onChange={togglePasswordVisibility} /> <span>Show Password</span>
          </div>
          <div className="formItems">
            <button>Log In</button>
          </div>
        </form>
        <h4>&mdash;&mdash;&mdash;&mdash;&mdash; OR &mdash;&mdash;&mdash;&mdash;&mdash;</h4>
        <p>Don't have an Account?  <Link className='link' to='/signup'><span>Sign Up</span></Link></p>
      </div>
    </div>
  );
}

export default Login;

