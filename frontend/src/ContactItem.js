import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from './assets/context/contact/contactContext'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = contactContext

  const { _id, firstName } = contact

  return <h3>{firstName}</h3>
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem
