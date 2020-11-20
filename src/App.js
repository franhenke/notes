import React from 'react'
import { GlobalProvider } from './assets/context/GlobalState'
import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import * as ROUTES from './assets/routes'
import AddContactForm from './components/AddContactForm'
import EditContactForm from './components/EditContactForm'
import AddDate from './components/AddDate'
import Home from './pages/home'
import EditDateForm from './components/EditDateForm'

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Redirect exact from="/" to={ROUTES.HOME} />
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.ADDCONTACT} component={AddContactForm} exact />
        <Route path={ROUTES.EDITCONTACT} component={EditContactForm} exact />
        <Route exact path={ROUTES.ADDDATE} component={() => <AddDate />} />
        <Route path={ROUTES.ADDDATE} component={AddDate} exact />
        <Route path={ROUTES.EDITDATE} component={EditDateForm} exact />
      </Switch>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        rtl={false}
      />
    </GlobalProvider>
  )
}

export default App
