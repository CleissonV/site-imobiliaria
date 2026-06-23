import { motion } from 'framer-motion'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../constants/data'

export default function Services() {
  return (
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
  )
}
