import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart, FaArrowRight, FaMapMarkerAlt, FaBed, FaBath, FaCar, FaRuler } from 'react-icons/fa'
import type { Property } from '../../types'
import { propertyImages } from '../../constants/data'

interface Props {
  property: Property
  index: number
}

export default function PropertyCard({ property, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="property-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e0d0] cursor-pointer"
    >
      <div className="aspect-video overflow-hidden relative group">
        <img
          src={propertyImages[index % propertyImages.length]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="property-overlay absolute inset-0 bg-[#1a1208]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition-colors">
              <FaHeart size={14} className="text-[#3d3020]" />
            </button>
            <button className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center hover:bg-[#d4a017] transition-colors">
              <FaArrowRight size={14} className="text-white" />
            </button>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-[#b8860b] text-white text-xs font-bold rounded-full">{property.type}</span>
        </div>
        {property.tag && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-[#1a1208]/70 text-[#f5d76e] text-xs font-medium rounded-full font-sans backdrop-blur-sm">
              {property.tag}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-[#8a7a60] text-xs mb-1 font-sans flex items-center gap-1">
          <FaMapMarkerAlt size={10} className="text-[#b8860b]" /> {property.location}
        </p>
        <h3 className="font-serif text-xl text-[#1a1208] mb-2">{property.title}</h3>
        <p className="font-sans font-bold text-[#b8860b] text-lg mb-4">{property.price}</p>
        <div className="flex gap-4 text-[#8a7a60] text-xs font-sans border-t border-[#e8e0d0] pt-4">
          <span className="flex items-center gap-1"><FaBed size={12} className="text-[#b8860b]" /> {property.beds}</span>
          <span className="flex items-center gap-1"><FaBath size={12} className="text-[#b8860b]" /> {property.baths}</span>
          <span className="flex items-center gap-1"><FaCar size={12} className="text-[#b8860b]" /> {property.cars}</span>
          <span className="flex items-center gap-1"><FaRuler size={12} className="text-[#b8860b]" /> {property.area}m²</span>
        </div>
      </div>
    </motion.div>
  )
}
