import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import type { Testimonial } from '../../types'

interface Props {
  testimonial: Testimonial
  index: number
}

export default function TestimonialCard({ testimonial, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
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
        {Array(testimonial.rating).fill(0).map((_, j) => (
          <FaStar key={j} className="text-[#b8860b]" size={14} />
        ))}
      </div>
      <p className="text-[#8a7a60] text-sm leading-relaxed mb-6 font-sans italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 border-t border-[#e8e0d0] pt-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b8860b] to-[#d4a017] flex items-center justify-center text-white font-sans font-bold text-sm">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="font-sans font-semibold text-[#1a1208] text-sm">{testimonial.name}</div>
          <div className="text-[#b8860b] text-xs font-sans">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}
