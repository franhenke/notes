import React, { useEffect, useContext } from 'react'
import ContactContext from '../assets/context/contact/contactContext'
import { saveToLocal } from '../assets/services/localStorage'
import FavoriteContact from '../components/FavoriteContact'
import LinkContainer from '../components/LinkContainer'

export const Home = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, getFavoriteContacts, loading, error } = contactContext

  useEffect(() => {
    getFavoriteContacts()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    saveToLocal('myContacts', contacts)
  }, [contacts])

  return (
    <div className="favorites">
      <div className="favorite_contact-container">
        <h4>Favorites</h4>
        <div className="favorite_contact-carousel">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <>
              {contacts !== null ? (
                contacts.map((contact) => (
                  <FavoriteContact key={contact._id} contact={contact} />
                ))
              ) : (
                <div className="no_favorites">
                  <h3>Add a contact to your favorites</h3>
                </div>
              )}
            </>
          )}
        </div>
        <LinkContainer />
      </div>
    </div>
  )
}
export default Home
