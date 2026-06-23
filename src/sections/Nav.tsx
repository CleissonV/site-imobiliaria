import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#f7f4ef]/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d0] py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`flex items-center gap-2.5 font-serif text-xl transition-colors ${scrolled ? 'text-[#1a1208]' : 'text-[#f7f4ef]'}`}>
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="#b8860b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 15L16 6l10 9" /><path d="M9 14v11h14V14" /><path d="M14 25v-6h4v6" />
          </svg>
          <span>Prestige <span className="text-[#b8860b]">Imóveis</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Imóveis', 'Serviços', 'Sobre', 'Contato'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm hover:text-[#b8860b] transition-colors font-medium font-sans ${scrolled ? 'text-[#8a7a60]' : 'text-[#e8e0d0]'}`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="px-6 py-2.5 bg-[#1a1208] text-[#f5d76e] text-sm font-medium font-sans hover:bg-[#b8860b] hover:text-[#1a1208] transition-all duration-300"
          >
            Falar com Especialista
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#b8860b]">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#e8e0d0] overflow-hidden"
          >
            <div className="flex flex-col gap-5 p-6">
              {['Imóveis', 'Serviços', 'Sobre', 'Contato'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#8a7a60] hover:text-[#b8860b] font-medium font-sans text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
