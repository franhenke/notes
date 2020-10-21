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

    default:
      return state
  }
}
