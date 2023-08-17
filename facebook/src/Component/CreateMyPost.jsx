import React from 'react'
import './AllCss/CreateMyPost.css'

const CreateMyPost = () => {
  return (
    <div className='create-my-post'>
        <div className='navbar-post'>
          
            <div ><h2>Create Post</h2></div>
            <div className='plius-icon'><i class="fa-solid fa-xmark fa-xl"></i></div>
        </div>
        <div className='profile-share'>
            <div  className='plius-icon-second'>
                <img src='https://i.pinimg.com/originals/84/80/6b/84806b1284de3f0ef1d44e9c33ca0b17.jpg'/>
                 </div>

            <div className='text-name'>
                <div>Samiksha Yadav</div>
                <div className='text-name-box'>
                <i class="fa-regular fa-user"></i>
                <p>Friend</p>
                <i class="fa-solid fa-chevron-down"></i>
                    
                </div>
            </div>
        </div>
        <div className='placeholder'>
            <input  placeholder='Whats on Your Mind ,Samiksha?'/>
        </div>
        <div className='smile-post'>
            <div className='smile-post-photo'>
            <img src='https://www.facebook.com/images/composer/SATP_Aa_square-2x.png'/>
            </div>
           
            <div className='smile-emoji'>
            <i class="fa-regular fa-face-smile fa-2xl"></i>
            </div>
        </div>
        <div className='post-section'>
            <div className='your-post'>
                <p>Add to Your Post</p>
            </div>
            <div className='your-style'>
                <div className='stle-emoji'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png'/>
                </div>
                <div className='stle-emoji'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/j0Jp-GpONWx.png'/>
                </div>
                <div className='stle-emoji'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png'/>
                </div>
                <div className='stle-emoji'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png'/>
                </div>
                <div className='stle-emoji'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png'/>
                </div>
                <div className='style-dott'><b>...</b></div>

            </div>
        </div>
        <div className='button-style'>
            <p>Post</p>
           {/* <button>Post</button> */}
        </div>
    </div>
  )
}

export default CreateMyPost