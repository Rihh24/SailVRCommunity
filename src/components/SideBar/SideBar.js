import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <h1>Pirates of the Week!</h1>
      <div className='pirate-list'>
        <ul>
          <li>Pirate 1</li>
          <li>Pirate 2</li>
          <li>Pirate 3</li>
          <li>Pirate 4</li>
          <li>Pirate 5</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar