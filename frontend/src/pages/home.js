import React, { useEffect, useContext } from 'react'
import ContactItem from '../ContactItem'
import ContactContext from '../assets/context/contact/contactContext'

export const Home = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, getContacts } = contactContext

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {contacts !== null ? (
        <div>
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </div>
      ) : (
        <h3>...loading</h3>
      )}
      {/* <FavoriteContactsList />
      <UpcomingDatesList sortedUpcomingDates={sortedUpcomingDates} /> */}
    </>
  )
}
export default Home
