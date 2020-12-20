import React, { useContext, useEffect } from 'react'
import ContactContext from '../../assets/context/contact/contactContext'
import loadingIcon from '../../assets/icons/loading.svg'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, getContacts, loading } = contactContext

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact.</h4>
  }

  return (
    <>
      {contacts !== null && !loading ? (
        <>
          {contacts.map((contact) => (
            <div key={contact._id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </div>
          ))}
        </>
      ) : (
        <div className="loader">
          <img src={loadingIcon} alt="" />
        </div>
      )}
    </>
  )
}

export default Contacts
