import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import style from './navbar.module.css'

const navItems = [
  { path: '/landing', text: 'Inicio' },
  { path: '/landing/about', text: 'Nosotros' },
  { path: '/landing/contact', text: 'Contáctanos' },
  // { path: '/shop', text: 'Tienda' },
]

export default function Navbar() {
  return (
    <nav className={ style.nav}>
      
      <Image
        src={logo}
        alt='Bonny Joyas logo'
        width={80}
        height={80}
      />
      <div className={ style['nav-items']}>
        {
          navItems.map(navItem => (
            <ActiveLink key={navItem.path} { ... navItem} />
          ))
        }
      </div>
    </nav>
  )
}
