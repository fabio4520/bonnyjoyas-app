'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css'

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();
  let styles = `${style.li} `
  if (path == '/landing') {
    styles += `${(pathName == path) && style['active-link']}`
  } else {
    styles += `${(pathName.includes(path)) && style['active-link']}`
  }


  return (
    <Link
      className={styles}
      href={path}>
      {text}
    </Link>
  )
}
