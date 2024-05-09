import React from 'react';
import './Sidebar.scss'
import {Link} from 'react-router-dom'


function Sidebar() {
    return (
      <>
    <div className='sidebar'>
      <h1>Dashboard</h1>
      <ul>
              <li><Link className='link' to='dashboard'>Home</Link></li>
              <li><Link className='link' to='users'>Users</Link></li>
                  
      </ul>
            </div>
            <div className="navbar">
                <div className="img">
                    <img src="" alt="" />
                </div>
            </div>
            </>
  );
}

export default Sidebar;

