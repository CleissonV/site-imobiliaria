import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown, FaBed, FaBath, FaCar, FaRuler, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaSearch, FaHeart, FaArrowRight, FaStar } from 'react-icons/fa'
import { MdApartment, MdVilla, MdLocationCity, MdHandshake } from 'react-icons/md'

const properties = [
  {
    name: 'Penthouse Jardins',
    price: 'R$ 8.900.000',
    location: 'Jardins, São Paulo',
    beds: 4, baths: 5, cars: 3, area: '520m²',
    type: 'Cobertura',
    tag: 'Exclusivo',
    gradient: 'from-stone-700 via-stone-800 to-stone-900',
    emoji: '🏙️'
  },
  {
    name: 'Casa Alto da Boa Vista',
    price: 'R$ 5.200.000',
    location: 'Alto da Boa Vista, SP',
    beds: 5, baths: 6, cars: 4, area: '850m²',
    type: 'Casa',
    tag: 'Novo',
    gradient: 'from-green-900 via-emerald-900 to-stone-900',
    emoji: '🌿'
  },
  {
    name: 'Apartamento Itaim',
    price: 'R$ 3.800.000',
    location: 'Itaim Bibi, São Paulo',
    beds: 3, baths: 4, cars: 3, area: '280m²',
    type: 'Apartamento',
    tag: 'Destaque',
    gradient: 'from-slate-800 via-zinc-800 to-stone-900',
    emoji: '🏢'
  },
  {
    name: 'Villa Alphaville',
    price: 'R$ 4.600.000',
    location: 'Alphaville, Barueri',
    beds: 6, baths: 7, cars: 5, area: '1.200m²',
    type: 'Villa',
    tag: 'Premium',
    gradient: 'from-amber-900 via-stone-900 to-zinc-900',
    emoji: '🏡'
  },
  {
    name: 'Studio Vila Nova',
    price: 'R$ 1.200.000',
    location: 'Vila Nova Conceição, SP',
    beds: 1, baths: 2, cars: 1, area: '80m²',
    type: 'Studio',
    tag: 'Oportunidade',
    gradient: 'from-neutral-800 via-stone-800 to-zinc-900',
    emoji: '✨'
  },
  {
    name: 'Cobertura Moema',
    price: 'R$ 6.500.000',
    location: 'Moema, São Paulo',
    beds: 4, baths: 5, cars: 4, area: '420m²',
    type: 'Cobertura',
    tag: 'Exclusivo',
    gradient: 'from-rose-900 via-stone-900 to-zinc-900',
    emoji: '🌇'
  },
]

const services = [
  { icon: MdApartment, title: 'Compra e Venda', desc: 'Intermediação completa com análise de mercado, avaliação precisa e negociação especializada para o melhor resultado.' },
  { icon: MdVilla, title: 'Locação Premium', desc: 'Gestão completa de imóveis para locação. Seleção criteriosa de inquilinos e administração profissional.' },
  { icon: MdLocationCity, title: 'Lançamentos', desc: 'Acesso antecipado aos melhores lançamentos imobiliários de São Paulo com condições exclusivas.' },
  { icon: MdHandshake, title: 'Consultoria', desc: 'Análise de investimentos, due diligence jurídica e assessoria completa em todas as etapas da transação.' },
]

const testimonials = [
  { name: 'Eduardo Pinheiro', role: 'Empresário', text: 'A Prestige encontrou exatamente o que buscávamos. Processo impecável do início ao fim. Superaram todas as expectativas.', stars: 5 },
  { name: 'Isabela Monteiro', role: 'Arquiteta', text: 'Venderam meu apartamento em 15 dias pelo valor pedido. Equipe extremamente profissional e discreta. Recomendo a todos.', stars: 5 },
  { name: 'Rafael Campos', role: 'Investidor', text: 'Portfólio de imóveis gerenciado com excelência. Rentabilidade acima do mercado e relatórios mensais detalhados.', stars: 5 },
]

