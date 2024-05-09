import React, { useState } from 'react'
import './Signup.scss';
import { Link } from 'react-router-dom';
import bg1 from '../../images/signupBg1.png'

function Signup() {

    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <div className='signup'>
          
      <div className="container">
        <div className="left">
        <h1>Create Account</h1>
        <form action="" className='signupForm'>
            <div className="formItems">
            <input type="text" placeholder='Enter your username...' />
          </div>
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
            <button>Sign Up</button>
          </div>
        </form>
        <h4>&mdash;&mdash;&mdash;&mdash;&mdash; OR &mdash;&mdash;&mdash;&mdash;&mdash;</h4>
          <p>Already got an Account?  <Link className='link' to='/login'><span>Log In</span></Link></p>
        </div>
        <div className="right" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h1>Join us at Bislerium and embark on an adventure of discovery and growth.</h1>
        </div>
      </div>
    </div>
  )
}

export default Signup
