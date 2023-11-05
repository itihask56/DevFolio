import React from 'react'
import Link from 'next/link'

type Props = {}

const Resume = (props: Props) => {
  return (
    <div className=' h-screen bg-black text-violet-500 sm:text-6xl grid grid-col place-content-center'> 
        <div className='border border-violet-600 p-20 m-20 tracking-wider '>
            AVI RESUME BANAYA JA RHA HAI GIES
            
        </div>
        <div className='flex items-center justify-center border border-white w-fit p-8 sm:text-2xl rounded-full '>
        <Link  href={'/'} className='hover:shadow-2xl shadow-violet-700'> HOME</Link>
        </div>

       
        
    </div>
  )
}

export default Resume