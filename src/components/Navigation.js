import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from './../assets/routes'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navigation">
      <span>mates</span>
      <div className="menu-content-container">
        <div className="links">
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.CONTACTS}>Contacts</Link>
          <Link to={ROUTES.NOTES}>Notes</Link>
          <Link to={ROUTES.DATES}>Dates</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
