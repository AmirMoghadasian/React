import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      
        <ul className="">
          <li><Link to="/" className=''>Home</Link></li>
          <li><Link to="/creatpost" className=''>Creat Post</Link></li>
          <li><Link to="/login" className=''>Login</Link></li>
        </ul>
     
    </nav>
  )
}

export default Navbar