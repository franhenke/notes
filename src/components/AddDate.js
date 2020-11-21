import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as ROUTES from './../assets/routes'
import { GlobalContext } from '../assets/context/GlobalState'
import useForm from '../hooks/useForm'

const AddDate = () => {
  const { addDate } = useContext(GlobalContext)
  const [values, handleChange, handleSubmit] = useForm(handleAddDate)
  const { contactID } = useParams()

  function handleAddDate(values) {
    values.contactId = parseInt(contactID)
    addDate(values)
    console.log(values)
    return values
  }

  return (
    <div className="add-date_form-container">
      <form onSubmit={handleSubmit} className="add-date-form">
        <h4>Add new date</h4>
        {/* <input
          type="datetime-local"
          name="when"
          value={values.when || ''}
          onChange={handleChange}
        /> */}
        <input
          type="date"
          name="when"
          value={values.when || ''}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={values.time || ''}
          onChange={handleChange}
        />
        <label htmlFor="where">Where</label>
        <input
          type="text"
          name="where"
          value={values.where || ''}
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
