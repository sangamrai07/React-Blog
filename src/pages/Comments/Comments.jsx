import React from 'react'
import './Comment.scss'
import SingleComment from './SingleComment'

function Comments() {
  return (
    <div className='comments'>
          <div className="add">
              <input type="text" placeholder='Add comment..' />
              <button>ADD</button>
          </div>
          <div className="allComments">
              <SingleComment/>
          </div>
    </div>
  )
}

export default Comments
