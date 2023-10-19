 "use client"
 import React from 'react'
 import { TypeAnimation } from 'react-type-animation'
 
 type Props = {}
 
 const  Animation = (props: Props) => {
   return (
     <div>
        <TypeAnimation className='text-3xl font-extrabold'
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "< Mr_Verma />",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "< Web Developer />",
                1500,
                "<Enterprenuer />",
                1500,
                "< Ethical Hacker />",
                1500,
              ]}
              wrapper="span"
              speed={5}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
     </div>
   )
 }
 
 export default Animation