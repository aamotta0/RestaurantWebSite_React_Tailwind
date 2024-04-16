import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import OurMenu from './components/OurMenu/OurMenu'
import Testimonials from './components/Testimonials/Testimonials'
import Newletter from './components/Newletter/Newletter'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Testimonials />
      <Newletter />
      <Footer />
    </main>
  )
}

export default App