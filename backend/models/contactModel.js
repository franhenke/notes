const mongoose = require('mongoose')

const datesSchema = mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  occasion: { type: String, required: false },
  location: { type: String, required: false },
  archived: { type: Boolean, default: false },
  required: false,
})
const notesSchema = mongoose.Schema({
  created: Date,
  category: { type: String, default: 'personal' },
  body: String,
  archived: { type: Boolean, default: false },
  required: false,
})

const ContactSchema = mongoose.Schema(
  {
    // The user is part of the schema as each user has their own set of contacts.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // Refers to the users collection.
      ref: 'User',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    birthday: {
      type: Date,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    dates: [datesSchema],
    notes: [notesSchema],
  },
  {
    timestamps: true,
  }
)

const Contact = mongoose.model('Contact', ContactSchema)
export default Contact
