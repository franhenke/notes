import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  const userName = 'Sarah'

  return (
    <header className="header">
      <Navigation />
      <h3>Hello {userName}</h3>
    </header>
  )
}

export default Header
