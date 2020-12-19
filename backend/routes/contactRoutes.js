import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Contact from '../models/contactModel.js'

// @desc    Fetch all contacts
// @route   GET /contacts
// @access  Public
router.get(
  '/contacts',
  asyncHandler(async (req, res) => {
    const contacts = await Contact.find({})
    res.json(contacts)
  })
)

// @desc    Fetch single contacts
// @route   GET /contacts/:id
// @access  Public
router.get(
  '/contacts/:id',
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
// @desc    Fetch favorite contacts
// @route   GET /contacts
// @access  Public
router.get(
  '/home',
  asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ favorite: true })
    res.json(contacts)
  })
)

router.delete(
  '/contacts/:id',
  asyncHandler(async (req, res) => {
    try {
      let contact = await Contact.findById(req.params.id)

      if (!contact)
        return res.status(404).json({ message: 'Contact not found.' })

      await Contact.findByIdAndRemove(req.params.id)

      res.json({ message: 'Contact has been removed.' })
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  })
)

export default router
