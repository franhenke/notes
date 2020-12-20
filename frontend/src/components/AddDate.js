import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import cancelIcon from './../assets/icons/cross.svg'
import * as ROUTES from './../assets/routes'
import { GlobalContext } from '../assets/context/GlobalState'
import useForm from '../hooks/useForm'

const AddDate = () => {
  const { addDate } = useContext(GlobalContext)
  const [values, handleChange, handleSubmit] = useForm(handleAddDate)
  const { id } = useParams()

  function onChange(value, dateString) {
    const newDate = dateString
    values.when = newDate
  }

  function handleAddDate(values) {
    values.id = parseInt(id)
    addDate(values)
  }

  return (
    <div className="add-date_form-container">
      <div className="contact-button-cancel">
        <Link to={ROUTES.HOME}>
          <img src={cancelIcon} alt="cancel" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="add-date-form">
        <h4>Add new date</h4>

        <label htmlFor="occasion">Occasion</label>
        <input
          type="text"
          name="occasion"
          placeholder="e.g. Lunch, Dinner"
          value={values.occasion || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="details">Details</label>
        <input
          type="text"
          name="details"
          placeholder="more..."
          value={values.details || ''}
          onChange={handleChange}
        />

        <label htmlFor="date" className="add-date_details">
          Date & Time
        </label>
        <DatePicker
          className="datepicker"
          name="date"
          showTime={{ minuteStep: 15 }}
          format="dddd, MMM D YYYY, HH:mm"
          onChange={onChange}
          style={{
            padding: '0px',
            margin: '0 0 2em 0',
            cursor: 'pointer',
          }}
          size={15}
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
    </div>
  )
}

export default AddDate
