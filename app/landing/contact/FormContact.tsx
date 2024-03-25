'use client';
import React, { useState } from 'react'
import Button from '@/components/button/Button';
import style from './contact.module.css'

const initialStateRequestApi = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  message: ''
};

export default function FormContact() {
  const [formData, setFormData] = useState(initialStateRequestApi);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
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
        <div className={`${style['input-container']} md:col-span-2`}>
          <label htmlFor="message" className={style.label}>Mensaje</label>
          <textarea name='message' id="message" className={style.textarea} required onChange={handleInputChange} value={formData.lastname}/>
        </div>
      </div>
      <Button className='w-full font-bold font-md uppercase'>Enviar</Button>
    </form>
  )
}