const PropertyCard = ({ property, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="property-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e0d0] cursor-pointer"
    >
      <div className={`aspect-[4/3] bg-gradient-to-br ${property.gradient} relative flex items-center justify-center`}>
        <span className="text-6xl">{property.emoji}</span>
        <div className="property-overlay absolute inset-0 bg-[#1a1208]/60 flex items-center justify-center">
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition-colors">
              <FaHeart size={14} className="text-[#3d3020]" />
            </button>
            <button className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center hover:bg-[#d4a017] transition-colors">
              <FaArrowRight size={14} className="text-white" />
            </button>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#b8860b] text-white text-xs font-medium rounded-full font-sans">{property.tag}</span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#1a1208]/70 text-[#f5d76e] text-xs font-medium rounded-full font-sans backdrop-blur-sm">{property.type}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#8a7a60] text-xs mb-1 font-sans flex items-center gap-1">
          <FaMapMarkerAlt size={10} className="text-[#b8860b]" /> {property.location}
        </p>
        <h3 className="font-serif text-xl text-[#1a1208] mb-2">{property.name}</h3>
        <p className="font-sans font-bold text-[#b8860b] text-lg mb-4">{property.price}</p>
        <div className="flex gap-4 text-[#8a7a60] text-xs font-sans border-t border-[#e8e0d0] pt-4">
          <span className="flex items-center gap-1"><FaBed size={12} className="text-[#b8860b]" /> {property.beds}</span>
          <span className="flex items-center gap-1"><FaBath size={12} className="text-[#b8860b]" /> {property.baths}</span>
          <span className="flex items-center gap-1"><FaCar size={12} className="text-[#b8860b]" /> {property.cars}</span>
          <span className="flex items-center gap-1"><FaRuler size={12} className="text-[#b8860b]" /> {property.area}</span>
        </div>
      </div>
    </motion.div>
  )
}

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center p-8 group cursor-default"
    >
      <div className="w-16 h-16 mx-auto mb-6 border-2 border-[#e8e0d0] group-hover:border-[#b8860b] flex items-center justify-center transition-colors duration-300 rounded-full">
        <service.icon className="text-[#b8860b]" size={26} />
      </div>
      <h3 className="font-serif text-xl text-white mb-3">{service.title}</h3>
      <p className="text-[#8a7a60] text-sm leading-relaxed font-sans font-light">{service.desc}</p>
    </motion.div>
  )
}

