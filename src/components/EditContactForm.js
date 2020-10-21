import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { useHistory, Link } from 'react-router-dom'

const EditContactForm = (route) => {
  let history = useHistory()
  const { contacts, editContact } = useContext(GlobalContext)
  const [selectedContact, setSelectedContact] = useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    addressLine: '',
    postalCode: '',
    city: '',
    state: '',
    dob: '',
  })

  const currentUserId = route.match.params.id

  useEffect(() => {
    const contactId = currentUserId
    const selectedContact = contacts.find(
      (person) => person.id === parseInt(contactId)
    )
    setSelectedContact(selectedContact)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    editContact(selectedContact)
    history.push('/')
  }

  const handleOnChange = (userKey, value) =>
    setSelectedContact({ ...selectedContact, [userKey]: value })

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-header">Add changes to your contact</h2>

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.firstName}
          onChange={(e) => handleOnChange('firstName', e.target.value)}
          type="text"
          placeholder="Enter name"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.lastName}
          onChange={(e) => handleOnChange('lastName', e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.email}
          onChange={(e) => handleOnChange('email', e.target.value)}
          type="text"
          placeholder="Enter designation"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.phone}
          onChange={(e) => handleOnChange('phone', e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="addressLine"
        >
          Address / Street
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.addressLine}
          onChange={(e) => handleOnChange('addressLine', e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="postalCode"
        >
          Postal Code
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.postalCode}
          onChange={(e) => handleOnChange('postalCode', e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="city"
        >
          City
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.city}
          onChange={(e) => handleOnChange('city', e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="state"
        >
          State
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.state}
          onChange={(e) => handleOnChange('state', e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="dob"
        >
          Birthday
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedContact.dob}
          onChange={(e) => handleOnChange('dob', e.target.value)}
          type="date"
          placeholder="Enter location"
        />
        <div className="button-container">
          <button className="contact-button-update">Update</button>
          <div className="contact-button-cancel">
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditContactForm
