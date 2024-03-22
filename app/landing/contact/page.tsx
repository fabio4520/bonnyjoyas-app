'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from './contact.module.css'
import Button from '@/components/button/Button';

const initialStateRequestApi = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  message: ''
};

const contactItems = [
  {icon: faPhone, title: "Teléfono", description: "(51) 969915364"},
  {icon: faEnvelope, title: "Email", description: "email@example.com"},
  {icon: faMap, title: "Dirección Principal", description: "Asociación de artesanos Catacaos Peru"},
  {icon: faClock, title: "Horarios", description: "Lunes-Sábado 8:00am - 8:00pm"},
]

export default function Contact() {
  const [formData, setFormData] = useState(initialStateRequestApi);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className=''>
      <section className='mb-10'>
        <div className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://scontent.flim9-1.fna.fbcdn.net/v/t39.30808-6/386698474_795714305895776_8375257025583055373_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhuTmgf5bb2wk3oR1SwIuVryBbug_4kf-vIFu6D_iR_zlZDsM4tTnEnbH55MyXixZcO1ctCx4f7ySMwvcfrkrM&_nc_ohc=ZvJ5FCZSmZEAX_BRFHh&_nc_ht=scontent.flim9-1.fna&oh=00_AfDaJ8kplLRlVu8nqMoY8ytjOs9E7Am4cqZvYVD4Mc1NZw&oe=66019915')]">
        </div>
        <div className="container px-6 md:px-12">
          <div className='block rounded-lg bg-light-200 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[80px] backdrop-blur-[30px]'>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-6">
                <form className='w-full'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
                    <div className={style['input-container']}>
                      <label htmlFor="name" className={style.label}>Nombre</label>
                      <input name='name' type="text" id="name" className={style.input} required onChange={handleInputChange} value={formData.name}/>
                    </div>
                    <div className={style['input-container']}>
                      <label htmlFor="lastname" className={style.label}>Apellidos</label>
                      <input name='lastname' type="text" id="lastname" className={style.input} required onChange={handleInputChange} value={formData.lastname}/>
                    </div>
                    <div className={style['input-container']}>
                      <label htmlFor="email" className={style.label}>Email</label>
                      <input name='email' type="text" id="email" className={style.input} required onChange={handleInputChange} value={formData.email}/>
                    </div>
                    <div className={style['input-container']}>
                      <label htmlFor="phone" className={style.label}>Tel&eacute;fono</label>
                      <input name='phone' type="text" id="phone" className={style.input} required onChange={handleInputChange} value={formData.phone}/>
                    </div>
                    <div className={`${style['input-container']} col-span-2`}>
                      <label htmlFor="message" className={style.label}>Mensaje</label>
                      <textarea name='message' id="message" className={style.textarea} required onChange={handleInputChange} value={formData.lastname}/>
                    </div>
                  </div>
                  <Button className='w-full font-bold font-md uppercase'>Enviar</Button>
                </form>
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
            <div className='flex items-center gap-20 text-lg'>
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