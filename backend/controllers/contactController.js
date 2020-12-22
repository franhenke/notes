import asyncHandler from 'express-async-handler'
import Contact from '../models/contactModel.js'

// @desc    Fetch all contacts
// @route   GET /contacts
// @access  Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({})
  res.json(contacts)
})

// @desc    Fetch favorite contacts
// @route   GET /contacts with {favorite: true}
// @access  Public
const getFavoriteContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ favorite: true })
  res.json(contacts)
})

// @desc    Fetch contact by Id
// @route   GET /contacts:id
// @access  Public
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)

  if (contact) {
    res.json(contact)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const deleteContact = asyncHandler(async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id)

    if (!contact) return res.status(404).json({ message: 'Contact not found.' })

    await Contact.findByIdAndRemove(req.params.id)

    res.json({ message: 'Contact has been removed.' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

export { getContacts, getFavoriteContacts, getContactById, deleteContact }
