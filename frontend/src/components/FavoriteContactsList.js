import React, { useContext } from 'react'
import FavoriteContact from './FavoriteContact'
import ContactContext from '../assets/context/contact/contactContext'

const FavoriteContactsList = () => {
  const contactContext = useContext(ContactContext)
  const { contacts } = contactContext

  return (
    <div className="favorites">
      <div className="favorite_contact-container">
        <h4>Favorites</h4>
        <div className="favorite_contact-carousel">
          {contacts.length > 0 ? (
            contacts.map((favoriteContact) => (
              <FavoriteContact
                key={favoriteContact._id}
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
