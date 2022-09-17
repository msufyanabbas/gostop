import './userList.css'
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import axios from 'axios'

import { userRows } from '../../dummyData'

import { DeleteOutline } from '@material-ui/icons'
export default function UserList() {
  const [data, setData] = React.useState([])
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/users', {
        mode: 'cors',
      })
      const result = await response.json()
      setData(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall()
  }, [])

  const handleDelete = (pid) => {
    axios
      .delete(`http://localhost:8080/users/${pid}`)
      .then(() => setData(data.filter((item) => item.pid !== pid)))
  }
  const columns = [
    { field: 'pid', headerName: 'ID', width: 50 },
    {
      field: 'puname',
      headerName: 'User',
      width: 150,
      renderCell: (params) => {
        return <div className='userListUser'>{params.row.puname}</div>
      },
    },
    { field: 'pfuname', headerName: 'Full Name', width: 150 },
    { field: 'pemail', headerName: 'Email', width: 200 },
    {
      field: 'phoneNo',
      headerName: 'Phone No.',
      width: 150,
    },
    {
      field: 'prole',
      headerName: 'Role',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.pid}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.pid)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        getRowId={(row) => row.pid}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