const TestimonialCard = ({ t, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="bg-white p-8 rounded-2xl border border-[#e8e0d0] shadow-sm relative"
    >
      <div className="absolute top-6 right-8 font-serif text-6xl text-[#b8860b]/10 leading-none select-none">"</div>
      <div className="flex gap-1 mb-4">
        {Array(t.stars).fill(0).map((_, j) => <FaStar key={j} className="text-[#b8860b]" size={14} />)}
      </div>
      <p className="text-[#8a7a60] text-sm leading-relaxed mb-6 font-sans italic">"{t.text}"</p>
      <div className="flex items-center gap-3 border-t border-[#e8e0d0] pt-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b8860b] to-[#d4a017] flex items-center justify-center text-white font-sans font-bold text-sm">
          {t.name[0]}
        </div>
        <div>
          <div className="font-sans font-semibold text-[#1a1208] text-sm">{t.name}</div>
          <div className="text-[#b8860b] text-xs font-sans">{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [filter, setFilter] = useState('Todos')
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const types = ['Todos', 'Apartamento', 'Casa', 'Cobertura', 'Villa', 'Studio']
  const filtered = filter === 'Todos' ? properties : properties.filter(p => p.type === filter)

  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#b8860b] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#f7f4ef]/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d0] py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-xl text-[#1a1208]">
            Prestige <span className="text-[#b8860b]">Imóveis</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Imóveis', 'Serviços', 'Sobre', 'Contato'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#8a7a60] hover:text-[#b8860b] transition-colors font-medium font-sans"
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#2c1a08] to-[#1a1208]" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(184,134,11,0.12) 0%, transparent 60%)' }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #b8860b 0px, #b8860b 1px, transparent 1px, transparent 40px)' }}
        />
        <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#b8860b] tracking-[0.4em] uppercase text-xs mb-6 font-sans"
              >
                São Paulo · Imóveis de Alto Padrão
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif text-5xl md:text-7xl text-white leading-none mb-6"
              >
                Seu Imóvel<br />
                <span className="gold-text">dos Sonhos</span><br />
                Existe
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[#8a7a60] text-lg leading-relaxed mb-10 font-sans font-light max-w-lg"
              >
                20 anos conectando pessoas aos melhores imóveis de São Paulo. Exclusividade, discrição e resultados excepcionais.
              </motion.p>

              {/* Search bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl mb-8"
              >
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Buscar por bairro, cidade ou tipo..."
                    className="flex-1 bg-transparent text-white placeholder-white/40 text-sm font-sans focus:outline-none"
                  />
                  <button className="px-5 py-2 bg-[#b8860b] text-white rounded-lg hover:bg-[#d4a017] transition-colors flex items-center gap-2 text-sm font-sans">
                    <FaSearch size={12} /> Buscar
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-6"
              >
                {[{ n: '500+', l: 'Imóveis' }, { n: 'R$ 2B+', l: 'Transações' }, { n: '20', l: 'Anos' }].map((s, i) => (
                  <div key={i} className="text-center border-r border-white/10 last:border-0">
                    <div className="font-serif text-2xl text-[#f5d76e] mb-1">{s.n}</div>
                    <div className="text-[#8a7a60] text-xs tracking-widest uppercase font-sans">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Jardins', price: 'R$ 8.9M', gradient: 'from-amber-900 to-stone-900', emoji: '🏙️' },
                { label: 'Itaim Bibi', price: 'R$ 3.8M', gradient: 'from-slate-800 to-stone-900', emoji: '🏢' },
                { label: 'Moema', price: 'R$ 6.5M', gradient: 'from-rose-900 to-zinc-900', emoji: '🌇' },
                { label: 'Alphaville', price: 'R$ 4.6M', gradient: 'from-green-900 to-stone-900', emoji: '🌿' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-xl flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-[#b8860b]/50 transition-colors cursor-pointer`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-white text-sm font-serif">{item.label}</span>
                  <span className="text-[#f5d76e] text-xs font-sans">{item.price}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <FaChevronDown className="text-[#b8860b] animate-bounce" size={16} />
        </motion.div>
      </section>

      {/* Properties */}
      <section id="imoveis" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b8860b] tracking-[0.3em] uppercase text-xs mb-3 font-sans"
            >
              Portfólio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#1a1208]"
            >
              Imóveis em Destaque
            </motion.h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 text-xs font-medium font-sans transition-all duration-300 rounded-full border ${
                  filter === type
                    ? 'bg-[#1a1208] text-[#f5d76e] border-[#1a1208]'
                    : 'border-[#e8e0d0] text-[#8a7a60] hover:border-[#b8860b] hover:text-[#b8860b]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property, i) => (
            <PropertyCard key={property.name} property={property} index={i} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-32 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b8860b] tracking-[0.3em] uppercase text-xs mb-4 font-sans"
            >
              O Que Fazemos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-white"
            >
              Nossos Serviços
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b8860b] tracking-[0.3em] uppercase text-xs mb-4 font-sans"
            >
              Nossa História
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#1a1208] mb-6 leading-tight"
            >
              Duas Décadas de<br />Excelência
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#8a7a60] leading-relaxed font-sans font-light mb-6"
            >
              Fundada em 2004, a Prestige Imóveis nasceu com uma missão clara: transformar a experiência de compra e venda de imóveis de alto padrão em São Paulo. Com uma equipe de especialistas apaixonados pelo mercado imobiliário, construímos uma reputação sólida baseada em resultados excepcionais e atendimento personalizado.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#8a7a60] leading-relaxed font-sans font-light mb-10"
            >
              Somos CRECI-SP credenciados e membros da Associação Brasileira de Corretores de Imóveis. Nossa metodologia exclusiva combina inteligência de mercado com um profundo entendimento das necessidades de cada cliente.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[{ n: '2.400+', l: 'Imóveis vendidos' }, { n: '98%', l: 'Satisfação' }, { n: 'R$ 2B+', l: 'Em transações' }, { n: '20', l: 'Anos de mercado' }].map((s, i) => (
                <div key={i} className="border-l-2 border-[#b8860b] pl-4">
                  <div className="font-serif text-2xl text-[#1a1208] mb-1">{s.n}</div>
                  <div className="text-[#8a7a60] text-xs font-sans">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { bg: 'from-amber-900 to-stone-800', emoji: '🏆', title: 'Prêmio Melhor Imobiliária SP 2023' },
              { bg: 'from-stone-800 to-zinc-900', emoji: '🤝', title: 'Parceria exclusiva Sotheby\'s' },
              { bg: 'from-green-900 to-stone-900', emoji: '🌱', title: 'Certificação ESG Imobiliário' },
              { bg: 'from-slate-800 to-stone-900', emoji: '📊', title: 'Top 10 Imobiliárias Brasil' },
            ].map((item, i) => (
              <div
                key={i}
                className={`aspect-square bg-gradient-to-br ${item.bg} rounded-2xl flex flex-col items-center justify-center gap-3 p-6 text-center border border-white/5`}
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-white/80 text-xs font-sans leading-tight">{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#f0ebe1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#b8860b] tracking-[0.3em] uppercase text-xs mb-3 font-sans"
            >
              Depoimentos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#1a1208]"
            >
              Clientes Satisfeitos
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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

      {/* Footer */}
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
    </div>
  )
}
