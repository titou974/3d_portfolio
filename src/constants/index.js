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
  lewagon,
  postgresql,
  referralsafe,
  taskcompletor,
  nestorapp,
  innovans,
  titouan,
  kessel,
  kesselmedia,
  maltLogo,
  cherryWebsite,
  wedivepreview,
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
    title: "Frontend Developer",
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
    icon: postgresql,
  },
];

const experiences = [
  // {
  //   id: 1,
  //   pos: "Concepteur Développeur d'Application Web",
  //   name: "Le Wagon",
  //   icon: lewagon,
  //   duration: "Avril 2023 - Juin 2023",
  //   title:
  //     "Bootcamp intensif de 400 heures spécialisé Ruby on Rails et JavaScript. Développement et présentation de 'Referral Safe' (certificateur d'expérience professionnelle) en 2 semaines lors du Demoday Twitch. Certification niveau 6 obtenue pour rejoindre une communauté tech et structurer mes compétences autodidactes.",
  //   animation: "seatedIdle",
  // },
  {
    id: 1,
    pos: "Stage Développeur Full-Stack",
    name: "Innovans",
    icon: innovans,
    duration: "Juillet 2023 - Octobre 2023",
    title:
      "Développement et maintenance de 6 applications web (PHP/MySQL/JS). Optimisation backend et résolution de problèmes critiques en base de données.",
    animation: "fight",
    testimonial: {
      author: "Carl, CEO d'Innovans",
      text: "Titouan nous a permi de résoudre des problèmes qu'on trainait depuis des mois en quelques semaines.",
    },
    skills: [
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    id: 2,
    pos: "Stage Web Marketer-Développeur Front-end",
    name: "Kessel Media",
    icon: kessel,
    duration: "Novembre 2023 - Mai 2024",
    title:
      "Développement de fonctionnalités pour plateforme +500k utilisateurs. Apprentissage des bonnes pratiques Vue.js/Nuxt 3 pour applications scalables.",
    animation: "burpee",
    testimonial: "",
    skills: [
      { name: "Nuxt 3", level: 90 },
      { name: "Vue 2 & Vue 3", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CMS", level: 80 },
    ],
  },
  {
    id: 3,
    pos: "Freelance Développeur Front-end",
    name: "Kessel Media",
    icon: kessel,
    duration: "Mai 2024 - Août 2024",
    title:
      "Refonte V2 en Nuxt 3 : conception et développement du parcours d'abonnement complet. Refonte pages articles et maintenance CMS. Focus scalabilité.",
    animation: "workingOnDevice",
    testimonial: {
      author: "Alexis Pibrac, CTO de Kessel Media",
      text: "Titouan a démontré sa capacité à apprendre et à travailler rapidement, contribuant ainsi à l'évolution rapide de la plateforme de Kessel !",
    },
    skills: [
      { name: "Nuxt 3", level: 90 },
      { name: "Vue 2 & Vue 3", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CMS", level: 80 },
    ],
  },
  {
    id: 4,
    pos: "Freelance Développeur Full-Stack",
    name: "Auto-Entrepreneur",
    icon: titouan,
    duration: "Novembre 2023 - Aujourd'hui",
    title:
      "Développement de MVP, dashboards et apps cross-platform. Créateur de Nestor (Next.js), SaaS déployé dans +20 restaurants parisiens gérant +2 000 véhicules/jour. Maintenance City Rent.",
    animation: "rumbaDancing",
    testimonial: {
      author: "Samuel Doutriaux, Co-fondateur de Nestor",
      text: "J'ai parlé de mon idée d'app de voiturier à Titouan, et en quelques semaines il a développé un MVP fonctionnel qui a impressionné nos premiers clients !",
    },
    skills: [
      { name: "Next.js 13-16", level: 100 },
      { name: "Node.js", level: 88 },
      { name: "Flutter", level: 85 },
      { name: "Supabase, Mango DB, AWS", level: 90 },
    ],
  },
];

const projects = [
  {
    name: "WeDive",
    description:
      "Cette idée vient du Coeur 🩵. Une application mobile de partage de spots de plongée et de pêche, réunissant une communauté de passionnés de la mer. Enregistrez vos sessions de plongée et partagez les photos/vidéos de vos aventures. Le tout dans le respect de l’environnement et avec un engagement pour sa préservation.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: wedivepreview,
    inprocess: true,
  },
  {
    name: "Kessel Media",
    description:
      "Surnommé le \"YouTube de la Newsletter\", c'est le média de la newsletter qui compte maintenant plus de 500 000 utilisateurs actifs. J'ai participé à la refonte de Kessel et à la mise en place d'une architecture de code scalable.",
    tags: [
      {
        name: "nuxt3/vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "cms",
        color: "pink-text-gradient",
      },
    ],
    image: kesselmedia,
    inprocess: false,
    website_link: "https://www.kessel.media/",
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
    inprocess: false,
    source_code_link: "https://github.com/titou974/valetappv1",
    website_link: "https://valetappv1.vercel.app/",
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
    name: "Referral Safe",
    description:
      "Projet Wagon réalisé en 2 semaines. Certificateur d'expérience professionnelle où les employés peuvent valider leurs expériences antérieures et compétences acquises par le biais de leurs employeurs.",
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
];

const aboutSection = {
  subtitle: "Et...",
  title: "À Propos.",
};

const malt = {
  subtitle: "Embauchez-moi sur",
  title: "Malt",
  description: "Vous pouvez me proposez votre projet/mission sur",
  image: maltLogo,
};

const socialsLinks = {
  linkedin: "https://www.linkedin.com/in/titouan-hirsch",
  github: "https://github.com/titou974",
  instagram: "https://www.instagram.com/bobodigital_/",
  tiktok: "https://www.tiktok.com/@bobodigital_",
};

export const hoursSlotsInFrench = [
  { key: "cat", label: "09:00 - 09:30" },
  { key: "dog", label: "10:00 - 10:30" },
  { key: "rabbit", label: "11:00 - 11:30" },
  { key: "hamster", label: "14:00 - 14:30" },
  { key: "parrot", label: "15:00 - 15:30" },
  { key: "spider", label: "16:00 - 16:30" },
  { key: "goldfish", label: "17:00 - 17:30" },
  { key: "turtle", label: "18:00 - 18:30" },
];

export {
  services,
  technologies,
  experiences,
  projects,
  aboutSection,
  malt,
  socialsLinks,
};
