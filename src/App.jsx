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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebaseConf/firebaseConfig";
import { useEffect } from 'react';
import { toast } from "react-toastify";
import Message from "./Message";
import { success } from './components/Toast';




function App() {


  const vapidKey = 'BBEa_7q1U9xltPst6suS2XbiFYmoNYN2NCbV6fCOKrszNpBryt7o79ggo-Cg0XEpGcvRjuk8wXzFuehnhHnana8';
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const randomString = Math.random().toString(20).substring(2, 14) + Math.random().toString(20).substring(2, 14);
  const deviceID = `${userAgent}-${platform}-${randomString}`;

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    console.log(permission)
    if (permission === "granted") {
      // messaging.app.getToken()
      getToken(messaging, { vapidKey: vapidKey })
        .then((currentToken) => {
          if (currentToken) {
            localStorage.setItem('deviceToken', currentToken)

            console.log("heelllllooooooo")
            console.log(currentToken)
            console.log(deviceID)

            localStorage.setItem('deviceName', deviceID)
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }

  }



  useEffect(() => {
    requestPermission();
  }, []);


  onMessage(messaging, (payload) => {
    console.log(payload.notification);
    console.log("THis is my meessage");
    // alert(payload.notification.body)
    success(payload.notification.body)
  });




  const queryClient = new QueryClient();


  const Layout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />

          <ToastContainer />
        </QueryClientProvider>
      </>
    );
  };

  const AdminLayout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Sidebar />
          <Outlet />

          <ToastContainer />
        </QueryClientProvider>
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
            <Home />
        },
        {
          path: '/signup',
          element:
            <Signup />
        },
        {
          path: '/login',
          element:
            <Login />
        },
        {
          path: '/blogs',
          element:
            <Blogs />
        },
        ,
        {
          path: '/singleBlog',
          element:
            <SingleBlog />
        },
        ,
        {
          path: '/myBlogs',
          element:
            <MyBlog />
        },
        {
          path: '/profile',
          element:
            <ProfilePage />
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
            <Dashboard />

        },
        {

          path: '/users',
          element:
            <Users />

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
