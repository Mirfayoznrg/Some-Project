import React from 'react'
import {Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container'>
      <nav>
        <div className="logo">
          <Link to={'/'}>
            <img style={{width: '50px'}} src='/image.png' alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink className='text-3xl' to={'/Mac'}>
              MacBook
            </NavLink>
          </li>

          <li>
            <NavLink className='text-3xl' to={'/'}>
              iPhone
            </NavLink>
          </li>

          <li>
            <NavLink className='text-3xl' to={'/Watch'}>
              iWatch
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar