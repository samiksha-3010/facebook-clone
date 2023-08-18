import React from 'react'
import "./AllCss/MyAcount.css"

const MyAcount = () => {
  return (
    <div className='my-acount-first'>
      <div className='my-acount-second'>
      <div className='profile-div'>
        <img src='https://i.pinimg.com/originals/84/80/6b/84806b1284de3f0ef1d44e9c33ca0b17.jpg'/>
      </div>
      <div className='samiksha'><b>Samiksha Yadav</b></div>
     
       </div>

       <div className='see-all-profile'>
        <p>See All Profile</p>
       </div>
       <div className='all-div'>
        <div className='all-profile'><i class="fa-solid fa-gear fa-xl"></i></div>
        <div className='all-profile-two'><b>Seeting & Privacy</b></div>
        <div className='all-profile-three'>
        <i class="fa-solid fa-chevron-right fa-xl"></i>
        </div>

       </div>

       <div className='all-div'>
        <div className='all-profile'><i class="fa-solid fa-gear fa-xl"></i></div>
        <div className='all-profile-two'><b>Help & Support</b></div>
        <div className='all-profile-three'>
        <i class="fa-solid fa-chevron-right fa-xl"></i>
        </div>

       </div>

      
       <div className='all-div'>
        <div className='all-profile'><i class="fa-solid fa-star-and-crescent fa-xl"></i></div>
        <div className='all-profile-two'><b>Display & Asseccibility</b></div>
        <div className='all-profile-three'>
        <i class="fa-solid fa-chevron-right fa-xl"></i>
        </div>

       </div>

     
       <div className='all-div'>
        <div className='all-profile'><i class="fa-solid fa-circle-question fa-xl"></i></div>
        <div className='all-profile-two'><b>Give Feeback</b></div>
        

       </div>

      
       <div className='all-div'>
        <div className='all-profile'><i class="fa-solid fa-arrow-right-from-bracket fa-xl"></i></div>
        <div className='all-profile-two'><b>Log Out</b></div>
       

       </div>

       
       </div>
  )
}

export default MyAcount