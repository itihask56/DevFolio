import React from 'react'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
  return (
     <section className='h-[calc(100vh-56px)] w-full flex items-center justify-center '>
        <div className='flex flex-col items-center justify-center space-y-4'>
            <div className='rounded-full h-40 w-40 flex items-center justify-center shadow-lg shadow-gray-500 hover:scale-105 duration-500'>
                <Image className='' src={'/images/hero-image.png'} alt='itihas' height={150} width={150}/>
            </div>
            <p className='flex flex-col items-center justify-center'>I am Itihas Verma a Tech Enthusiast and aspiring Enterprenure from Chandigarh University</p>
            
        </div>
        

     </section>
  )
}

export default Header