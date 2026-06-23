import { motion } from 'framer-motion'
import { stats } from '../constants/data'

export default function About() {
  return (
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
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 border-[#b8860b] pl-4">
                <div className="font-serif text-2xl text-[#1a1208] mb-1">{s.value}</div>
                <div className="text-[#8a7a60] text-xs font-sans">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80&auto=format&fit=crop"
            alt="interior luxuoso"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-bold text-xl">Interiores de Alto Padrão</p>
            <p className="text-[#b8860b] text-sm mt-1">Curadoria exclusiva para cada cliente</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
