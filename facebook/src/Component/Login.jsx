import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const router= useNavigate();
  return (

    <div className='style-login'>
      <form>
        <label>Email:</label><br/>
        <input className='email-password' type='text'placeholder='email adress and phone number'/><br/>
        <label>Password:</label><br/>
        <input className='email-password' type='password' placeholder='**********'/><br/>
        <input className='submit' type='submit' value='Log in'/><br/>
        <p className='password'>Forgetten Password ?</p>
        <button onClick={() =>router('/Register')} className='button'>Creat New Acount</button>
      </form>


    </div>
  )
}

export default Login