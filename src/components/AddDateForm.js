import React from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { useHistory, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import ContactPicker from './ContactPicker'

const AddDateForm = () => {
  const { contacts, addContact } = useContext(GlobalContext)
  const { notes, setNotes } = useContext({ date: '', time: '' })
  const [selectedDate, setSelectedDate] = useState(moment().format('ll'))

  return (
    <>
      <ContactPicker />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  )
}

export default AddDateForm
