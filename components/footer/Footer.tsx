import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcAmex, faCcDinersClub, faCcMastercard, faCcVisa, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import style from './footer.module.css'
import util from '../../styles/util.module.css'

export default function Footer() {
  return (
    <footer id='footer' className={ style.footer}>
      <div className='flex flex-col justify-center items-center md:items-start gap-20 md:flex-row md:justify-around'>
        <div className={style['footer-item']}>
          <Image
            src={logo}
            alt='Bonny Joyas logo'
            width={100}
            height={100}
          />
          <div className='flex flex-col'>
            <span>email@gmail.com</span>
            <span>(51) 969915364</span>
          </div>
          {/* redes sociales */}
          <div className='flex gap-4'>
            <Link target='_blank' href={'https://www.facebook.com/BonnyJoyas/'}><FontAwesomeIcon icon={faFacebook} className={ `${util.icon} text-blue-700`} /></Link>
            <Link target='_blank' href={'https://www.instagram.com/bonnyjoyascatacaos/'}><FontAwesomeIcon icon={faInstagram} className={`${util.icon} text-[#DD2A7B]`}/></Link>
          </div>
        </div>

        <div className={style['footer-item']}>
          <p className={style['footer-item-title']}>Empresa</p>
          <Link href={'/landing/about'}>Nosotros</Link>
          <Link href={'/landing/contact'}>Contacto</Link>
          <Link href={'#'}>Blog</Link>
        </div>
        <div className={style['footer-item']}>
          <p className={style['footer-item-title']}>Mi cuenta</p>
          <Link href={'#'}>Ingresar</Link>
          <Link href={'#'}>Registrarse</Link>
          <Link href={'#'}>Mis pedidos</Link>
        </div>
        <div className={style['footer-item']}>
          <p className={style['footer-item-title']}>Atención al cliente</p>
          <Link href={'#'}>Preguntas frecuentes</Link>
        </div>

      </div>
        {/* Métodos de pago */}
      <div className='flex gap-1 mt-4 justify-center'>
        <FontAwesomeIcon icon={faCcVisa} className={`${style['icon-footer']}`}/>
        <FontAwesomeIcon icon={faCcMastercard} className={`${style['icon-footer']}`}/>
        <FontAwesomeIcon icon={faCcAmex} className={`${style['icon-footer']}`}/>
        <FontAwesomeIcon icon={faCcDinersClub} className={`${style['icon-footer']}`} />
      </div>
    </footer>
  )
}
