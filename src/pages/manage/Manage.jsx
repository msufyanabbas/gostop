import React from 'react'
import { Link } from 'react-router-dom'
import './manage.css'

export default function Manage() {
  return (
    <div className='manage'>
      <div className='junctionManage'>
        <details>
          <summary>Junction Management</summary>
          <ul>
            <Link to='/addJunction'>
              <li>Add Junction</li>
            </Link>
            <Link to='/updateJunction'>
              <li>Update Junction</li>
            </Link>
            <Link to='/deleteJunction'>
              <li>Delete Junction</li>
            </Link>
          </ul>
        </details>
      </div>
      <div className='pollManage'>
        <details>
          <summary>Pole Management</summary>
          <ul>
            <Link to='/addPole'>
              <li>Add Pole</li>
            </Link>
            <Link to='/updatePole'>
              <li>Update Pole</li>
            </Link>
            <Link to='/delete'>
              <li>Delete Pole</li>
            </Link>
          </ul>
        </details>
      </div>
    </div>
  )
}
