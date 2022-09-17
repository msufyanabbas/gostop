import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='user signup_form'>
          <div className='form'>
            <div className='text_signup'>
              <h4>Register Now</h4>
              <h2>Sign up for free</h2>
              <p>
                Already have an account{' '}
                <Link to='/' className='signin-click'>
                  Sign In
                </Link>
              </p>
            </div>
            <div className='input-text-signup'>
              {' '}
              <input type='text' required /> <i className='fa fa-user'></i>{' '}
              <label>Username</label>{' '}
            </div>
            <div className='input-text-signup'>
              {' '}
              <input type='text' required />{' '}
              <i className='fa fa-envelope-o'></i> <label>E-mail</label>{' '}
            </div>
            <div className='input-text-signup'>
              {' '}
              <input type='password' id='password_input' required />{' '}
              <i className='fa fa-eye-slash'></i> <label>Password</label>{' '}
            </div>
            <div className='signup-button'>
              {' '}
              <button>Sign up</button>{' '}
            </div>
          </div>
          <div className='image-box'> </div>
        </div>
        <div className='user signin_form'>
          <div className='traffic-lights shape'>
            <div className='shadow'></div>
            <div className='light red'></div>
            <div className='light amber'></div>
            <div className='light green'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
