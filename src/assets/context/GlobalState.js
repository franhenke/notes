import React, { useEffect, createContext, useReducer } from 'react'
import { loadFromLocal, saveToLocal } from '../services/localStorage'
import AppReducer from './AppReducer'

const initialState = {
  contacts: [
    {
      id: 1,
      firstName: 'Kate',
      lastName: 'Edison',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      addressLine: 'Boston Str. 123',
      postalCode: 'BO123AZ',
      city: 'Boston',
      birthday: '10.10.1988',
      image:
        'https://res.cloudinary.com/etournal/image/upload/v1604850231/arzmgbfm5u4pd0v6agfe.jpg',
    },
    {
      id: 2,
      firstName: 'Oliver',
      lastName: 'Grayson',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      addressLine: '13th Street, 47 W 13th St',
      postalCode: 'NY 10011',
      city: 'New York City',
      state: 'New York',
      birthday: '03.09.1979',
      image:
        'https://res.cloudinary.com/etournal/image/upload/v1603906395/ahs0fayuf4qtr253jxpx.jpg',
    },
  ],
  dates: [
    { date: '10.10.2020', contactId: 2 },
    { date: '15.11.2020', contactId: 1 },
  ],
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    loadFromLocal('myContacts') || initialState
  )

  useEffect(() => {
    saveToLocal('myContacts', state)
  }, [state])

  function removeContact(id) {
    dispatch({
      type: 'REMOVE_CONTACT',
      payload: id,
    })
  }

  function addContact(contacts) {
    dispatch({
      type: 'ADD_CONTACT',
      payload: contacts,
    })
  }

  function editContact(contacts) {
    dispatch({
      type: 'EDIT_CONTACT',
      payload: contacts,
    })
  }

  function addDate(dates) {
    dispatch({
      type: 'ADD_DATE',
      payload: dates,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        dates: state.dates,
        removeContact,
        addContact,
        editContact,
        addDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
