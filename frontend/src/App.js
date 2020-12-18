import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as ROUTES from './assets/routes'
import AddContactForm from './components/AddContactForm'
import EditContactForm from './components/EditContactForm'
import AddDate from './components/AddDate'
import Home from './pages/home'
import EditDateForm from './components/EditDateForm'
import ContactDetailsPage from './pages/contactDetailsPage'
import FavoriteContactsList from './components/FavoriteContactsList'
import Navigation from './components/Navigation/Navigation'
import ContactState from './assets/context/contact/ContactState'

function App() {
  return (
    <ContactState>
      <div className="grid">
        <Navigation />
        <Switch>
          <Redirect exact from="/" to={ROUTES.HOME} />
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route
            exact
            path={`/contacts/:contactId`}
            component={() => <ContactDetailsPage />}
          />
          <Route path={ROUTES.ADDCONTACT} component={AddContactForm} exact />
          <Route path={ROUTES.EDITCONTACT} component={EditContactForm} exact />
          <Route exact path={ROUTES.ADDDATE} component={() => <AddDate />} />
          <Route path={ROUTES.ADDDATE} component={AddDate} exact />
          <Route path={ROUTES.EDITDATE} component={EditDateForm} exact />
          <Route component={() => 404} />
        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </ContactState>
  )
}

export default App
