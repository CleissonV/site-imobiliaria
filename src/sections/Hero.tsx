import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown, FaSearch } from 'react-icons/fa'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y: heroY }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1920&q=80&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1208]/90 via-[#1a1208]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#2c1a08]/60 to-transparent" />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(184,134,11,0.12) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #b8860b 0px, #b8860b 1px, transparent 1px, transparent 40px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text + search */}
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

          {/* Right — 2x2 image grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Jardins', price: 'R$ 8.9M', img: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&q=80&auto=format&fit=crop' },
              { label: 'Itaim Bibi', price: 'R$ 3.8M', img: 'https://images.unsplash.com/photo-1613545325268-9265e1609167?w=500&q=80&auto=format&fit=crop' },
              { label: 'Moema', price: 'R$ 6.5M', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=80&auto=format&fit=crop' },
              { label: 'Alphaville', price: 'R$ 4.6M', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80&auto=format&fit=crop' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#b8860b]/50 transition-colors cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/90 via-[#1a1208]/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="block text-white text-sm font-serif">{item.label}</span>
                  <span className="block text-[#f5d76e] text-xs font-sans mt-0.5">{item.price}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-[#b8860b] animate-bounce" size={16} />
      </motion.div>
    </section>
  )
}
