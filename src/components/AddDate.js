import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { useHistory, Link } from 'react-router-dom'
import useForm from '../assets/services/useForm'
import { loadFromLocal, saveToLocal } from '../assets/services/LocalStorage'

const AddDate = (route, date, setDate) => {
  const { values, handleChange, handleSubmit } = useForm(setDate)
  const { contacts } = useContext(GlobalContext)
  let history = useHistory()

  const [selectedContact, setSelectedContact] = useState({
    id: null,
    firstName: '',
    lastName: '',
  })

  function setDate() {
    console.log(values)
  }

  const currentUserId = route.match.params.id

  useEffect(() => {
    const contactId = currentUserId
    const selectedContact = contacts.find(
      (person) => person.id === parseInt(contactId)
    )
    setSelectedContact(selectedContact)
    values.id = selectedContact.id
    values.who = selectedContact.firstName + ' ' + selectedContact.lastName
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add a date with {selectedContact.firstName}</h1>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={values.date || ''}
        />
        <input
          type="text"
          name="where"
          onChange={handleChange}
          value={values.where || ''}
        />
        <button>Add Date</button>
      </form>
    </div>
  )
}

export default AddDate
