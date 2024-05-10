import React from 'react'
import './BlogCard.scss'
import bg4 from '../../images/homeBg4.png'
import bg5 from '../../images/homeBg5.png'
import bg6 from '../../images/homeBg6.png'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest'

function BlogCard({item}) {

 

  return (
    
      <Link className='link' to='/singleBlog'>
    <div className='blogCard'>
   
        <div className="imgContainer">
<img src={bg4} alt="" />
        </div>
        <div className="textContainer">
        <span>Posted: APR 7, 2017</span>
          <h2>{item.title}</h2>
        <p>{item.description} </p>
        </div>
        </div>
        </Link>  
  )
}

export default BlogCard
