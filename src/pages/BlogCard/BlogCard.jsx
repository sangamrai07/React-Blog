import React from 'react'
import './BlogCard.scss'
import bg4 from '../../images/homeBg4.png'
import bg5 from '../../images/homeBg5.png'
import bg6 from '../../images/homeBg6.png'
import { Link } from 'react-router-dom'


function BlogCard() {
  return (
    <>
      <Link className='link' to='/singleBlog'>
    <div className='blogCard'>
   
        <div className="imgContainer">
<img src={bg4} alt="" />
        </div>
        <div className="textContainer">
        <span>Posted: APR 7, 2017</span>
        <h2>Lorem ipsum dolor sit amet </h2>
        <p>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
        </div>
        </div>
        </Link>
       <div className='blogCard'>
   
        <div className="imgContainer">
<img src={bg5} alt="" />
        </div>
        <div className="textContainer">
        <span>Posted: APR 7, 2017</span>
        <h2>Lorem ipsum dolor sit amet </h2>
        <p>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
        </div>
      </div>
       <div className='blogCard'>
   
        <div className="imgContainer">
<img src={bg6} alt="" />
        </div>
        <div className="textContainer">
        <span>Posted: APR 7, 2017</span>
        <h2>Lorem ipsum dolor sit amet </h2>
        <p>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
        </div>
        </div>
      </>
  )
}

export default BlogCard
