import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  rails,
  codecademy,
  lewagon,
  postgresql,
  referralsafe,
  inprocess,
  agency,
  taskcompletor,
  nestorapp,
  innovans,
  titouan,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Travaux",
  },
  {
    id: "about",
    title: "À Propos",
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
      "Apprentissage des languages de programmation : HTML, CSS, Vanilla JS",
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
      "Formation intensive de 400 heures pour apprendre à développer tout type d'application web de A à Z",
      "Après avoir pitché l'idée de 'Referral Safe' devant mon groupe, création d'un 'certificateur d'expérience professionnelle' en 2 semaines chrono, puis présentation du projet sur Twitch",
      "Apprentissage de Ruby on Rails, JS stimulus et Git",
    ],
  },
  {
    title: "Stage de 3 mois - Développeur Full-Stack",
    company_name: "Innovans",
    icon: innovans,
    iconBg: "white",
    date: "Juillet 2023 - Octobre 2023",
    points: [
      "Développement et maintenance d'une application web utilisant les technologies HTML, CSS, JavaScript, PHP et MySQL",
      "Collaboration étroite avec une équipe de développeurs pour assurer la livraison des fonctionnalités dans les délais impartis",
      "Optimisation des performances de l'application en identifiant et en résolvant les problèmes de code et de base de données",
      "Travaux sur 6 applications webs au total sur les 3 mois de stage"
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Auto-Entrepreneur",
    icon: titouan,
    iconBg: "#70B7E0",
    date: "Juin 2023 - Aujourd'hui",
    points: [
      "Travaux sur Task Completor pour se former à Next JS et apprendre à intégrer l'IA dans des projets",
      "Développement de Nestor App en projet entreprenarial, gestion de toute la partie informatique sur le projet start-up.",
    ],
  },
];

const projects = [
  {
    name: "Referral Safe",
    description:
      "Projet Wagon réalisé en 2 semaines. Certificateur d'expérience professionnelle où les employés peuvent valider leurs expériences antérieures et compétences acquises par le biais de leurs employeurs{main}.",
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
    website_link: "https://referralsafeapp-156a896d1d00.herokuapp.com/",
  },
  {
    name: "Task Completor",
    description:
      "Une application web basé sur l'API de Open AI GPT 4. Outil baser sur l'IA pour compléter vos tâches du quotidien telles que des lettres de motivations, des présentations, des emails et des messages.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "gpt4api",
        color: "pink-text-gradient",
      },
    ],
    image: taskcompletor,
    inprocess: false,
    source_code_link: "https://github.com/titou974/taskcompletor",
    website_link: "https://www.taskcompletor.app/",
  },
  {
    name: "Nestor App",
    description:
      "Projet entreprenarial actuel. Application web pour les entreprises de voiturier qui leur permet de récolter des statistiques sur les performances de leurs travailleurs (temps, lieu..) et la création de tickets digitaux pour les clients ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: nestorapp,
    inprocess: true,
    source_code_link: "https://github.com/titou974/valetappv1",
    website_link: "https://valetappv1.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
