import React from 'react'
import './topbar.css'
import { NotificationsNone } from '@material-ui/icons'
import { Language, Settings } from '@material-ui/icons'
// import DropDown from '../UserDropdown/DropDown'
import { Link } from 'react-router-dom'

export default function Topbar() {
  const menuToggle = () => {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
  }
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleft'>
          <span className='logo'>Adaptive Traffic Control System</span>
        </div>
        <div className='topRight'>
          <Link to='/settings'>
            <div className='topbarIconContainer'>
              <Settings />
            </div>
          </Link>
          <div className='topbarIconContainer'>
            <div className='profile' onClick={() => menuToggle()}>
              <img
                src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
                alt=''
                className='topAvatar'
              />
            </div>

            <div className='menu'>
              <h3>
                Someone famous
                <br />
                <span>Website Designer</span>
              </h3>
              <ul>
                <li>
                  <img src='' alt='' />
                  <a href='#'>My Profile</a>
                </li>

                <li>
                  <img src='' alt='' />
                  <a href='#'>Settings</a>
                </li>

                <li>
                  <img src='' alt='' />
                  <a href='#'>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
