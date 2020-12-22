import React, { useContext, useState } from 'react'
import ContactContext from '../../assets/context/contact/contactContext'
import noImageIcon from '../../assets/icons/noImage.svg'
import { Modal } from '../UI/Modal'
import ContactDetail from './ContactDetail'

const FavoriteContact = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact } = contactContext
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { _id, firstName, image } = contact

  const onDelete = () => {
    deleteContact(_id)
    setIsModalOpen(false)
  }

  return (
    <div className="favorite-contact-item">
      {image ? (
        <button
          onClick={() => setIsModalOpen(true)}
          className="contact-list-modal-btn"
        >
          <img src={image} alt="" className="contact-list-photo" />
        </button>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>
          <img src={noImageIcon} alt="" className="contact-list-photo" />
        </button>
      )}
      <p>{firstName}</p>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ContactDetail onDelete={onDelete} contact={contact} />
        </Modal>
      )}
    </div>
  )
}

export default FavoriteContact
