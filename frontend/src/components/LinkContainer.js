import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from './../assets/routes'

const LinkContainer = () => {
  return (
    <div>
      <Link className="link-to-form" to={ROUTES.ADDCONTACT}>
        Add a new Contact
      </Link>

      <Link className="link-to-form" to={ROUTES.ADDDATE}>
        Add a new Date
      </Link>
    </div>
  )
}

export default LinkContainer
