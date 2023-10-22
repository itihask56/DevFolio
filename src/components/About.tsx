import React from 'react'
import Image from 'next/image'
import Motion from './Motion'
Motion
type Props = {}

const About = (props: Props) => {
  return (
     <section className='max-w-7xl h-screen mx-auto p-5 flex flex-col items-center justify-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-violet-500'>About</h1>
        <div className='flex flex-col-reverse md:flex-row items-center md:justify-between w-full'>
        
            <div className='md:w-[70%] w-full '>
            <Motion delay={1} direction={'left'}>
                <div className="p-4 text-center md:text-left font-semibold text-sm" ></div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae at, est necessitatibus, consequuntur ad eius repellat ab tempora temporibus consequatur unde autem perferendis soluta rem voluptas adipisci officiis quo qui error ut quis iure explicabo a. Asperiores corporis veniam dignissimos earum sit distinctio, pariatur inventore! Officia ea odit vel molestias recusandae reiciendis iusto obcaecati suscipit. Cumque delectus quaerat commodi iure sequi, ipsa tenetur possimus quibusdam aspernatur magnam. Nihil architecto harum qui labore doloremque eum excepturi eaque cum voluptatibus, fugit animi at optio, aspernatur ad adipisci reprehenderit, accusantium dolor impedit ipsam ea aliquam tempora. Ducimus officia reiciendis ullam nemo, iste explicabo!</p>
        </Motion>
            </div>
            
            <div className="w-[200px] md:w-auto">
            <Motion delay={1} direction={'right'}>
           
                <div className="flex items-center justify-center shadow-lg shadow-gray-400 rounded-lg bg-white h-[250px] p-2 w-full my-12 ">
                
                    <div className='w-full h-full bg-violet-500 rounded-lg  hover:scale-105 duration-500'>
                        <Image src={"/images/about-image.png"} alt='not available' width={100} height={100} className='rounded-lg w-full h-full object-cover '/>

                    </div>
                  
                 
                </div>
                </Motion>
       
            </div>
            

        </div>

     </section>

//     <section className='text-black'>
//     <div className='md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
//         <Image src="/images/about-image.png" width={500} height={500} alt='not available'/> 
//         <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
//             <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>
//             <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Iure officia odit quaerat vero voluptatem voluptas impedit 
//                 repudiandae magnam. Perferendis, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Iure officia odit quaerat vero voluptatem voluptas impedit 
//                 repudiandae magnam. Perferendis, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Iure officia odit quaerat vero voluptatem voluptas impedit 
//                 repudiandae magnam. Perferendis, expedita.
//             </p>
             
             
//         </div>
//     </div>
    
//  </section>
  )
}

export default About