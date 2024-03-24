'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css'

interface Props {
  path: string;
  text: string;
  toggleItems: () => void; // Nuevo prop
}

export const ActiveLink = ({ path, text, toggleItems }: Props) => {
  const handleClick = () => {
    toggleItems(); // Llama a la función toggleItems al hacer clic
  };

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
      href={path}
      onClick={handleClick} // Agrega onClick para llamar a handleClick
    >
      {text}
    </Link>
  )
}
