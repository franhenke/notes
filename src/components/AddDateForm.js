import React, { useContext, useState } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { useHistory, Link } from 'react-router-dom'
import 'date-fns'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import ContactPicker from './ContactPicker'

const AddDateForm = () => {
  const { contacts, addContact } = useContext(GlobalContext)

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setSelectedTime(date)
  }

  return (
    <>
      <form className="form" noValidate>
        <ContactPicker />
        <TextField
          id="datetime-local"
          label="Next date"
          type="datetime-local"
          defaultValue="2020-05-24T10:30"
          className="add-date-textfield"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <div className="button-container">
          <button className="contact-button-update">Save date</button>
          <div className="contact-button-cancel">
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddDateForm
