import React from 'react'
import './reportingsidebar.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
const ReportingSidebar = () => {
  const count = 1
  const [junctions, setJunctions] = useState([])
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/junctions', {
        mode: 'cors',
      })
      const result = await response.json()
      setJunctions(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall()
  }, [])
  return (
    <div className='reportingsidebar'>
      <h3>Junctions</h3>
      <p>Search directory of {count} junctions</p>
      <div className='searchJunc'>
        <input
          type={'search'}
          id='junctionSearch'
          name='JunctionSearch'
          className='junctionSearch'
        />
      </div>
      {junctions.map((junction) => {
        return (
          <div className='junctionitems'>
            <ul>
              <li>{junction.login}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ReportingSidebar
