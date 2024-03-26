import * as React from 'react';

interface EmailTemplateProps {
  name: string,
  lastname: string,
  email: string,
  phone: string,
  message: string
}

export default function EmailTemplate({ name,lastname,email,phone,message}: EmailTemplateProps) {
  return (
    <div className='bg-light-300 p-10 rounded-lg shadow-lg'>
      <h1 className='font-bold text-xl uppercase tracking-widest'>Información contacto Bonny joyas</h1>
      <div className='font-semibold text-lg flex flex-col gap-1 mt-2'>
        <p>Nombres completos: <span className='font-light'>{ `${name} ${lastname}` }</span></p>
        <p>Email: <span className='font-light'>{ `${email}` }</span></p>
        <p>Teléfono: <span className='font-light'>{ `${phone}` }</span></p>
        <p>Mensaje: <span className='font-light'>{`${message}`}</span></p>
      </div>
    </div>
  )
}