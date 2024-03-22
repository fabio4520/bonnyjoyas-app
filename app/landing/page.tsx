import Image from 'next/image'
import React from 'react'
import Button from '@/components/button/Button'
import heroImage from '../../public/images/hero-section/hero.png'
import section1Image from '../../public/images/hero-section/hero-1.jpg'
import section2Image from '../../public/images/sections/section2.jpg'
import section3Image from '../../public/images/sections/section3.jpg'
import section4Image from '../../public/images/sections/section4.jpg'
import Link from 'next/link'

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

      <div id='section1' className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14'>
          <p className='font-bold'>EXCLUSIVIDAD, CALIDAD, ELEGANCIA Y DISEÑO</p>
          <p>Descubre nuestras piezas más codiciadas al mejor precio del mercado. Aquí encontrarás los mejores descuentos en todas nuestras colecciones. “Regala Momentos Inolvidables”</p>
          <Button className='uppercase font-bold md:w-1/2'><Link href={'/shop'}>Descubre la colección</Link></Button>
        </div>
        <Image
         src={section1Image}
         alt='Bonny joyas plata image'
         width={500}
        height={900}
        className=''
        />
      </div>

      <div id='section2' className='flex flex-wrap items-center md:justify-around'>
        <Image
          src={section2Image}
          alt='Bonny joyas gold image'
          width={500}
          height={300}
          className=''
          />

        <div className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'>
          <p className='font-bold uppercase'>Plata</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda ipsam voluptas praesentium odit perferendis dignissimos saepe dolores quo quidem suscipit quaerat cumque, omnis minus ea sapiente et veritatis? Consequuntur.</p>
        </div>
      </div>

      <div id='section3' className='flex flex-wrap items-center md:justify-around'>
        <div className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'>
          <p className='font-bold uppercase'>Oro</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda ipsam voluptas praesentium odit perferendis dignissimos saepe dolores quo quidem suscipit quaerat cumque, omnis minus ea sapiente et veritatis? Consequuntur.</p>
        </div>
        <Image
          src={section3Image}
          alt='Bonny joyas hero image'
          width={500}
          height={300}
          className=''
          />
      </div>

      <div id='section4' className='flex flex-wrap items-center md:justify-around'>
        <Image
          src={section4Image}
          alt='Bonny joyas gold image'
          width={500}
          height={300}
          className=''
          />

        <div className='flex md:flex-row flex-col md:w-1/2 gap-8 items-center justify-center text-center pt-14 bg-light-400 p-10'>
          <p className='font-bold uppercase'>Filigrana</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda ipsam voluptas praesentium odit perferendis dignissimos saepe dolores quo quidem suscipit quaerat cumque, omnis minus ea sapiente et veritatis? Consequuntur.</p>
        </div>
      </div>

    </main>
  )
}
