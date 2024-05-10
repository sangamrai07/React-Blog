import React, { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blogs.scss';
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

function Blogs() {


  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['blogs'], // 
    queryFn: () =>
      newRequest.get('/Blog').then((res) => {
        return res.data;
      })
  });
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
       {isPending ? "Extracting" : error ? "Error Occurred !!" : (data && data.length > 0) ? data.map((blog) => (
            <BlogCard key={blog.id} item={blog} />
          )) :                
                
                  <h1>No Blog Posts available.</h1>
               }
      </div>
    </div>
  );
}

export default Blogs;