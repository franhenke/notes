import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../constants/authConstants'
import { loadFromLocal, saveToLocal } from '../../services/localStorage'

const AuthState = ({ children }) => {
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  const initialState = {
    userInfo: userInfoFromStorage,
    loading: true,
    error: null,
  }

  const [state, dispatch] = useReducer(
    authReducer,
    loadFromLocal('userInfo') || initialState
  )

  useEffect(() => {
    saveToLocal('userInfo', state)
  }, [state])

  const register = async (firstName, email, password) => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        '/users',
        { firstName, email, password },
        config
      )

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      localStorage.setItem('userInfo', JSON.stringify(res.data))
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  const login = async (email, password) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post('/users/login', { email, password }, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      localStorage.setItem('userInfo', JSON.stringify(res.data))
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  const logout = () => {
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT })
  }

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS })
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo: state.userInfo,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        logout,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
