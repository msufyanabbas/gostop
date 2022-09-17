import React from 'react'

import './user.css'
import { useEffect } from 'react'
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'

export default function User() {
  const params = useParams()
  const [data, setData] = React.useState({})
  const makeAPICall = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/users/${params.userId}`,
        {
          mode: 'cors',
        }
      )
      const result = await response.json()
      setData(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall()
  }, [])
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>{data.pfuname}</span>
              <span className='userShowUserTitle'>{data.prole}</span>
            </div>
          </div>
          <div className='userShowButton'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity />
              <span className='userShowInfoTitle'>{data.puname}</span>
            </div>

            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid />
              <span className='userShowInfoTitle'>{data.phoneNo}</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline />
              <span className='userShowInfoTitle'>{data.pemail}</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder={data.puname}
                  className='userUpdateInput'
                ></input>
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder={data.pfuname}
                  className='userUpdateInput'
                ></input>
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder={data.pemail}
                  className='userUpdateInput'
                ></input>
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder={data.phoneNo}
                  className='userUpdateInput'
                ></input>
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'></div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
