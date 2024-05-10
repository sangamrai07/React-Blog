import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg1 from '../../images/signupBg1.png';
import './Signup.scss';
import newRequest from '../../utils/newRequest';
import {error} from '../../components/Toast.jsx'
 
function Signup() {
  const [formData, setFormData] = useState({
    Email: '',
    UserName: '',
    Password: '',
    ConfirmPassword: '',
  });

  const [fileData, setFileData] = useState(null); // State to store file data

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Update fileData state when file input changes
      setFileData(e.target.files[0]);
    } else {
      // Capitalize the attribute names when setting form data
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Check if the file size exceeds 3MB
    if (fileData && fileData.size > 3 * 1024 * 1024) {
      error('File size cannot be more than 3MB')
      return; 
    }

    // Create FormData object to send form data including file
    const formDataToSend = new FormData();
    formDataToSend.append('Email', formData.Email);
    formDataToSend.append('UserName', formData.UserName);
    formDataToSend.append('Password', formData.Password);
    formDataToSend.append('ConfirmPassword', formData.ConfirmPassword);
    formDataToSend.append('ImageFile', fileData);

    const response = await newRequest.post('/user/register', formDataToSend);
    localStorage.setItem("activeUser", JSON.stringify(response.data));
    navigate('/');
  } catch (error) {
    console.log('Registration failed');
    console.error(error);
  }
};


  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} className="signupForm" encType="multipart/form-data">
            <div className="formItems">
              <input type="text" name="UserName" value={formData.UserName} onChange={handleChange} placeholder="Enter your username..." />
            </div>
            <div className="formItems">
              <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Enter your email..." />
            </div>
            <div className="formItems">
              <input type={showPassword ? 'text' : 'password'} name="Password" value={formData.Password} onChange={handleChange} placeholder="Enter the password..." />
            </div>
            <div className="formItems">
              <input type={showPassword ? 'text' : 'password'} name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} placeholder="Confirm the password..." />
            </div>
            <div className="formItems">
              <input type="file" name="ImageFile" onChange={handleChange} placeholder="Upload an image..." />
            </div>
            <div className="formItems">
              <input type="checkbox" onChange={togglePasswordVisibility} /> <span>Show Password</span>
            </div>
            <div className="formItems">
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <p>
            Already got an Account? <Link className="link" to="/login"><span>Log In</span></Link>
          </p>
        </div>
        <div className="right" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Join us at Bislerium and embark on an adventure of discovery and growth.</h1>
        </div>
      </div>
    </div>
  );
}

export default Signup;

