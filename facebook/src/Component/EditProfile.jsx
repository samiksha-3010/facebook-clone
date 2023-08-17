import React from 'react'
import './AllCss/EditProfile.css'

const EditProfile = () => {
  return (
    <div className='edit-profile-first'>
   <div className='edit-profile-navbar'>
    <h2>Edit Profile</h2>
    {/* <div className='edit-section' ><h2>Edit Profile</h2></div> */}
    <div className='plus-edit'>
    <i class="fa-solid fa-xmark fa-2xl"></i>


    </div>
   </div>
   <div className='edit-pro-second'>
     <div><h4>Profile Picture</h4></div>
     <button >Edit</button>

   </div>
   <div className='middle-profile'>
    <div className='middle-profile-photo'>
        <img src='https://i.pinimg.com/originals/84/80/6b/84806b1284de3f0ef1d44e9c33ca0b17.jpg'/>
    </div>
   </div>

   <div className='edit-pro-second'>
     <div><h4>Cover Photo</h4></div>
     <button >Add</button>

   </div>

   <div className='middle-profile'>
    <div className='middle-profile-photos'>
    </div>
   </div>

   <div className='edit-pro-second'>
     <div><h4>Avtar<br/><p style={{color:"gray", fontSize:"small"}}>Only you can view this section</p></h4></div>
     <button >Create</button>

   </div>

   <div className='middle-profile'>
    <div className='middle-profile-photos'>
        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/etbZBoA4Om4.png'/>

    </div>
    <p style={{color:"gray", paddingLeft:"100px"}}>Express yourself using an avatar</p>
    <button style={{height:"30px", marginLeft:"100px" , color:"blue" }}>Create Avtar</button>
   </div>
   <div className='edit-pro-second'>
     <div><h4>Boi</h4></div>
     <button >Edit</button>

   </div>
   <p style={{paddingLeft:"100px"}}>Describe yourself…</p>
   <div className='edit-pro-second'>
     <div><h4>Customise your Intro</h4></div>
     <button >Add</button>
   </div>
   <div className='current-town'>
    <div> <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Yifeo6sHdtL.png'/></div>
    <div>Current town or city</div>
   </div>

   <div className='current-town'>
    <div> <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/s_ONRClAxbX.png'/></div>
    <div>Workplace</div>
   </div>

   <div className='current-town'>
    <div> <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/H804hWf2rBh.png'/></div>
    <div>School or university</div>
   </div>

   <div className='current-town'>
    <div> <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/dkccKhK21Su.png'/></div>
    <div>Home town</div>
   </div>

   <div className='current-town'>
    <div> <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BgZqRs0p1T8.png'/></div>
    <div>Relationship status</div>
   </div>

   <div className='edit-pro-second'>
     <div><h4>Hobbies</h4></div>
     <button >Edit</button>

   </div>

   <div className='edit-pro-second'>
     <div><h4>Featured</h4></div>
     <button >Edit</button>

   </div>


   <div className='middle-profile'>
    <div className='middle-profile-photos'>
        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/Ql43NN0QN4C.png'/>

    </div>
    </div>
    <button  style={{width:"90%", height:"40px", borderRadius:"10px",margin:"auto"}}>Edit</button>
    </div>
  )
}

export default EditProfile