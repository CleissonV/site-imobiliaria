import { MdApartment, MdVilla, MdLocationCity, MdHandshake } from 'react-icons/md'
import type { Property, RealEstateService, Testimonial, Stat } from '../types'

export const propertyTypes: string[] = ['Todos', 'Apartamento', 'Casa', 'Cobertura', 'Villa', 'Studio']

export const propertyImages: string[] = [
  'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613545325268-9265e1609167?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80&auto=format&fit=crop',
]

export const properties: Property[] = [
  {
    id: 1,
    title: 'Penthouse Jardins',
    price: 'R$ 8.900.000',
    location: 'Jardins, São Paulo',
    beds: 4,
    baths: 5,
    cars: 3,
    area: 520,
    type: 'Cobertura',
    tag: 'Exclusivo',
    image: propertyImages[0],
  },
  {
    id: 2,
    title: 'Casa Alto da Boa Vista',
    price: 'R$ 5.200.000',
    location: 'Alto da Boa Vista, SP',
    beds: 5,
    baths: 6,
    cars: 4,
    area: 850,
    type: 'Casa',
    tag: 'Novo',
    image: propertyImages[1],
  },
  {
    id: 3,
    title: 'Apartamento Itaim',
    price: 'R$ 3.800.000',
    location: 'Itaim Bibi, São Paulo',
    beds: 3,
    baths: 4,
    cars: 3,
    area: 280,
    type: 'Apartamento',
    tag: 'Destaque',
    image: propertyImages[2],
  },
  {
    id: 4,
    title: 'Villa Alphaville',
    price: 'R$ 4.600.000',
    location: 'Alphaville, Barueri',
    beds: 6,
    baths: 7,
    cars: 5,
    area: 1200,
    type: 'Villa',
    tag: 'Premium',
    image: propertyImages[3],
  },
  {
    id: 5,
    title: 'Studio Vila Nova',
    price: 'R$ 1.200.000',
    location: 'Vila Nova Conceição, SP',
    beds: 1,
    baths: 2,
    cars: 1,
    area: 80,
    type: 'Studio',
    tag: 'Oportunidade',
    image: propertyImages[4],
  },
  {
    id: 6,
    title: 'Cobertura Moema',
    price: 'R$ 6.500.000',
    location: 'Moema, São Paulo',
    beds: 4,
    baths: 5,
    cars: 4,
    area: 420,
    type: 'Cobertura',
    tag: 'Exclusivo',
    image: propertyImages[5],
  },
]

export const services: RealEstateService[] = [
  {
    icon: MdApartment,
    title: 'Compra e Venda',
    desc: 'Intermediação completa com análise de mercado, avaliação precisa e negociação especializada para o melhor resultado.',
  },
  {
    icon: MdVilla,
    title: 'Locação Premium',
    desc: 'Gestão completa de imóveis para locação. Seleção criteriosa de inquilinos e administração profissional.',
  },
  {
    icon: MdLocationCity,
    title: 'Lançamentos',
    desc: 'Acesso antecipado aos melhores lançamentos imobiliários de São Paulo com condições exclusivas.',
  },
  {
    icon: MdHandshake,
    title: 'Consultoria',
    desc: 'Análise de investimentos, due diligence jurídica e assessoria completa em todas as etapas da transação.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Eduardo Pinheiro',
    role: 'Empresário',
    text: 'A Prestige encontrou exatamente o que buscávamos. Processo impecável do início ao fim. Superaram todas as expectativas.',
    rating: 5,
  },
  {
    name: 'Isabela Monteiro',
    role: 'Arquiteta',
    text: 'Venderam meu apartamento em 15 dias pelo valor pedido. Equipe extremamente profissional e discreta. Recomendo a todos.',
    rating: 5,
  },
  {
    name: 'Rafael Campos',
    role: 'Investidor',
    text: 'Portfólio de imóveis gerenciado com excelência. Rentabilidade acima do mercado e relatórios mensais detalhados.',
    rating: 5,
  },
]

export const stats: Stat[] = [
  { value: '2.400+', label: 'Imóveis vendidos' },
  { value: '98%', label: 'Satisfação' },
  { value: 'R$ 2B+', label: 'Em transações' },
  { value: '20', label: 'Anos de mercado' },
]
