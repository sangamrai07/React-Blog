import React, { useState } from 'react';
import './Profile.scss';
import icon1 from '../../images/BlogIcon.png';
import icon2 from '../../images/HomeIcon.png';
import icon3 from '../../images/MyBlogIcon.png';
import { Link } from 'react-router-dom';
import bg8 from '../../images/gridImg8.png';
import verified from '../../images/verified.png';
import BlogCard from '../BlogCard/BlogCard';
import newRequest from '../../utils/newRequest';

const ProfilePage = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      descriptipn: ''
    });
  
  
  
  const [fileData, setFileData] = useState(null); 

   const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Update fileData state when file input changes
      setFileData(e.target.files[0]);
    } else {
      // Capitalize the attribute names when setting form data
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const toggleDeleteConfirmation = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
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
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.descriptipn);
    formDataToSend.append('imagePath', fileData);

    const response = await newRequest.post('/Blog', formDataToSend);
       
      navigate('/')
      console.log('Blog Added.');
      
    } catch (error) {
      // Handle login error
      console.log('Login failed:', error);
    }
  };

  return (
    <div className='profile'>
      <div className="container">
        <div className="left">
          <div className="leftItems">
            <Link className='link' to='/'>
              <h4 style={{ marginTop: '40px' }}> <img src={icon2} alt="" />  Home</h4>
            </Link>
            <Link className='link' to='/myBlogs'><h4> <img src={icon3} alt="" />My Blogs</h4></Link>
            <Link className='link' to='/blogs'> <h4> <img src={icon1} alt="" />  Blogs</h4></Link>
          </div>
          <hr />
          <div className="leftItems">
            <h2>Account Settings</h2>
            <button className='delBtn' onClick={toggleDeleteConfirmation}>Delete Account</button>
            <button className='edBtn'>Change Password</button>
          </div>
        </div>
        <div className="right">
          <div className="userPrf">
            <div className="img">
              <img src={bg8} alt="" />
            </div>
            <div className="details">
              <span>Cristiano Ronaldo&nbsp;<img src={verified} alt="" /></span>
              <button onClick={toggleEditForm}>Edit Profile</button>
            </div>
          </div>
          <button onClick={toggleAddForm} className='plusBtn'>+</button>
          <h5>New</h5>
          <hr />
          <h2>Posts</h2>
          <div className="postContainer">
            <BlogCard />
          </div>
        </div>
      </div>

      {showEditForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleEditForm}>&times;</span>
            <h2>Edit Profile</h2>
            <form>
              <div className="form-group">
                <label htmlFor="blogTitle">Username:</label>
                <input type="text" id="blogTitle" placeholder='username..' name="blogTitle" />
              </div>
              <div className="form-group">
                <label htmlFor="blogImage">Profile Picture:</label>
                <input type="file" id="blogImage" name="blogImage" accept="image/*" />
              </div>
              <button className='subBtn' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {showAddForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleAddForm}>&times;</span>
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="blogTitle">Blog Title:</label>
                <input type="text" id="blogTitle" onChange={handleChange} placeholder='title..' name="title" />
              </div>
              <div className="form-group">
                <label htmlFor="blogDescription">Description:</label>
                <textarea id="blogDescription" onChange={handleChange} placeholder='description..' name="description"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="blogImage">Image:</label>
                <input type="file" id="blogImage" onChange={handleChange} name="imagePath" />
              </div>
              <button className='subBtn' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleDeleteConfirmation}>&times;</span>
            <p>Do you want to delete your account?</p>
            <div className="confirmBtns">
              <button className="confirm-delete" >Yes</button>
              <button className="cancel-delete" onClick={toggleDeleteConfirmation}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

