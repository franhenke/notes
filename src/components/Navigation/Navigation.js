import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import menuIcon from '../../assets/icons/menu.svg'

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <ion-icon name="menu-outline" onClick={showSidebar}></ion-icon>
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#">
              <i class="ionicons ion-ios-close-empty"></i>
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
        </ul>
      </nav>
    </>
  )
}

export default Navigation
