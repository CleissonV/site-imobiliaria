import { motion } from 'framer-motion'
import TestimonialCard from '../components/ui/TestimonialCard'
import { testimonials } from '../constants/data'

export default function Testimonials() {
  return (
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
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
