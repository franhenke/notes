import bcrypt from 'bcryptjs'

const users = [
  {
    firstName: 'Franci',
    lastName: 'Henke',
    email: 'fran.henke@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'Nils',
    lastName: 'Mester',
    email: 'nilsm@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
