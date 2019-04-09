import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import { list } from '../../util'
import './Navbar.css'

const pages = [
  ['/events', 'Events'],
  ['/rooms', 'Rooms'],
  ['/people', 'People & Groups']
]

export default withRouter(function Navbar({ location: { pathname }, isOpen }) {
  return (
    <nav className={list(isOpen && 'open')}>
      <div>
        {pages.map(([path, title]) => (
          <Link 
            key={path}
            to={path} 
            className={list("navbar-button", path === pathname && 'selected')}
          >
            {title}
          </Link> 
        ))}
      </div>
    </nav>
  )
})
