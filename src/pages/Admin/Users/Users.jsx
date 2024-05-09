import React, { useState } from 'react';
import './Users.scss';
import bg1 from '../../../images/homeBg6.png';
import delIcon from '../../../images/deleteIcon.png';
import editIcon from '../../../images/editIcon.png';

function Users() {
 const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
      const toggleDeleteConfirmation = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  return (
    <div className='users'>
      <div className="container">
        <div className="head">
          <h1>Users</h1>
    
        </div>


        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th style={{ width: '120px' }}>Image</th>
                <th style={{ width: '195px' }}>Username</th>
               
                <th style={{ width: '270px' }}>Created At</th>
                <th style={{ width: '270px' }}>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className='blogImg'><img src={bg1} alt="" srcSet="" /></div></td>
                <td>This is demo Blog</td>
           
                <td>APR 18, 2023</td>
                <td>APR 18, 2023</td>
                <td>
                  <img className='actionBtn' onClick={toggleDeleteConfirmation} src={delIcon} alt="" />
                  <img className='actionBtn'  src={editIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className='blogImg'><img src={bg1} alt="" srcSet="" /></div></td>
                <td>This is demo Blog</td>
                
                <td>APR 18, 2023</td>
                <td>APR 18, 2023</td>
                <td>
                  <img className='actionBtn' src={delIcon} alt="" />
                  <img className='actionBtn' src={editIcon} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
                {showDeleteConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleDeleteConfirmation}>&times;</span>
            <p>Do you want to delete this user?</p>
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

export default Users;
