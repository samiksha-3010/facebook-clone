import React from 'react'
import './AllCss/CreatePost.css'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {
 const router = useNavigate();
  return (
    <div className='first-stile'>
        <h2>Create Post</h2>

        <div className='create-profile'>
             <div  onClick={() => router("/my-post")} className='icon'>
             <i class="fa-solid fa-pen-to-square fa-xl"></i>
             </div>
            <div className='text'>
          <h3>Post</h3>
             <p>share a post on new feed</p>
            </div>
        </div>
        <div className='create-profile'>
             <div className='icon'>
             <i class="fa-solid fa-toilets-portable fa-xl"></i>
             </div>
            <div className='text'>
          <h3>Story</h3>
             <p>share a post and write something</p>
            </div>
        </div>

        <div className='create-profile'>
             <div className='icon'>
             <i class="fa-solid fa-video-slash fa-xl"></i>
             </div>
            <div className='text'>
          <h3>Reel</h3>
             <p>share a reel</p>
            </div>
        </div>

        <div className='create-profile'>
             <div className='icon'>
             <i class="fa-solid fa-circle-play fa-2xl"></i>
             </div>
            <div className='text'>
          <h3>Room</h3>
             <p>share Video Chat</p>
            </div>
        </div>
         


        <div className='create-profile-page'>

      

        

        

      

   <div className='create-pro'></div>

   <div className='create-profile'>
             <div className='icon'>
             <i class="fa-solid fa-user-plus fa-xl"></i>
             </div>
            <div className='text'>
          <h3>Group</h3>
             <p>Connect with people with entrest</p>
            </div>
        </div> 
   </div>

   <div className='create-profile'>
             <div className='icon'>
             <i class="fa-solid fa-volume-off fa-xl"></i> 
             </div>
            <div className='text'>
          <h3>Ad</h3>
             <p>Add Your Bussneess</p>
            </div>
        </div>

        <div className='create-profile'>
             <div className='icon'>
             <i class="fa-solid fa-file fa-xl"></i>
             </div>
            <div className='text'>
          <h3>Page</h3>
             <p>Connected fans and Custmore</p>
            </div>
        </div> 

        <div className='create-profile'>
             <div className='icon'>
             <i class="fa-regular fa-file fa-xl"></i>
             </div>
            <div className='text'>
          <h3>Event</h3>
             <p>Publick and Private</p>
            </div>
        </div> 
  

        {/* <div className='icon'>
        <i class="fa-solid fa-shop fa-xl"></i>
             </div>
            <div className='text'>
          <h3>MarketPlace</h3>
             <p>Publick and Private</p>
            </div> */}
        </div> 
    // </div>
  )
}

export default CreatePost