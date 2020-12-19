import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ContactContext from '../assets/context/contact/contactContext'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = contactContext

  const { _id, firstName, image } = contact

  return (
    <Link to={`/contacts/${_id}`}>
      <div className="contact-list_item">
        <img src={image} alt="" />
        <p>{firstName}</p>
      </div>
    </Link>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem
