import React from 'react'
import './login.css'

import RenamePhoto from './rename.jpg'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  const routeChange = () => {
    let path = `/home`
    navigate(path)
  }
  return (
    <div className='wrapper'>
      <div className='logo'>
        <img src={RenamePhoto} alt=''></img>
      </div>
      <div className='text-center mt-4 name'>ATCS</div>
      <form className='p-3 mt-3'>
        <div className='form-field d-flex align-items-center'>
          <span className='far fa-user'></span>
          <input
            type='text'
            name='userName'
            id='userName'
            placeholder='Username'
          />
        </div>
        <div className='form-field d-flex align-items-center'>
          <span className='fas fa-key'></span>
          <input
            type='password'
            name='password'
            id='pwd'
            placeholder='Password'
          />
        </div>
        <button className='btn mt-3' onClick={routeChange}>
          Login
        </button>
      </form>
      <div className='text-center fs-6'>
        <Link to='forgetPassword'>Forget password?</Link> or{' '}
        <Link to='/register'>Sign up</Link>
      </div>
    </div>
  )
}

export default Login
