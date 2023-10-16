import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Header from './components/Header'

export default function Home() {
  return (
      <div className='w-full overflow-x-hidden bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'>
       
        {/* navbar */}
        <Navbar/>
        {/* header */}
        <Header/> 

        {/* <Hero/>  */}
        {/* about */}
        {/* navbar */}
        {/* skills */}
        {/* projects */}
        {/* blogs */}
        {/* contact */}
        {/* footer */}

      </div>
  )
}
