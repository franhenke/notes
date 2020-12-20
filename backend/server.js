import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import contactRoutes from './routes/contactRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})
app.use('/', contactRoutes)
app.use('/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold
  )
)
