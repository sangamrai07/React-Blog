import React from 'react'
import logo from '../images/Logo.png'
import notify from '../images/notificationIcon.png'
import './css/Navbar.scss'
import { Link } from 'react-router-dom'
import myImg from '../images/Logo.png'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../utils/newRequest'


function Navbar() {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));

const { isLoading:isLoadingUser, error: errorUser, data:dataUser } = useQuery({
  queryKey: ["profile"],
  queryFn: () =>
    newRequest.get('/user/getProfile').then((res) => {
      return res.data;
    }),
});
  return (
    <div className='Navbar'>
    {isLoadingUser ? "Loading" : errorUser ? "Error Occurred." :   <div className="container">
        <div className="logo">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="links">
          <Link to='/blogs' className='link'><span>Blogs</span></Link>
          <Link to='/myBlogs' className='link'><span>My Blogs</span></Link>
          <Link to='/profile' className='link'><span>Profile</span></Link>

          <div className="notify">
             <img src={notify} alt="" />
           </div>
          <Link to='/signup'> <button className='signIn'>Sign In</button></Link>
          {activeUser && (
            <div className="userImg">
              <img src={`https://localhost:7295/${dataUser.image}` !== '' ? `https://localhost:7295/${dataUser.image}` : myImg} />
            </div>)}
        </div>
      </div>
}
    </div>
  )
}

export default Navbar