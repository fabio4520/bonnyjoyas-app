import React from 'react'
import aboutImage from '../../../public/images/about/about.png'
import Image from 'next/image'
import { Metadata } from 'next';
import { landingAboutSeo } from '@/data/seo';
import DivTransition from '@/components/transitions/DivTransition';

export const metadata: Metadata = {
  title: landingAboutSeo.title,
  description: landingAboutSeo.description,
  keywords: landingAboutSeo.keywords,
};

export default function About() {
  return (
    <main className='flex flex-wrap justify-center gap-28 p-10'>
      <DivTransition
        initial={{ x: -200, opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='flex flex-col gap-10'
      >
        <h1 className='font-bold text-2xl tracking-widest'>¿Quiénes somos?</h1>
        <div className='max-w-xl'>Bonny Joyas es una empresa familiar con más de 10 años de experiencia en la creación de joyas artesanales de alta calidad. Nuestro compromiso con la excelencia y la belleza se refleja en cada una de nuestras piezas, diseñadas y elaboradas por nuestros expertos artesanos en Piura, Perú.</div>
        <div className='max-w-xl'>En Bonny Joyas, valoramos la tradición joyera y nos esforzamos por mantener viva la artesanía peruana. Cada joya que creamos es única, con un diseño exclusivo y una calidad excepcional que la convierten en una verdadera obra de arte.</div>
        <div className='max-w-xl'>Nuestra misión es ofrecer a nuestros clientes joyas que no solo sean hermosas, sino también significativas. Queremos ser parte de momentos especiales en la vida de las personas, creando piezas que perduren en el tiempo y se conviertan en símbolos de amor, compromiso y belleza.</div>
      </DivTransition>
      <DivTransition
        initial={{ x: 200, opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className=''
      >
        <Image
          src={aboutImage}
          alt='Imagen de Bonny Joyas'
          width={400}
          height={500}
        />
      </DivTransition>
    </main>
  )
}
