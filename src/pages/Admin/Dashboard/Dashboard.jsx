import React from 'react'
import './Dashboard.scss'

function Dashboard() {


  return (
      <div className='dashboard'>
      <h1>Welcome to the Dashboard, Admin</h1>
      <br />
          <div className="container">
              
        <div className="singleContainer">
         <h1>Post Count: </h1>
          </div>
        <div className="singleContainer">
           <h1>Post Count Per Month: </h1>
          <span>Month:</span><input type="text" />  <button className="monthInfo">Select</button>
           <h2>Post Count: </h2>
          </div>
        <div className="singleContainer">
           <h1>Comment Count: </h1>
          </div>
        <div className="singleContainer">
                <h1>Comment Count Per Month: </h1>
          <span>Month:</span><input type="text" />  <button className="monthInfo">Select</button>
           <h2>Comment Count: </h2>
          </div>
        <div className="singleContainer">
          <h1>Upvote Count: </h1>
           <h1>Downvote Count: </h1>
          </div>
        <div className="singleContainer">
                <h1>Votes Count Per Month: </h1>
          <span>Month:</span><input type="text" />  <button className="monthInfo">Select</button>
           <h2>Upvote Count: </h2>
           <h2>Downvote Count: </h2>
          </div>

        <div className='listContainer'>
           <h1>Popular Blogs: </h1>
          </div>
        <div className='listContainer'>
                <h1>Popular Blogs Per Month: </h1>
          <span>Month:</span> <input type="text" /> <button className="monthInfo">Select</button>
            <h2>Popular Blogs:</h2>
          </div>
</div>
    </div>
  )
}

export default Dashboard
