import type { IconType } from 'react-icons'

export interface Property {
  id: number
  title: string
  location: string
  price: string
  type: string
  beds: number
  baths: number
  cars: number
  area: number
  image: string
  tag?: string
}

export interface RealEstateService {
  icon: IconType
  title: string
  desc: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
}

export interface Stat {
  value: string
  label: string
}
