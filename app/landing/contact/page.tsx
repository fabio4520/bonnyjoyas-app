import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './contact.module.css'
import contactItems from '@/data/contact';
import { Metadata } from 'next';
import { keywordsContact } from '@/data/seo';
import FormContact from './FormContact';

export const metadata: Metadata = {
  title: "Página Contacto de Bonny Joyas",
  description: "Contáctanos y disfruta de la joyería fina en oro y plata.",
  keywords: keywordsContact
};

export default function Contact() {

  return (
    <div className=''>
      <section className='mb-10'>
        <div className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/386698474_795714305895776_8375257025583055373_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhuTmgf5bb2wk3oR1SwIuVryBbug_4kf-vIFu6D_iR_zlZDsM4tTnEnbH55MyXixZcO1ctCx4f7ySMwvcfrkrM&_nc_ohc=ZvJ5FCZSmZEAX_BRFHh&_nc_ht=scontent.flim9-1.fna&oh=00_AfDaJ8kplLRlVu8nqMoY8ytjOs9E7Am4cqZvYVD4Mc1NZw&oe=66019915')]">
        </div>
        <div className="container px-6 md:px-12">
          <div className='block rounded-lg bg-light-200 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[80px] backdrop-blur-[30px]'>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-6">
                <FormContact/>
              </div>
            </div>
          </div>
        </div>

        {/* INfo contactos */}
        <div className='flex justify-center items-center w-full mt-20'>
          <div className=''>
            <div className='flex items-center justify-center mb-20'>
              <span className='text-center font-bold text-lg uppercase'>Contáctanos</span>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-20 md:text-lg'>
              {
                contactItems.map(item => (
                  <div key={item.title} className={ style['contact-item']}>
                    <FontAwesomeIcon className='h-8 text-primary-300' icon={item.icon}/>
                    <span className='font-bold text-plate-200'>{ item.title}</span>
                    <span>{ item.description}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}