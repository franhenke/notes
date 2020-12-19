import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from './../assets/routes'

const FavoriteContact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact.id}`}>
      <div className="fav_contact">
        <img src={contact.image} alt="" />
        <p>{contact.firstName}</p>
      </div>
    </Link>
  )
}

export default FavoriteContact
