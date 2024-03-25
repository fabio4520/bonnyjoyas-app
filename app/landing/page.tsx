'use client';
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

export default function Landing() {
  return (
    <main className='md:p-10 flex flex-col md:gap-32 gap-16'>
      <div id='hero' className='flex items-center justify-center'>
        <Image
          src={heroImage}
          alt='Bonny joyas hero image'
          width={900}
          height={900}
        />
      </div>

      <section id='section1' className='flex flex-wrap items-center justify-around'>
        <DivTransition
          initial={{ x: -200, opacity: 0 }} // Empieza desde la izquierda y invisible
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='flex flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14'
        >
          <p className='font-bold'>EXCLUSIVIDAD, CALIDAD, ELEGANCIA Y DISEÑO</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit nemo dicta saepe, perspiciatis voluptates dolorum dolore tenetur magni numquam natus? Earum, maiores similique dolores quis tempora incidunt. Doloribus, eius!</p>
          <Button className='uppercase font-bold md:w-1/2'><Link href={'/shop'}>Descubre la colección</Link></Button>
        </DivTransition>
        <DivTransition
          initial={{ x: 200, opacity: 0 }} // Empieza desde la izquierda y invisible
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
          <Image
            src={section1Image}
            alt='Bonny joyas plata image'
            width={500}
            height={900}
            className='' // Para que la imagen aparezca antes del contenido en pantallas móviles
          />
        </DivTransition>
      </section>

      <section id='section2' className='flex flex-wrap items-center md:justify-around'>
        <DivTransition
          initial={{ x: -200, opacity: 0 }} // Empieza desde la izquierda y invisible
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
          initial={{ x: 200, opacity: 0 }} // Empieza desde la izquierda y invisible
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400'
        >
          <p className='font-bold uppercase'>Plata</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda ipsam voluptas praesentium odit perferendis dignissimos saepe dolores quo quidem suscipit quaerat cumque, omnis minus ea sapiente et veritatis? Consequuntur.</p>
        </DivTransition>
      </section>

      <section id='section3' className='flex flex-wrap items-center md:justify-around'>
      <DivTransition
        initial={{ x: -200, opacity: 0 }} // Empieza desde la izquierda y invisible
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'
      >
        <p className='font-bold uppercase'>Oro</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda ipsam voluptas praesentium odit perferendis dignissimos saepe dolores quo quidem suscipit quaerat cumque, omnis minus ea sapiente et veritatis? Consequuntur.</p>
        </DivTransition>
      <DivTransition
          initial={{ x: 200, opacity: 0 }} // Empieza desde la izquierda y invisible
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
        <Image
          src={section3Image}
          alt='Bonny joyas hero image'
          width={500}
          height={300}
          className=''
          />
        </DivTransition>
      </section>

      <section id='section4' className='flex flex-wrap items-center md:justify-around'>
      <DivTransition
          initial={{ x: -200, opacity: 0 }} // Empieza desde la izquierda y invisible
          transition={{ ease: 'easeInOut', duration: 1 }}
          className=''
        >
          <Image
            src={section4Image}
            alt='Bonny joyas gold image'
            width={500}
            height={300}
            className=''
            />
        </DivTransition>

        <DivTransition
        initial={{ x: 200, opacity: 0 }} // Empieza desde la izquierda y invisible
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'
        >          
          <p className='font-bold uppercase'>Filigrana</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda ipsam voluptas praesentium odit perferendis dignissimos saepe dolores quo quidem suscipit quaerat cumque, omnis minus ea sapiente et veritatis? Consequuntur.</p>
      </DivTransition>
      </section>

    </main>
  )
}
