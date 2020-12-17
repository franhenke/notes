import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Contact from '../models/contactModel.js'

// @desc    Fetch all contacts
// @route   GET /contacts
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const contacts = await Contact.find({})

    res.json(contacts)
  })
)

// @desc    Fetch single contacts
// @route   GET /contacts/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (contact) {
      res.json(contact)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
