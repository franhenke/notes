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
    {
      id: 3,
      firstName: 'Jane',
      lastName: 'Sloan',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      addressLine: '13th Street, 47 W 13th St',
      postalCode: 'NY 10011',
      city: 'New York City',
      state: 'New York',
      birthday: '03.09.1979',
      image:
        'https://res.cloudinary.com/etournal/image/upload/v1605452991/contacts/kate_kvnchn.jpg',
    },
    {
      id: 4,
      firstName: 'Richard',
      lastName: 'Hunter',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      addressLine: '13th Street, 47 W 13th St',
      postalCode: 'NY 10011',
      city: 'New York City',
      state: 'New York',
      birthday: '03.09.1979',
      image:
        'https://res.cloudinary.com/etournal/image/upload/v1605452992/contacts/tamarcus_gwfom6.jpg',
    },
    {
      id: 5,
      firstName: 'Sutton',
      lastName: 'Brady',
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
    {
      id: 6,
      firstName: 'Jacqueline',
      lastName: 'Carlyle',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      addressLine: '13th Street, 47 W 13th St',
      postalCode: 'NY 10011',
      city: 'New York City',
      state: 'New York',
      birthday: '03.09.1979',
      image:
        'https://res.cloudinary.com/etournal/image/upload/v1605452992/contacts/jacq_yyzd3p.jpg',
    },
    {
      id: 7,
      firstName: 'Alex',
      lastName: 'Crawford',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      addressLine: '13th Street, 47 W 13th St',
      postalCode: 'NY 10011',
      city: 'New York City',
      state: 'New York',
      birthday: '03.09.1979',
      image:
        'https://res.cloudinary.com/etournal/image/upload/v1605452993/contacts/alex_n1omxw.jpg',
    },
  ],
  dates: [
    { id: 1, date: '10.10.2020', contactId: 2 },
    { id: 2, date: '21.11.2020', contactId: 1 },
    { id: 3, date: '21.11.2020', contactId: 4 },
    { id: 4, date: '22.11.2020', contactId: 5 },
    { id: 5, date: '18.11.2020', contactId: 3 },
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

  function editDate(dates) {
    dispatch({
      type: 'EDIT_DATE',
      payload: dates,
    })
  }

  function removeDate(id) {
    dispatch({
      type: 'REMOVE_DATE',
      payload: id,
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
        editDate,
        removeDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
