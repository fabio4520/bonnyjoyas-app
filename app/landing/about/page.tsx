import React from 'react'
import aboutImage from '../../../public/images/about/about.png'
import Image from 'next/image'

export default function About() {
  return (
    <main className='flex flex-wrap justify-center gap-28 p-10'>
      <div className='flex flex-col gap-10'>
        <h1 className='font-bold text-2xl tracking-widest'>¿Qui&eacute;nes somos?</h1>
        <div className='max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos minus voluptatum optio, esse asperiores quod modi. Vitae, quia. Qui a inventore in dolor exercitationem voluptas reprehenderit sapiente doloremque perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum dolorem tenetur vitae illum non adipisci, molestiae culpa voluptates aperiam praesentium optio porro in ipsam beatae aliquam itaque officia repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem non impedit facere unde perspiciatis similique facilis mollitia soluta cupiditate. Repellat sint quaerat blanditiis veritatis recusandae numquam architecto, rerum animi.</div>
      </div>
      <div>
        <Image
          src={aboutImage}
          alt=''
          width={400}
          height={500}
        />
      </div>
    </main>
  )
}
