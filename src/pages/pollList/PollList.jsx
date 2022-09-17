import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'

const PollList = () => {
  const [data, setData] = React.useState([])
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/polls', {
        mode: 'cors',
      })
      const junctionResponse = await fetch('http://')
      const result = await response.json()
      setData(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall()
  }, [])

  const handleDelete = (pollid) => {
    axios
      .delete(`http://localhost:8080/junctions/${pollid}`)
      .then(() => setData(data.filter((item) => item.pollid !== pollid)))
  }
  const columns = [
    { field: 'pollid', headerName: 'Poll ID', width: 250 },
    {
      field: 'jid',
      headerName: 'Junction ID',
      width: 200,
    },
    {
      field: 'jloc',
      headerName: 'Junction Name',
      width: 200,
    },

    {
      field: 'action',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/polls/' + params.row.pollid}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.pollid)}
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
        getRowId={(row) => row.pollid}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default PollList
