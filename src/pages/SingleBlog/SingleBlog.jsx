import React, { useState } from 'react'
import './SingleBlog.scss'
import bg1 from '../../images/homeBg6.png'
import Slider from '../../components/Slider'
import Comments from '../Comments/Comments'
import verified from '../../images/verified.png'
import like from '../../images/likeIcon.png'
import dislike from '../../images/dislikeIcon.png'
import { Slide } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

function SingleBlog() {

    const [selectedBlogVote, setSelectedBlogVote] = useState(null);

  const handleVoteClick = (voteType) => {
    setSelectedBlogVote(voteType === selectedBlogVote ? null : voteType);
  };

    const { id } = useParams();

    const { isPending, error, data } = useQuery({
      queryKey: ['blog'],
      queryFn: () =>
          newRequest.get(`/blog/${id}`).then((res) => {
              return res.data;
          })
  });
  
  const { isPending: isPendingUser, error: errorUser, data: dataUser } = useQuery({
      queryKey: ['user'],
      queryEnabled: !!data && !!data.authorId, // Enable the query only if data.authorId is available
      queryFn: () =>
          newRequest.get(`/user/getProfile/${data.authorId}`).then((res) => {
              return res.data;
          })
  });
  
  


  
  return (
    <div className='singleBlog'>
      {isPending ? "Loading" : error ? "Error Occurred." : <div className="container">
        <div className="left">
          <h1>{data.title}</h1>
          <div className="user">
            <div className="userImg">
              <img src={bg1} alt="" />
            </div>
            {isPendingUser ? "Loading" : errorUser ? "Error Occurred." :   <h3>{dataUser.userName} <img src={verified} alt="" /></h3>}
          </div>
          <div className="sliderContainer">
        <img src={`https://localhost:7295/${data.image}`}></img>
          </div>
          <div className="votes">
                          
            <img className={selectedBlogVote === 'like' ? 'upVote' : ''} src={like} alt="" onClick={() => handleVoteClick('like')} />
            <img className={selectedBlogVote === 'dislike' ? 'downVote' : ''} src={dislike} alt="" onClick={() => handleVoteClick('dislike')} />
           
          </div>
         
          <div className="content">
            <h2>Description</h2>
            <p>{data.description}</p>
          </div>
          <br />
          <hr />
          <div className="comments">
            <h2>Comments</h2>
            <Comments />
          </div>
        </div>
        <div className="right"></div>
      </div>
      }
    </div>
  )
}

export default SingleBlog