import React from 'react'

const PostCard = ({title,data,work,comment}) => {
  return (
    <div className='post__card'>
        <h1>{title}</h1>
        <div className="postcard__item">
            <h4>{data}</h4>
            <h4>{work}</h4>
        </div>
        <p>{comment}</p>
    </div>
  )
}

export default PostCard