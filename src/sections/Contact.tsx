import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contato" className="py-32 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#b8860b] tracking-[0.3em] uppercase text-xs mb-3 font-sans">Fale Conosco</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1208]">Entre em Contato</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="text-[#8a7a60] font-sans font-light text-sm leading-relaxed mb-8">
              Nossa equipe de especialistas está pronta para ajudá-lo a encontrar o imóvel perfeito ou a obter o melhor resultado na venda de seu imóvel. Entre em contato e agende uma conversa discreta e personalizada.
            </p>
            <div className="space-y-5 mb-8">
              {[
                { icon: FaPhone, text: '(11) 3456-7890' },
                { icon: FaWhatsapp, text: '(11) 98765-4321' },
                { icon: FaEnvelope, text: 'contato@prestigeimoveis.com.br' },
                { icon: FaMapMarkerAlt, text: 'Av. Brasil, 1000 - Jardins, SP' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#e8e0d0] rounded-full flex items-center justify-center flex-shrink-0 bg-white">
                    <item.icon className="text-[#b8860b]" size={14} />
                  </div>
                  <span className="text-[#8a7a60] font-sans text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[#e8e0d0] rounded-full flex items-center justify-center hover:border-[#b8860b] hover:text-[#b8860b] transition-colors bg-white">
                <FaInstagram size={14} className="text-[#8a7a60]" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#e8e0d0] rounded-full flex items-center justify-center hover:border-[#b8860b] hover:text-[#b8860b] transition-colors bg-white">
                <FaWhatsapp size={14} className="text-[#8a7a60]" />
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            {[
              { label: 'Nome Completo', type: 'text', ph: 'Seu nome' },
              { label: 'E-mail', type: 'email', ph: 'seu@email.com' },
              { label: 'Telefone', type: 'tel', ph: '(11) 99999-9999' },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-xs tracking-widest uppercase text-[#8a7a60] mb-2 font-sans">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.ph}
                  className="w-full bg-white border border-[#e8e0d0] px-4 py-3 text-[#1a1208] text-sm font-sans font-light placeholder-[#c8baa8] focus:border-[#b8860b] focus:outline-none transition-colors rounded-lg"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#8a7a60] mb-2 font-sans">Interesse</label>
              <select className="w-full bg-white border border-[#e8e0d0] px-4 py-3 text-[#8a7a60] text-sm font-sans focus:border-[#b8860b] focus:outline-none transition-colors rounded-lg">
                <option>Comprar imóvel</option>
                <option>Vender imóvel</option>
                <option>Alugar imóvel</option>
                <option>Investimento</option>
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#8a7a60] mb-2 font-sans">Mensagem</label>
              <textarea
                rows={4}
                placeholder="Conte-nos sobre o imóvel que procura..."
                className="w-full bg-white border border-[#e8e0d0] px-4 py-3 text-[#1a1208] text-sm font-sans font-light placeholder-[#c8baa8] focus:border-[#b8860b] focus:outline-none transition-colors rounded-lg resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#1a1208] text-[#f5d76e] font-sans font-medium text-sm tracking-widest uppercase hover:bg-[#b8860b] hover:text-[#1a1208] transition-all duration-300 rounded-lg"
            >
              Solicitar Atendimento
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
