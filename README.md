<h1 align="center">Prestige — Imobiliária Premium</h1>

<p align="center">
  Site imobiliário com filtro de propriedades, nav adaptável ao scroll e galeria de imóveis premium com ficha técnica completa.
  <br /><br />
  <a href="https://site-imobiliaria.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Site institucional para imobiliária premium. Hero combina vídeo e grade 2×2 de imóveis com barra de busca integrada. A navegação muda de cor conforme o scroll. A seção de imóveis possui filtro interativo por tipo (apartamento, casa, cobertura, villa, studio).

## Funcionalidades

- Hero com vídeo + grade 2×2 de imóveis e barra de busca
- Navegação com mudança de cor no scroll
- Filtro de imóveis por categoria com 6 tipos
- Cards de imóveis com ficha completa (quartos, banheiros, vagas, m²)
- Serviços da imobiliária com ícones
- Depoimentos de clientes
- Formulário de contato

## Stack

- **React 18 + TypeScript** — componentes tipados e reutilizáveis
- **Tailwind CSS 3** — design system consistente
- **Framer Motion 11** — animações de entrada suaves
- **Vite 5** — build rápido
- **react-icons** — ícones Font Awesome e Material Design

## Instalação

```bash
git clone https://github.com/CleissonV/site-imobiliaria
cd site-imobiliaria
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # imóveis, serviços, depoimentos, tipos
├── types/
│   └── index.ts         # Property, RealEstateService, Testimonial
├── components/
│   └── ui/
│       ├── PropertyCard.tsx
│       ├── ServiceCard.tsx
│       └── TestimonialCard.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Properties.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
