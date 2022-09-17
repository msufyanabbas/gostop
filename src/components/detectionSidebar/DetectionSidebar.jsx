import React, { useState } from 'react'
import './detectionsidebar.css'
const DetectionSidebar = () => {
  const [poleCount, setPoleCount] = useState(0)
  const [poles, setPoles] = useState([])
  return (
    <div className='detectionsidebar'>
      <h3>Detection Sidebar</h3>
      <p>Search directory of {poleCount} poles</p>
      {poles.map((pole) => {
        return (
          <div key={new Date().getMinutes()}>
            <h6>{pole.id}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default DetectionSidebar
