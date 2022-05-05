import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'


function Feed() {
  return (
    <div className='feed'> 
        <StoryReel />
        <MessageSender />
        

        <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQFYXBrBuFFBSg/profile-displayphoto-shrink_200_200/0/1641108600347?e=1654732800&v=beta&t=lqGjtU02NN3bsNV73VnM-tMIFgJjBfGHHqjZRYgAMWg"
        message="Wow! This Work Guyzzzz.........."
        timestamp="This is a timestamp"
        username="iamsahilbakshi"
        image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.png"
        />
        <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQFYXBrBuFFBSg/profile-displayphoto-shrink_200_200/0/1641108600347?e=1654732800&v=beta&t=lqGjtU02NN3bsNV73VnM-tMIFgJjBfGHHqjZRYgAMWg"
        message="Wow! This Work Guyzzzz.........."
        timestamp="This is a timestamp"
        username="iamsahilbakshi"
        />
    </div>
  )
}

export default Feed