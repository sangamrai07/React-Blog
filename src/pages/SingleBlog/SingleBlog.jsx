import React, { useState } from 'react'
import './SingleBlog.scss'
import bg1 from '../../images/homeBg6.png'
import Slider from '../../components/Slider'
import Comments from '../Comments/Comments'
import verified from '../../images/verified.png'
import like from '../../images/likeIcon.png'
import dislike from '../../images/dislikeIcon.png'
import { Slide } from '@mui/material'

function SingleBlog() {

    const [selectedBlogVote, setSelectedBlogVote] = useState(null);

  const handleVoteClick = (voteType) => {
    setSelectedBlogVote(voteType === selectedBlogVote ? null : voteType);
  };
  return (
    <div className='singleBlog'>
      <div className="container">
          <div className="left">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos.</h1>
              <div className="user">
                  <div className="userImg">
                      <img src={bg1} alt="" />
                  </div>
                  <h3>Ed Elric <img src={verified} alt="" /></h3>
              </div>
              <div className="sliderContainer">
                 <Slider/>
          </div>
              <div className="votes">
                          
              <img className={selectedBlogVote === 'like' ? 'upVote' : ''} src={like} alt="" onClick={() => handleVoteClick('like')} />
              <img className={selectedBlogVote === 'dislike' ? 'downVote' : ''} src={dislike} alt="" onClick={() => handleVoteClick('dislike')} />
           
          </div>
         
              <div className="content">
            <h2>Description</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur nihil quia voluptatem recusandae deserunt dolorum, at dolore itaque hic, aperiam blanditiis dolorem perferendis assumenda excepturi neque natus ratione voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nam architecto adipisci suscipit repellendus maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas!</p>
          </div>
          <br />
           <hr />
              <div className="comments">
            <h2>Comments</h2>
            <Comments/>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default SingleBlog
