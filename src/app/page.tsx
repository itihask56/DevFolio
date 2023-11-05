import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Divider from '../components/Divider'
import { getSocials } from '@/utils/sanity-utils'

export default async function Home() {
  const socialData=await getSocials()
  return (
     <div className='h-screen w-full overflow-x-hidden bg-black '>
  
        {/* navbar */}
        <Navbar props={socialData}/>
        {/* header */}
        <Header props={socialData}/> 
        <Divider/> 

        {/* <Hero/>  */}
        {/* about */}
        <About/> 
        <Divider/> 
        
        {/* skills */}
        <Skills/> 
        <Divider/> 
        {/* projects */}
        <Projects/> 
        <Divider/> 
        {/* blogs */}
        <Blogs/> 
        <Divider/> 

        {/* contact */}
        <Contact/> 
        <Divider/> 
        {/* footer */}
        <Footer></Footer>
       

      </div>
  )
}

//bg-gradient-to-bl from-white via-indigo-100 to-purple-200