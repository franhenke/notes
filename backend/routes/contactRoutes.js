import express from 'express'
const router = express.Router()
import {
  getContacts,
  getFavoriteContacts,
  getContactById,
  deleteContact,
} from '../controllers/contactController.js'

router.route('/home').get(getFavoriteContacts)
router.route('/contacts').get(getContacts)
router.route('/contacts/:id').get(getContactById)
router.route('/contacts/:id').delete(deleteContact)

export default router
