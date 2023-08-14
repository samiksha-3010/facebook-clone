import React from 'react'
import "./Register.css"

const Register = () => {
  return (

      
    
    <div className='style-reg'>
     <h2>Sign up</h2>
     <p>it,s quick and easy</p>

      <form>
        <div className='first-style'>
         <div> <input type='text' placeholder=' First  Name'/></div>
         <div>  <input type='text' placeholder=' Last Name'/></div>

        </div>
       
        <input className='mobile-password' type='text' placeholder='Mobile Number or email'/><br/>
        <input  className='mobile-password'  type='text' placeholder='New Password'/><br/>

        <b>Dath of Birth</b>
         <div className='date-birth'>
          <div>
            <p>15</p>
            <i class="fa-solid fa-angle-up"></i>
          </div>
          <div>
            <p>Aug</p>
            <i class="fa-solid fa-angle-up"></i>
          </div>
          <div>
            <p>2023</p>
            <i class="fa-solid fa-angle-up"></i>
          </div>
         </div>

         <b>Gender</b>
         <div className='date-birth'>
          <div>
            <p>Female</p>
          </div>
          <div>
            <p>Male</p>
          </div>
          <div>
            <p>Custom</p>
          </div>
         </div>
         <p></p>
         <input className='submit-register' type='Sumbit' value='Sigh in'/>
         <p style={{color: "red" , marginLeft: "10px"}}>All Ready Have an Acount ?</p>


         
      </form>
    </div>
  )
}

export default Register