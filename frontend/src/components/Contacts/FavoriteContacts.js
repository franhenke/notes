import React, { useContext, useEffect } from 'react'
import ContactContext from '../../assets/context/contact/contactContext'
import loadingIcon from '../../assets/icons/loading.svg'
import FavoriteContact from './FavoriteContact'
import Message from '../UI/Message'

const FavoriteContacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, getFavoriteContacts, loading, error } = contactContext

  useEffect(() => {
    getFavoriteContacts()
    // eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return (
      <div className="no_favorites">
        <h3>Add a contact to your favorites</h3>
      </div>
    )
  }

  return (
    <div className="favorites">
      <div className="favorite_contact-container">
        <h4>Favorites</h4>
        {loading ? (
          <div className="loader">
            <img src={loadingIcon} alt="" />
          </div>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="favorite_contact-carousel">
            {contacts.map((faveContact) => (
              <div key={faveContact._id} timeout={500} className="item">
                <FavoriteContact contact={faveContact} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoriteContacts
