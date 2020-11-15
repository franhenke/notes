export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      }
    case 'ADD_CONTACT':
      const nextId = Math.max.apply(
        null,
        state.contacts.map((contact) => contact.id)
      )
      const newContact = {
        ...action.payload,
        id: nextId + 1,
      }
      return {
        ...state,
        contacts: [...state.contacts, newContact],
      }

    case 'EDIT_CONTACT':
      const updatedContact = action.payload
      const updatedContacts = state.contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return updatedContact
        }
        return contact
      })

      return {
        ...state,
        contacts: updatedContacts,
      }

    case 'ADD_DATE':
      const dateId = Math.max.apply(
        null,
        state.dates.map((date) => date.id)
      )
      const newDate = {
        ...action.payload,
        id: dateId + 1,
      }
      return {
        ...state,
        dates: [...state.dates, newDate],
      }

    case 'EDIT_DATE':
      const updatedDate = action.payload
      const updatedDates = state.dates.map((date) => {
        if (date.id === updatedDate.id) {
          return updatedDate
        }
        return date
      })

      return {
        ...state,
        dates: updatedDates,
      }

    case 'REMOVE_DATE':
      return {
        ...state,
        dates: state.dates.filter((date) => date.id !== action.payload),
      }

    default:
      return state
  }
}
