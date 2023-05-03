import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <div className='Navbar'>
        <NavLink to={"/tablepage"}>Table</NavLink>
        <NavLink to={"/formpage"}>Form</NavLink>
    </div>
  )
}
