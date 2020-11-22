import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import FavoriteContact from './FavoriteContact'

const FavoriteContactsList = () => {
  const { contacts } = useContext(GlobalContext)
  const favoriteContacts = contacts.filter(
    (contact) => contact.favorite === true
  )

  return (
    <div className="grid">
      <div className="favorite_contact-container">
        <h4>Favorites</h4>
        <div className="favorite_contact-carousel">
          {favoriteContacts.length > 0 ? (
            favoriteContacts.map((favoriteContact) => (
              <FavoriteContact
                key={favoriteContact.id}
                favoriteContact={favoriteContact}
              />
            ))
          ) : (
            <div className="no_favorites">
              <h3>Add a contact to your favorites</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default FavoriteContactsList
