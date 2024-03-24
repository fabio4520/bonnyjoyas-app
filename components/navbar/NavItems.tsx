'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { ActiveLink } from '../active-link/ActiveLink';
import style from './navbar.module.css';

interface Props {
  showItems: boolean,
  toggleItems: () => void;
}

const navItems = [
  { path: '/landing', text: 'Inicio' },
  { path: '/landing/about', text: 'Nosotros' },
  { path: '/landing/contact', text: 'Contáctanos' },
];
const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

export default function NavItems({showItems, toggleItems}: Props) {
  return (
    <motion.ul
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navList}
        className={`${style['nav-items']} ${showItems ? '' : 'hidden'} transition-opacity duration-700 ease-in-out`}>
        {navItems.map(item => (
          <motion.li
          variants={navItem}
          key={item.path}
          >
            <ActiveLink {...item} toggleItems={toggleItems} />
          </motion.li>
        ))}
      </motion.ul>
  )
}
