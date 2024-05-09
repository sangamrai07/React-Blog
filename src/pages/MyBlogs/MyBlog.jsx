import React, { useState } from 'react';
import './MyBlog.scss';
import bg1 from '../../images/homeBg6.png';
import delIcon from '../../images/deleteIcon.png';
import editIcon from '../../images/editIcon.png';

function MyBlog() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };


  return (
    <div className='myBlog'>
      <div className="container">
        <div className="head">
          <h1>My Blogs</h1>
          <button onClick={toggleAddForm}> <span className="plus">+</span> Add Blogs</button>
        </div>


        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th style={{ width: '120px' }}>Image</th>
                <th style={{ width: '195px' }}>Title</th>
                <th style={{ width: '390px' }}>Description</th>
                <th style={{ width: '170px' }}>Created At</th>
                <th style={{ width: '170px' }}>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className='blogImg'><img src={bg1} alt="" srcSet="" /></div></td>
                <td>This is demo Blog</td>
                <td>This is demo Blog Lorem ipsum dolor sit.</td>
                <td>APR 18, 2023</td>
                <td>APR 18, 2023</td>
                <td>
                  <img className='actionBtn' src={delIcon} alt="" />
                  <img className='actionBtn' onClick={toggleEditForm} src={editIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className='blogImg'><img src={bg1} alt="" srcSet="" /></div></td>
                <td>This is demo Blog</td>
                <td>This is demo Blog Lorem ipsum dolor sit.</td>
                <td>APR 18, 2023</td>
                <td>APR 18, 2023</td>
                <td>
                  <img className='actionBtn' src={delIcon} alt="" />
                  <img className='actionBtn' onClick={toggleEditForm} src={editIcon} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
              {showAddForm && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleAddForm}>&times;</span>
              <h2>Add Blog</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="blogTitle">Blog Title:</label>
                  <input type="text" id="blogTitle" placeholder='title..' name="blogTitle" />
                </div>
                <div className="form-group">
                  <label htmlFor="blogDescription">Description:</label>
                  <textarea id="blogDescription" placeholder='description..' name="blogDescription"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="blogImage">Image:</label>
                  <input type="file" id="blogImage" name="blogImage" accept="image/*" />
                </div>
                <button className='subBtn' type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

              {showEditForm && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleEditForm}>&times;</span>
              <h2>Edit Blog</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="blogTitle">Blog Title:</label>
                  <input type="text" id="blogTitle" placeholder='title..'  name="blogTitle" />
                </div>
                <div className="form-group">
                  <label htmlFor="blogDescription">Description:</label>
                  <textarea id="blogDescription" placeholder='description..' name="blogDescription"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="blogImage">Image:</label>
                  <input type="file" id="blogImage" name="blogImage" accept="image/*" />
                </div>
                <button className='subBtn' type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

    </div>
  );
}

export default MyBlog;
