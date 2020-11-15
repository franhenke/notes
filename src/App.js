import React from 'react'
import { GlobalProvider } from './assets/context/GlobalState'
import { Redirect, Switch, Route } from 'react-router-dom'
import * as ROUTES from './assets/routes'
import AddContactForm from './components/AddContactForm'
import EditContactForm from './components/EditContactForm'
import AddDate from './components/AddDate'
import Home from './pages/home'
import EditDateForm from './components/EditDateForm'
import ContactsPage from './pages/contactsPage'

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Redirect exact from="/" to={ROUTES.HOME} />
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.CONTACTS} component={ContactsPage} exact />
        <Route path={ROUTES.ADDCONTACT} component={AddContactForm} exact />
        <Route path={ROUTES.EDITCONTACT} component={EditContactForm} exact />
        <Route path={ROUTES.ADDDATE} component={AddDate} exact />
        <Route path={ROUTES.EDITDATE} component={EditDateForm} exact />
      </Switch>
    </GlobalProvider>
  )
}

export default App
