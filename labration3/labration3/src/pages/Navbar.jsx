import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <nav >
      
        <ul className="nav-links">
          <li><Link to="/" className='nav-links'>Home</Link></li>
          <li><Link to="/creatpost" className='nav-links'>CreatPost</Link></li>
          <li><Link to="/login" className='nav-links'>Login</Link></li>
        </ul>
     
    </nav>
  )
}

export default Navbar