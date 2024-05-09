import React, { useState } from 'react';
import './Comment.scss';
import bg3 from '../../images/gridImg3.png';
import bg4 from '../../images/gridImg4.png';
import verified from '../../images/verified.png';
import like from '../../images/likeIcon.png';
import dislike from '../../images/dislikeIcon.png';

function SingleComment() {
  const [commentLikes, setCommentLikes] = useState({});
  const [commentDislikes, setCommentDislikes] = useState({});

  const handleLikeClick = (commentId) => {
    setCommentLikes(prevLikes => ({
      ...prevLikes,
      [commentId]: !prevLikes[commentId]
    }));
    setCommentDislikes(prevDislikes => ({
      ...prevDislikes,
      [commentId]: false
    }));
  };

  const handleDislikeClick = (commentId) => {
    setCommentDislikes(prevDislikes => ({
      ...prevDislikes,
      [commentId]: !prevDislikes[commentId]
    }));
    setCommentLikes(prevLikes => ({
      ...prevLikes,
      [commentId]: false
    }));
  };

  return (
    <>
      <div className='singleComment'>
        <div className="userInfo">
          <div className="userImage">
            <img src={bg3} alt="" />
          </div>
          <div className="userCmnt">
            <h4>Jack Frost  <img src={verified} alt="" /></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sint nemo neque dolorem, recusandae molestiae autem voluptatum obcaecati, sapiente, minima illo temporibus soluta quis in.</p>
            <div className="btns">
              <img className={commentLikes[1] ? 'upX' : ''} src={like} alt="" onClick={() => handleLikeClick(1)} />
              <img className={commentDislikes[1] ? 'downX' : ''} src={dislike} alt="" onClick={() => handleDislikeClick(1)} />
            </div>
          </div>
        </div>
      </div>
      <div className='singleComment'>
        <div className="userInfo">
          <div className="userImage">
            <img src={bg4} alt="" />
          </div>
          <div className="userCmnt">
            <h4>Cristiano Ronaldo <img src={verified} alt="" /></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sint nemo neque dolorem, recusandae molestiae autem voluptatum obcaecati, sapiente, minima illo temporibus soluta quis in.</p>
            <div className="btns">
              <img className={commentLikes[2] ? 'upX' : ''} src={like} alt="" onClick={() => handleLikeClick(2)} />
              <img className={commentDislikes[2] ? 'downX' : ''} src={dislike} alt="" onClick={() => handleDislikeClick(2)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleComment;


