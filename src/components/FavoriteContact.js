import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from './../assets/routes'

const FavoriteContact = ({ favoriteContact }) => {
  return (
    <Link to={`/contacts/${favoriteContact.id}`}>
      <div className="fav_contact">
        <img src={favoriteContact.image} alt="" />
        <p>{favoriteContact.firstName}</p>
      </div>
    </Link>
  )
}

export default FavoriteContact
