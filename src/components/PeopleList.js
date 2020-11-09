import React, { useState, useContext } from 'react'
import { useImmer } from 'use-immer'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link } from 'react-router-dom'
import Person from './Person'

const PeopleList = () => {
  const { contacts } = useContext(GlobalContext)
  const [chosen, setChosen] = useState(null)
  const [people, setPeople] = useImmer(contacts)

  console.log(people)
  return (
    <div className="contacts-container">
      {people.length > 0 ? (
        people.map((person, index) => (
          <li key={person.id}>
            <button onClick={() => setChosen(index)}>{person.firstName}</button>
          </li>
        ))
      ) : (
        <div>No contacts, yet</div>
      )}
      <Link className="link-to-form" to="/add">
        Add a new Contact
      </Link>

      <Link className="link-to-form" to="/add-date">
        Add a new Date
      </Link>

      {chosen !== null && (
        <Person
          person={people[chosen]}
          toggleDate={(index) => {
            setPeople((draft) => {
              draft[chosen].dates[index].archived = !draft[chosen].dates[index]
                .archived
            })
          }}
          setDate={(index, value) => {
            setPeople((draft) => {
              draft[chosen].dates[index].date = value
            })
          }}
          addDate={(value) => {
            setPeople((draft) => {
              draft[chosen].dates.push({ date: value, done: false })
            })
          }}
          removeDate={(index) => {
            setPeople((draft) => {
              delete draft[chosen].dates[index]
            })
          }}
        />
      )}
    </div>
  )
}

export default PeopleList
