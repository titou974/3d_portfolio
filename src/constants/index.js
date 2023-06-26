import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rails,
  reactnative,
  codecademy,
  lewagon,
  postgresql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "work",
    title: "Travaux",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "rails",
    icon: rails,
  },
  {
    name: "postgresql",
    icon: postgresql
  }
];

const experiences = [
  {
    title: "Student Developer",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#000000",
    date: "Juin 2022- Avril 2023",
    points: [
      "Apprentissage des languages de programmation classique : HTML, CSS, Vanilla JS",
      "Développement d'applications utilisant les dernières technologies React et Node JS",
      "Apprentissage du Python et des modèles de bases en Machine Learning",
    ],
  },
  {
    title: "Student Developer",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#E50F05",
    date: "Avril 2023 - Juin 2023",
    points: [
      "Formation intensive de 400 heures pour apprendre à développer tout type d'applications web de A à Z",
      "Après avoir pitché l'idée de 'Referral Safe' devant mon groupe, création d'un 'certificateur d'expériences professionnelles' en 2 semaines chrono, puis présentation du projet sur Twitch",
      "Apprentissage de Ruby on Rails, JS stimulus et Git (outil pour collaborer sur des projets)",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Agence Web",
    iconBg: "#383E56",
    date: "Juin 2023 - Aujourd'hui",
    points: [
      "Co-fondateur d'une agence de communication.",
      "Développement d'applications web/mobile sur les frameworks Rails et React JS, coding sur la partie back-end des applications.",
      "Design sur Figma : partage entre les besoins du client, l'identité visuel demandée, et notre savoir-faire dans l'expérience utilisateur",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
