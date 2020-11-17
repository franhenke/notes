import React, { useState, useContext } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import * as ROUTES from './../assets/routes'
import { GlobalContext } from '../assets/context/GlobalState'

const AddDate = () => {
  let history = useHistory()
  const { addDate } = useContext(GlobalContext)
  const [newValue, setNewValue] = useState({
    id: null,
    date: new Date(),
    contactId: null,
  })

  const { contactID } = useParams()

  const handleChange = (event) => {
    setNewValue({
      ...newValue,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    newValue.contactId = parseInt(contactID)
    addDate(newValue)
    setNewValue('')
    history.push('/')
  }

  return (
    <div className="add-date_form-container">
      <form onSubmit={handleSubmit} className="add-date-form">
        <h4>Add new date</h4>
        <input
          type="date"
          name="date"
          value={newValue.date || ''}
          onChange={handleChange}
        />
        <button type="submit" className="button-add">
          Add
        </button>
      </form>
      <div className="contact-button-cancel">
        <Link to={ROUTES.HOME}>Cancel</Link>
      </div>
    </div>
  )
}

export default AddDate
