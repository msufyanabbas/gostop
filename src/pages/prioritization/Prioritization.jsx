import React from 'react'
import './prioritization.css'
import { Link } from 'react-router-dom'
import PrioritizationSidebar from '../../components/prioritizationSidebar/PrioritizationSidebar'
const Prioritization = () => {
  return (
    <>
      <PrioritizationSidebar />
      <div className='prioritization'>
        <h3>Prioritization</h3>
        <Link className='pMenu' to='/prioritization/adaptive'>
          <ul>
            <li>Apply Adaptive System</li>
          </ul>
        </Link>
        <Link className='pMenu' to='/prioritization/fixedtime'>
          <ul>
            <li>Apply Fixed Time System</li>
          </ul>
        </Link>
      </div>
    </>
  )
}

export default Prioritization
