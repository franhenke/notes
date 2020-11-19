import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { GlobalContext } from '../assets/context/GlobalState'
import editIcon from '../assets/icons/edit.svg'

dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)
dayjs.extend(calendar)

const UpcomingDate = ({ date, contactName }) => {
  const { editDate, removeDate } = useContext(GlobalContext)
  const parsedDate = dayjs(date.date)
  const todaysDate = dayjs(date.date).calendar(null, {
    sameDay: '[Today at] h:mm A',
  })

  return (
    <div>
      <li className="date_item">
        <h3>
          {new Date() ? todaysDate : parsedDate.locale('en').format('LLLL')}{' '}
          with
          <span>{contactName(date)}</span>
        </h3>
      </li>
      <div className="button-container">
        <button
          className="contact-button-delete"
          onClick={() => removeDate(date.id)}
        >
          Remove Date
        </button>
        <Link to={`/edit-date/${date.id}`}>
          <button className="edit-icon" onClick={() => editDate(date.id)}>
            <img src={editIcon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UpcomingDate
