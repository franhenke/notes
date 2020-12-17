import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import contacts from './data/contacts.js'

dotenv.config()
connectDB()
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

const PORT = process.env.PORT || 4000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold
  )
)
