import React from 'react'
import PostCard from './PostCard'

const Post = () => {
  return (
    <div className='post'>
        <div className="post__text">
            <h4>Recent post</h4>
            <h5>View all</h5>
        </div>
        <div className="post__cards">
            <PostCard title={"Making a design system from scratch"} data={"12 Feb 2020"} work={"Design, PAtten"} comment={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
            <PostCard title={"Making a design system from scratch"} data={"12 Feb 2020"} work={"Design, PAtten"} comment={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
        </div>
    </div>
  )
}

export default Post