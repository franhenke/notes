import React, { useEffect, useContext } from 'react'
import ContactContext from '../assets/context/contact/contactContext'
import ContactItem from '../components/ContactItem'

const ContactsPage = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, getContacts, loading, error } = contactContext

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return (
      <div className="no_favorites">
        <h3>No contacts, yet.</h3>
      </div>
    )
  }

  return (
    <div className="favorites">
      <div>
        <h4>Contacts</h4>
        <div className="favorite_contact-carousel">
          {contacts !== null && !loading ? (
            contacts.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))
          ) : (
            <div>...Loading</div>
          )}
          )
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
