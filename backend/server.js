const express = require('express')
const contacts = require('./data/contacts')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/contacts', (req, res) => {
  console.log('contacts are here')
  res.json(contacts)
})

app.get('/api/contacts/:id', (req, res) => {
  const contact = contacts.find((c) => c._id === req.params.id)
  res.json(contact)
})

app.listen(4000, console.log('Server running on port 4000'))
