import React from 'react'
import "./AllCss/UpdateProfile.css"
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
  const router = useNavigate();
  return (
    <div className='profile-style'>
      <div className='image-first'>
        {/* <img src='https://media.istockphoto.com/id/485471484/photo/cute-toon-fairy-friends.webp?b=1&s=612x612&w=0&k=20&c=V9yc1jw-3JmTy1wZQgooEbcRyUL0DZJUOudNT9bdpow='/> */}
        <div className='create'>
          <div className='create-1'>
          <i class="fa-solid fa-face-smile fa-xl"></i>
          </div>
          <div className='avtar-1' ><b>Create With Avtar</b></div>
        </div>
        <div className='cover-photo'>
        <div className='create-1'>
        <i class="fa-solid fa-camera fa-xl"></i>
          </div>
          <div className='avtar-1' ><b>Add Cover Photo</b></div>
        </div>
      </div>
      <div className='cercule-section'>
        <div className='cercule'>
          <img src='https://i.pinimg.com/originals/84/80/6b/84806b1284de3f0ef1d44e9c33ca0b17.jpg'/>
         
        </div>
       <div className='profile-part'>
        <h1>Samiksha Yadav</h1>
        <p>3 friends</p>
       </div>
       <div className='edit-profile'>
       {/* <button> +Add to Story</button>
        <button>Edit Profile</button>
        <button></button> */}
        <div className='add-story'>
          <div><i class="fa-solid fa-plus" fa-xl></i></div>
          <div><p>Add to Story</p></div>
        </div>
        <div className='profile'>
          <div>
          <i class="fa-solid fa-pen"></i>
          </div>
          <div  onClick={()=> router('./editprofile')}><p>Edit Profile</p></div>
        </div>
        <div className='icon-first'>
        <i class="fa-solid fa-chevron-down"></i>
        </div>
       </div>
     

      </div>
      <div className='border-style'>
        <div className='btn-style'><b>Post</b></div>
        <div className='btn-style'><p>About</p></div>
        <div className='btn-style'><p>Photo</p></div>
        <div className='btn-style'><p>Video</p></div>
        <div className='btn-style'><p>More</p></div>
        <div className='btn-change'><b>...</b></div>
        <div></div>
      </div>
    
        

    </div>
  )
}

export default UpdateProfile