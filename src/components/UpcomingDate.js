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

const UpcomingDate = ({ date, contactName, contactImage }) => {
  const { editDate, removeDate } = useContext(GlobalContext)

  const parsedDate = dayjs(date.when)
  const formattedDate = dayjs(parsedDate).format('dddd, MMM DD')
  const todaysDateFormatted = dayjs(new Date()).format('LL')

  const now = new Date(date.when) - new Date()
  console.log(now)

  return (
    <div>
      {dayjs(date.when).format('LL') === todaysDateFormatted ? (
        <div className="date_item-today">
          <h3>Today</h3>
          <Link to="/" className="date_item">
            <img src={contactImage(date)} alt="" />
            <div className="date_item-info">
              <p className="date_item-date">{formattedDate}</p>
              <p className="date_item-occasion">
                {date.time}, {date.occasion} with{' '}
                <span>{contactName(date)}</span>
              </p>
              <button
                className="contact-button-delete"
                onClick={() => removeDate(date.id)}
              >
                Remove Date
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <li className="date_item">
            <img src={contactImage(date)} alt="" />
            <div className="date_item-info">
              <p className="date_item-date">{formattedDate}</p>
              <p className="date_item-occasion">
                {date.time}, {date.occasion} with{' '}
                <span>{contactName(date)}</span>
              </p>
              <button
                className="contact-button-delete"
                onClick={() => removeDate(date.id)}
              >
                Remove Date
              </button>
            </div>
          </li>
        </>
      )}

      {/* <Link to={`/edit-date/${date.id}`}>
          <button className="edit-icon" onClick={() => editDate(date.id)}>
            <img src={editIcon} alt="" />
          </button>
        </Link> */}
    </div>
  )
}

export default UpcomingDate
