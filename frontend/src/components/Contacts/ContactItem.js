import React, { useContext, useState } from 'react'
import ContactContext from '../../assets/context/contact/contactContext'
import ContactDetail from './ContactDetail'
import openIcon from '../../assets/icons/chevron-down.svg'
import noImageIcon from '../../assets/icons/noImage.svg'
import { Modal } from '../UI/Modal'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact } = contactContext
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { _id, firstName, image } = contact

  const onDelete = () => {
    deleteContact(_id)
    setIsModalOpen(false)
  }

  return (
    <div className="contact-list_item">
      {image ? (
        <img src={image} alt="" className="contact-list-photo" />
      ) : (
        <img src={noImageIcon} alt="" className="contact-list-photo" />
      )}
      <h3>
        First Name:
        <span>{firstName}</span>
      </h3>

      <button onClick={() => setIsModalOpen(true)}>
        <img src={openIcon} alt="" />
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ContactDetail onDelete={onDelete} contact={contact} />
        </Modal>
      )}
    </div>
  )
}

export default ContactItem
