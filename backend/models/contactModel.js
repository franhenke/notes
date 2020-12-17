const mongoose = require('mongoose')

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
    dob: {
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
    dates: [
      {
        date: Date,
        time: String,
        location: String,
        archived: Boolean,
      },
    ],
    notes: [{ body: String, date: Date }],
  },
  {
    timestamps: true,
  }
)

const Contact = mongoose.model('Contact', ContactSchema)
export default Contact
