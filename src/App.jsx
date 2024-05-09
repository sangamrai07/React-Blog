import React from 'react'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import MyBlog from './pages/MyBlogs/MyBlog';
import ProfilePage from './pages/Profile/ProfilePage';
import Sidebar from './pages/Admin/Sidebar/Sidebar';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Users from './pages/Admin/Users/Users';

function App() {

  const Layout = () => {
    return (
      <>     
      <Navbar/>  
          <Outlet />
         
          <ToastContainer />
      </>
    );
  };

   const AdminLayout = () => {
    return (
      <>     
      <Sidebar/>  
          <Outlet />
         
          <ToastContainer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [

        {
          path: '',
          element:
            <Home/>
        },
           {
          path: '/signup',
          element:
            <Signup/>
        },
            {
          path: '/login',
          element:
            <Login/>
        },
            {
          path: '/blogs',
          element:
            <Blogs/>
        },
            ,
            {
          path: '/singleBlog',
          element:
            <SingleBlog/>
        },
             ,
            {
          path: '/myBlogs',
          element:
            <MyBlog/>
        },
             {
          path: '/profile',
          element:
            <ProfilePage/>
        },
      ]
    }
    , {
      path: '',
      element: <AdminLayout />,
      children: [
        {
          
          path: '/dashboard',
          element:
            <Dashboard/>
        
        },
           {
          
          path: '/users',
          element:
            <Users/>
        
        }
      ]
    }
  ]
  )

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
