import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/context/GlobalState'

const AddDate = () => {
  const { addDate } = useContext(GlobalContext)
  const [newValue, setNewValue] = useState({
    id: null,
    date: new Date(),
    contactId: null,
  })

  const { contactID } = useParams()

  const handleChange = (event) => {
    setNewValue((newValue) => ({
      ...newValue,
      [event.target.name]: event.target.value,
    }))
  }
  const handleSubmit = () => {
    newValue.contactId = parseInt(contactID)
    addDate(newValue)
    setNewValue('')
  }

  return (
    <>
      <h3>Add a date with </h3>
      <form onSubmit={handleSubmit}>
        <h4>Add new date</h4>
        <input
          type="date"
          name="date"
          value={newValue.date || ''}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddDate
