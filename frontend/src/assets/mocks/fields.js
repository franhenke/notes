const fields = {
  firstName: {
    type: 'text',
    name: 'firstName',
    text: 'First Name',
    placeholder: 'Jack',
    required: true,
  },
  lastName: {
    type: 'text',
    name: 'lastName',
    text: 'Last Name',
    placeholder: 'Doe',
    required: false,
  },
  email: {
    type: 'email',
    name: 'email',
    text: 'Email',
    placeholder: 'jack@mail.com',
    required: false,
  },
  phone: {
    type: 'phone',
    name: 'phone',
    text: 'Phone',
    placeholder: '+1 (400)-123456',
    required: false,
  },
  addressLine: {
    type: 'text',
    name: 'addressLine',
    text: 'Address Line',
    placeholder: 'Awesome str 9',
    required: false,
  },
  postalCode: {
    type: 'text',
    name: 'postalCode',
    text: 'Postal Code',
    placeholder: '12345',
    required: false,
  },
  city: {
    type: 'text',
    name: 'city',
    text: 'City',
    placeholder: 'Gothenburg',
    required: false,
  },

  birthday: {
    type: 'date',
    name: 'birthday',
    text: 'Date of Birth',
    required: false,
  },
}

export const formSchema = [
  fields.firstName,
  fields.lastName,
  fields.email,
  fields.addressLine,
  fields.postalCode,
  fields.city,
  fields.birthday,
]
