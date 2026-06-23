import { useState } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from '../components/ui/PropertyCard'
import { properties, propertyTypes } from '../constants/data'

export default function Properties() {
  const [filter, setFilter] = useState<string>('Todos')
  const filtered = filter === 'Todos' ? properties : properties.filter(p => p.type === filter)

  return (
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
          {propertyTypes.map(type => (
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
          <PropertyCard key={property.id} property={property} index={i} />
        ))}
      </div>
    </section>
  )
}
