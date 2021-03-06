import React, { useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  CONTACT_ERROR,
  CLEAR_CONTACTS,
} from '../types'
import { loadFromLocal, saveToLocal } from '../../services/localStorage'

const ContactState = ({ children }) => {
  const contactsFromStorage = localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : []

  const initialState = {
    contacts: contactsFromStorage,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(
    contactReducer,
    loadFromLocal('contacts') || initialState
  )

  useEffect(() => {
    saveToLocal('contacts', state)
  }, [state])

  const getFavoriteContacts = async () => {
    try {
      const res = await axios.get('/home')

      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.message,
      })
    }
  }

  const getContacts = async () => {
    try {
      const res = await axios.get('/contacts')

      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.message,
      })
    }
  }

  const getContactDetails = async (id) => {
    try {
      const res = await axios.get(`/contacts/${id}`)

      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.message,
      })
    }
  }

  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/contacts', contact, config)

      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.message,
      })
    }
  }

  const deleteContact = async (id) => {
    try {
      await axios.delete(`/contacts/${id}`)

      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      })
      toast.dark('Contact deleted')
    } catch (error) {
      console.error(error.message)
    }
  }

  const updateContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(`/contacts/${contact._id}`, contact, config)
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.message,
      })
    }
  }

  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS })
  }
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }

  const clearFilter = (text) => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getContacts,
        getContactDetails,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getFavoriteContacts,
        clearContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
export default ContactState
