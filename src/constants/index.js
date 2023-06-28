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
  referralsafe,
  inprocess,
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

const projects = [
  {
    name: "Referral Safe",
    description:
      "Certificateur d'expériences professionnelles où les employés peuvent valider leurs expériences antérieures et compétences acquises par le biais de leurs employeurs.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "stimulusjs",
        color: "pink-text-gradient",
      },
    ],
    image: referralsafe,
    source_code_link: "https://github.com/titou974/referral-safe",
  },
  {
    name: "Task Completor",
    description:
      "Une application web basé sur l'API de Open AI GPT 3. On rentre un sujet quelconque et on obtient un rapport complet avec un nombre de pages définies et un design à la carte",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "openaiapi",
        color: "pink-text-gradient",
      },
    ],
    image: inprocess,
    inprocess: true,
    source_code_link: "https://github.com/titou974",
  },
  {
    name: "Island App",
    description:
      "Réseau social ultramarin dédié à mon île d'origine, La Réunion, où tout le monde peut partager des lieux d'intérêts et son lifestyle réunionnais.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: inprocess,
    inprocess: true,
    source_code_link: "https://github.com/titou974",
  },
];

export { services, technologies, experiences, projects };
