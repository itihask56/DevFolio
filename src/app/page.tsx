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

export default function Home() {
  return (
     <div className='w-full overflow-x-hidden '>
  
        {/* navbar */}
        <Navbar/>
        {/* header */}
        <Header/> 
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

        {/* contact */}
        <Contact/> 
        {/* footer */}
        <Footer></Footer>
       

      </div>
  )
}

//bg-gradient-to-bl from-white via-indigo-100 to-purple-200