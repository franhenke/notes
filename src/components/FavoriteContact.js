import React from 'react'

const FavoriteContact = ({ favoriteContact }) => {
  return (
    <div className="fav_contact">
      <img src={favoriteContact.image} alt="" />
      <p>{favoriteContact.firstName}</p>
    </div>
  )
}

export default FavoriteContact
