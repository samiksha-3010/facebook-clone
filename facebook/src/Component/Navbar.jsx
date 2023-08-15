import React from 'react'
import "./Navbar.css"
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const router = useNavigate();
  return (

    // **************HTML PART ************
    <div className='first-navbar'>
        <div className='search-first'>
            <div className='facbook-icon'>
                <img style={{width: "100%"}} src='https://tse1.mm.bing.net/th?id=OIP.Ua5AXhtGRgPuisZVmetclQHaFL&pid=Api&rs=1&c=1&qlt=95&w=160&h=111'/>
            </div>
         
            <div className='serch-icon'>
            <i class="fa-solid fa-magnifying-glass fa -2xl"></i>
               <input type="text" />
            </div>
        </div>
        <div className='logo-second'>
            
            <div className='house-logo'> <i class="fa-solid fa-house fa-xl"></i> </div>
            <div  className='user-icon'><i  class="fa-regular fa-user fa-xl"></i>
</div>
            <div  className='user-icon'> <i class="fa-solid fa-tv  fa-xl"></i></div>
            <div  className='user-icon'><i class="fa-solid fa-shop  fa-xl"></i></div>

       
    
        </div>
        <div className='icon-third'>
            <div className='icon-last'>
            <i  onClick={() => router('/create-post')} class="fa-solid fa-plus fa-xl"></i>
            </div>
            <div className='icon-last'>
            <i class="fa-regular fa-bell  fa-xl"></i>
            </div>
            <div className='icon-last'>
            <i class="fa-brands fa-facebook-messenger fa-xl"></i>
            </div>
            <div className='icon-last'>
                <img style={{width: "100%",height: "40px", borderRadius: "60px",paddingBottom:"10px"}} src='https://i0.wp.com/vssmn.org/wp-content/uploads/2018/12/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?fit=860%2C681&ssl=1'/>
            </div>
        </div>


    </div>



  )
}

export default Navbar