import About from '@/components/About'
import Capabilities from '@/components/Capabilities'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import StatStrip from '@/components/StartStrip'
import Work from '@/components/Work'
import React from 'react'

function page() {
  return (
    <main className="relative">
      <Hero />
      <StatStrip />
      <About />
      <Capabilities />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}

export default page
