import React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const navLinks = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Contacts',
    path: '/home/contacts',
  },
  {
    title: 'Notes',
    path: '/home/notes',
  },
  {
    title: 'Dates',
    path: '/home/dates',
  },
]

const Nav = () => (
  <motion.ul variants={variants}>
    {navLinks.map((link, index) => (
      <MenuItem linkItem={link.title} key={index} path={link.path} />
    ))}
  </motion.ul>
)

export default Nav
