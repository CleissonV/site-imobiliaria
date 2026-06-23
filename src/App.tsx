import { motion, useScroll } from 'framer-motion'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Properties from './sections/Properties'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#b8860b] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <Nav />
      <Hero />
      <Properties />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
