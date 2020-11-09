import React from 'react'
import { GlobalProvider } from './assets/context/GlobalState'
import { Route, Switch } from 'react-router-dom'
import AddContactForm from './components/AddContactForm'
import EditContactForm from './components/EditContactForm'
import AddDate from './components/AddDate'
import Home from './pages/home'

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddContactForm} exact />
        <Route path="/edit/:id" component={EditContactForm} exact />
        <Route
          exact
          path={'/add-date/:contactID'}
          component={() => <AddDate />}
        />
      </Switch>
    </GlobalProvider>
  )
}

export default App
