import React, { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blogs.scss';

function Blogs() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='blogs'>
      <div className="head">
        <h1>Blogs</h1>
        <img src="" alt="" /> 
        <button className='sortBtn' onClick={toggleMenu}>Sort By &nbsp; {showMenu ? '▲' : '▼'}</button>
        {showMenu && (
          <div className="dropdown-menu">
           
            <div className="menu-item">Newest</div>
            <div className="menu-item">Oldest</div>
            <div className="menu-item">Most Popular</div>
  
          </div>
        )}
      </div>
      
      <div className="container">
        <BlogCard />
      </div>
    </div>
  );
}

export default Blogs;
