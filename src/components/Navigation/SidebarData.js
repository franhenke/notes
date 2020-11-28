import React from 'react'
import homeIcon from '../../assets/icons/home.svg'
import datesIcon from '../../assets/icons/calendar.svg'
import notesIcon from '../../assets/icons/paperclip.svg'
import contactsIcon from '../../assets/icons/book.svg'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <ion-icon name="layers-outline"></ion-icon>,
    cName: 'nav-text',
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <ion-icon name="book-outline"></ion-icon>,
    cName: 'nav-text',
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <ion-icon name="attach-outline"></ion-icon>,
    cName: 'nav-text',
  },
  {
    title: 'Dates',
    path: '/dates',
    icon: <ion-icon name="calendar-clear-outline"></ion-icon>,
    cName: 'nav-text',
  },
]
