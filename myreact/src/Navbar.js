import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav_div'>
        <NavLink to="/" className="nav active">signup</NavLink>
        <NavLink to="/login" className="nav">Login</NavLink>
    </div>
  )
}

export default Navbar