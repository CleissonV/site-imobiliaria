import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#1a1208] border-t border-[#2a2008]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-white">Prestige <span className="text-[#b8860b]">Imóveis</span></span>
        <p className="text-[#4a3820] text-xs font-sans">© 2024 Prestige Imóveis. CRECI-SP 45.231-J. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="text-[#4a3820] hover:text-[#b8860b] transition-colors"><FaInstagram size={16} /></a>
          <a href="#" className="text-[#4a3820] hover:text-[#b8860b] transition-colors"><FaWhatsapp size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
