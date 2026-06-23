import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { RealEstateService } from '../../types'

interface Props {
  service: RealEstateService
  index: number
}

export default function ServiceCard({ service, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center p-8 group cursor-default"
    >
      <div className="w-16 h-16 mx-auto mb-6 border-2 border-[#e8e0d0] group-hover:border-[#b8860b] flex items-center justify-center transition-colors duration-300 rounded-full">
        <Icon className="text-[#b8860b]" size={26} />
      </div>
      <h3 className="font-serif text-xl text-white mb-3">{service.title}</h3>
      <p className="text-[#8a7a60] text-sm leading-relaxed font-sans font-light">{service.desc}</p>
    </motion.div>
  )
}
