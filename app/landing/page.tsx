import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/images/hero-section/hero.png'

export default function Landing() {
  return (
    <main>
      <div id='#hero' className='p-8 flex items-center justify-center'>
        <Image
          src={heroImage}
          alt='Bonny joyas hero image'
          width={1000}
          height={900}
        />
      </div>
    </main>
  )
}
