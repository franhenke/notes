import React from 'react'
import { Link, useParams } from 'react-router-dom'
import * as ROUTES from './../assets/routes'

const Navigation = () => {
  return (
    <nav>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.CONTACTS}>Contacts</Link>
      <Link to={ROUTES.NOTES}>Notes</Link>
      <Link to={ROUTES.DATES}>Dates</Link>
    </nav>
  )
}

export default Navigation
