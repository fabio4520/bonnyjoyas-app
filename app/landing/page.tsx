import Image from 'next/image'
import React from 'react'
import Button from '@/components/button/Button'
import heroImage from '../../public/images/hero-section/hero.png'
import section1Image from '../../public/images/hero-section/hero-1.jpg'
import section2Image from '../../public/images/sections/section2.jpg'
import section3Image from '../../public/images/sections/section3.jpg'
import section4Image from '../../public/images/sections/section4.jpg'
import Link from 'next/link'
import DivTransition from '@/components/transitions/DivTransition'
import { Metadata } from 'next';
import { landingPageSeo } from '@/data/seo';

export const metadata: Metadata = {
  title: landingPageSeo.title,
  description: landingPageSeo.description,
  keywords: landingPageSeo.keywords
};

export default function Landing() {
  return (
    <main className=''>
      <h1 className='text-center font-bold text-3xl my-5 tracking-widest text-primary-900'>Bienvenido a Bonny Joyas</h1>
      <div id='hero' className='flex items-center justify-center'>
        <Image
          src={heroImage}
          alt='Bonny joyas hero image'
          width={900}
          height={900}
        />
      </div>

      <section id='section1' className='flex flex-wrap items-center justify-around mt-10'>
        <DivTransition
          initial={{ x: -200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='flex flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14'
        >
          <p className='font-bold'>EXCLUSIVIDAD, CALIDAD, ELEGANCIA Y DISEÑO</p>
          <p>Descubre la exclusividad, calidad, elegancia y diseño de nuestras joyas. En Bonny Joyas, cada pieza es única y está diseñada con los más altos estándares de calidad y belleza.</p>
          <Button className='uppercase font-bold md:w-1/2'><Link href={'/#'}>Descubre la colección</Link></Button>
        </DivTransition>
        <DivTransition
          initial={{ x: 200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
          <Image
            src={section1Image}
            alt='Bonny joyas plata image'
            width={500}
            height={900}
            className=''
          />
        </DivTransition>
      </section>

      <section id='section2' className='flex flex-wrap items-center md:justify-around mt-10'>
        <DivTransition
          initial={{ x: -200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
          <Image
            src={section2Image}
            alt='Bonny joyas gold image'
            width={500}
            height={300}
            className=''
          />
        </DivTransition>

        <DivTransition
          initial={{ x: 200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'
        >
          <p className='font-bold uppercase'>Plata</p>
          <p>Descubre nuestra colección de joyas de plata, diseñadas con elegancia y estilo. Cada pieza refleja la belleza y la calidad que nos caracteriza en Bonny Joyas.</p>
        </DivTransition>
      </section>

      <section id='section3' className='flex flex-wrap items-center md:justify-around mt-10'>
        <DivTransition
          initial={{ x: -200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'
        >
          <p className='font-bold uppercase'>Oro</p>
          <p>Sumérgete en el mundo del lujo con nuestra colección de joyas de oro. Cada pieza es una obra de arte que refleja el lujo y la exclusividad que encontrarás en Bonny Joyas.</p>
        </DivTransition>
        <DivTransition
          initial={{ x: 200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
          <Image
            src={section3Image}
            alt='Bonny joyas oro image'
            width={500}
            height={300}
            className=''
          />
        </DivTransition>
      </section>

      <section id='section4' className='flex flex-wrap items-center md:justify-around mt-10'>
        <DivTransition
          initial={{ x: -200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
          <Image
            src={section4Image}
            alt='Bonny joyas filigrana image'
            width={500}
            height={300}
            className=''
          />
        </DivTransition>

        <DivTransition
          initial={{ x: 200, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'
        >
          <p className='font-bold uppercase'>Filigrana</p>
          <p>Descubre la delicadeza y el arte de la filigrana en nuestras joyas. Cada pieza es una muestra de la artesanía y la tradición que nos caracteriza en Bonny Joyas.</p>
        </DivTransition>
      </section>

    </main>
  )
}
