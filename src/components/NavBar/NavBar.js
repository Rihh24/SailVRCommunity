// NavBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sail_logo from "../Assets/sail_logo10-02.png";
import "./NavBar.css";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='container'>
      <div className='nav-logo'>
        <Link to="/home"><img src={sail_logo} alt="sail logo"/></Link>
      </div>

      {/* Dropdown menu for mobile screens */}
      {/* <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
        <div className='dropdown-trigger' onClick={toggleDropdown}>Menu</div>
        <div className='dropdown-content'>
          <Link to='/home'>Dev Updates</Link>
          <Link to='/community'>Community Content</Link>
          <Link to='/clans'>Clans</Link>
          <Link to='/shop'>In Game Shop</Link>
        </div>
      </div> */}

      <ul className='nav-menu'>
        <li>Dev Updates</li>
        <li>Community Content</li>
        <li>Clans</li>
        <li><Link to='/shop'>In Game Shop</Link></li>
      </ul>
      <div className='profile-section'>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
