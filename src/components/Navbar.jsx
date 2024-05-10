import React from 'react'
import logo from '../images/Logo.png'
import notify from '../images/notificationIcon.png'
import './css/Navbar.scss'
import { Link } from 'react-router-dom'
import myImg from '../images/Logo.png'


function Navbar() {
const activeUser = JSON.parse(localStorage.getItem("activeUser"));

  return (
    <div className='Navbar'>
          <div className="container">
              <div className="logo">
                  <Link to='/'><img src={logo} alt="" /></Link>
              </div>
              <div className="links">
          <Link to='/blogs' className='link'><span>Blogs</span></Link> 
          <Link to='/myBlogs' className='link'><span>About Us</span></Link> 
           <Link to='/profile' className='link'><span>Contact</span></Link> 
           
          <div className="notify">
             <img src={notify} alt="" />
           </div>
          <Link to='/signup'> <button className='signIn'>Sign In</button></Link>
          {activeUser && (
            <div className="userImg">
              <img src={activeUser.imagePath !== '' ? activeUser.imagePath : myImg} />
            </div>)}
              </div>
      </div>
    </div>
  )
}

export default Navbar
