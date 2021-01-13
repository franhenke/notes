import React, { useState, useContext } from 'react'
import AuthContext from '../../assets/context/auth/authContext'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../assets/routes'
import { SidebarData } from './SidebarData'

const Navigation = () => {
  const authContext = useContext(AuthContext)
  const { userInfo, logout } = authContext
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const logoutHandler = () => {
    logout()
  }

  return (
    <div className="sidebar-menu">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <ion-icon name="menu-outline" onClick={showSidebar}></ion-icon>
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#">
              <i className="ionicons ion-ios-close-empty"></i>
            </Link>
          </li>
          {SidebarData.map((link) => {
            return (
              <li key={link.title} className={link.cName}>
                <Link to={link.path}>
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            )
          })}
          <li className="nav-text nav-link-logout">
            <Link to={ROUTES.LOGIN} onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
