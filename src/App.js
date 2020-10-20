import React from 'react'
import { GlobalProvider } from './assets/context/GlobalState'
import { Route, Switch } from 'react-router-dom'
import ContactList from './components/ContactList'
import AddContactForm from './components/AddContactForm'

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={ContactList} exact />
        <Route path="/add" component={AddContactForm} exact />
        {/* <Route path="/edit/:id" component={EditContactForm} exact /> */}
      </Switch>
    </GlobalProvider>
  )
}

export default App
