import React, { useState } from 'react';
import './MyBlog.scss';
import bg1 from '../../images/homeBg6.png';
import delIcon from '../../images/deleteIcon.png';
import editIcon from '../../images/editIcon.png';
import { useMutation, useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { success } from '../../components/Toast';

function MyBlog() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
   
  };

  const toggleEditForm = (id) => {
    setShowEditForm(!showEditForm);
    setEditId(id)
  };

  const { isPending:isPendingMyBlog, error: errorBlog, data: dataBlog, refetch } = useQuery({
    queryKey: ['myBlogs'], // 
    queryFn: () =>
      newRequest.get('/blog/my-blogs').then((res) => {
        return res.data;
      })
  });


  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [fileData, setFileData] = useState(null); 


  const handleConfirmDelete = async (blogid) => {
   
    try {
    
      const res = newRequest.delete(`/blog?blogId=${blogid}`)
      success('Blog deleted successfully')
    
    } catch (err) {
      console.log(err);
    } 
  };

  const [editId, setEditId] = useState(null)

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Update fileData state when file input changes
      setFileData(e.target.files[0]);
    } else {
      // Capitalize the attribute names when setting form data
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleConfirmEdit = async (e) => {
    e.preventDefault()
    try {
    
      if (fileData && fileData.size > 3 * 1024 * 1024) {
        error('File size cannot be more than 3MB')
        return; 
      }
  


      // Create FormData object to send form data including file
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('imagePath', fileData);
  
      const response = await newRequest.put(`/Blog?blogId=${editId}`, formDataToSend);
      success('Edited Successfully!')
    
    } catch (err) {
      console.log(err);
    } 
  };


  return (
    <div className='myBlog'>
      <div className="container">
        <div className="head">
          <h1>My Blogs</h1>
        
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
            {isPendingMyBlog ? "Extracting" : errorBlog ? "Error Occurred !!" :  dataBlog.map((blog) => (  <tr>
                <td>
                  <div className='blogImg'><img src={`https://localhost:7295/${blog.image}`} alt="" srcSet="" /></div></td>
                <td>{blog.title}</td>
                <td>{blog.description}</td>
                <td>APR 18, 2023</td>
                <td>APR 18, 2023</td>
                <td>
                  <img className='actionBtn' onClick={()=> handleConfirmDelete(blog.id)} src={delIcon} alt="" />
                  <img className='actionBtn' onClick={()=>toggleEditForm(blog.id)} src={editIcon} alt="" />
                </td>
              </tr>))}
            
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
                  <input type="text" id="blogTitle" placeholder='title..' name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="blogDescription">Description:</label>
                  <textarea id="blogDescription" placeholder='description..' name="description"></textarea>
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
              <form onSubmit={handleConfirmEdit}  encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="blogTitle">Blog Title:</label>
                  <input type="text" id="blogTitle" onChange={handleChange} placeholder='title..'  name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="blogDescription">Description:</label>
                  <textarea id="blogDescription" onChange={handleChange} placeholder='description..' name="description"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="blogImage">Image:</label>
                  <input type="file" id="blogImage" onChange={handleChange} name="imagePath" accept="image/*" />
                </div>
                <button className='subBtn'  type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

    </div>
  );
}

export default MyBlog;
