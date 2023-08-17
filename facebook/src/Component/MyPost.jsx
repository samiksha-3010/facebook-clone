import React from 'react'
import './AllCss/MyPost.css'

export const MyPost = () => {
  return (
    <div className='first-style-post'>
    

  <div className='left-section-post'>
  <div className='icon-post'>
        <div className='plus-post'>
        <i class="fa-solid fa-xmark fa-xl"></i>

        </div>
        <div className='facbook-post'>
          <img src='https://tse1.mm.bing.net/th?id=OIP.Ua5AXhtGRgPuisZVmetclQHaFL&pid=Api&rs=1&c=1&qlt=95&w=160&h=111'/>

        </div>
      </div>
      <div className='profile-post'>
        <div className='your-post'><h2>Your Story</h2></div>
        <div className='your-story'><i class="fa-solid fa-gear fa-xl"></i></div>
      </div>
      <div className='update-profile'>
      <div className='image'>
        <img src='https://i.pinimg.com/originals/84/80/6b/84806b1284de3f0ef1d44e9c33ca0b17.jpg'/>
      
      </div>
  <div className='profile-picture'>
    <b>Samiksha yadav</b>
   
  </div>
  {/* <div className='profile-name'></div> */}
  </div>
  </div>
  <div className='right-section-post'>
    <div className='navbar'>
      <div className='icon-style'>
      <i class="fa-solid fa-plus fa-2xl"></i>
      </div>
      <div className='icon-style'>
      <i class="fa-solid fa-bell fa-2xl"></i>
      </div>
      <div className='icon-style' >
        <img src='https://i.pinimg.com/originals/84/80/6b/84806b1284de3f0ef1d44e9c33ca0b17.jpg'/>
      </div>


    </div>
    <div className='story-image'>
      <div className='photo-story'>
        <div className='photo-first'>
        <i style={{paddingTop:"10px"}} class="fa-solid fa-image fa-xl"></i>
        </div>
        <p style={{color:"white" , marginLeft:"60px"}}>Create a Photo</p>

      </div>
      <div className='photo-stor'>
      <div className='photo-first'><b >Pp</b></div>
        <p style={{color:"white" , marginLeft:"60px"}}>Create a Story</p>
      </div>
    </div>
  </div>
 
   
    </div>

  
  )
}
