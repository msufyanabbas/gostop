import './junctionList.css'
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import axios from 'axios'

import { userRows } from '../../dummyData'

import { DeleteOutline } from '@material-ui/icons'
export default function JunctionList() {
  const [data, setData] = React.useState([])
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/junctions', {
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

  const handleDelete = (jid) => {
    axios
      .delete(`http://localhost:8080/junctions/${jid}`)
      .then(() => setData(data.filter((item) => item.jid !== jid)))
  }
  const columns = [
    { field: 'jid', headerName: 'Junction ID', width: 250 },
    {
      field: 'jloc',
      headerName: 'Junction Name',
      width: 200,
    },
    {
      field: 'nuofpoles',
      headerName: 'Number of Poles',
      width: 200,
    },

    {
      field: 'action',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/junctions/' + params.row.jid}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.jid)}
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
        getRowId={(row) => row.jid}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
