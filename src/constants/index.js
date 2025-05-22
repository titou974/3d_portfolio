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
      "Travaux sur 6 applications webs au total sur les 3 mois de stage",
    ],
  },
  {
    title: "Stage de 6 mois - Développeur Front-end",
    company_name: "Kessel Media",
    icon: kessel,
    iconBg: "white",
    date: "Novembre 2023 - Mai 2024",
    points: [
      "Apprentissage des bonnes pratiques pour construire une application scalable",
      "Développement et maintenance d'une application web utilisée par plus de 500 000 utilisateurs",
      "Maîtrise de Vue.js et du framework Nuxt 3",
    ],
  },
  {
    title: "Freelance Développeur Front-end",
    company_name: "Auto-Entrepreneur",
    icon: kessel,
    iconBg: "white",
    date: "Mai 2024 - Août 2024",
    points: [
      "Développement de la nouvelle version du parcours d'abonnement des utilisateurs",
      "Refonte des pages articles",
      "Maintenance du CMS et mise à jour du dashboard des auteurs",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Auto-Entrepreneur",
    icon: titouan,
    iconBg: "#5d78f9",
    date: "Novembre 2023 - Aujourd'hui",
    points: [
      "Développement de Nestor App en projet entreprenarial dans le framework Next JS, gestion de toute la partie informatique sur le projet start-up.",
      "Travaux sur Cityrent en Vanilla JS (application de location de véhicules) : développement de nouvelles fonctionnalités, maintenance et optimisation de l'application",
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
    name: "Cherry, le tinder du 🍑",
    description:
      "Cherry part d’un défi que mes amis m’ont lancé à l’été 2024 : créer un Tinder du 🍑. Construit de A à Z en fullstack, avec un frontend et un backend séparés, une intégration de paiement et un système d’abonnement, c’est mon premier réseau social abouti. Une partie des utilisateurs créés dessus sont virtuels et basés sur l’API d’OpenAI pour interagir avec l’utilisateur.",
    tags: [
      {
        name: "Frontend Nextjs 15",
        color: "blue-text-gradient",
      },
      {
        name: "Backend Express js (Nodejs)",
        color: "green-text-gradient",
      },
      {
        name: "Intégration de Paiement CCBill",
        color: "pink-text-gradient",
      },
    ],
    image: cherryWebsite,
    inprocess: false,
    website_link: "https://www.cherryflirt.com",
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
  description: "Vous pouvez me proposez votre projet/mission sur Malt",
  image: maltLogo,
};

export { services, technologies, experiences, projects, aboutSection, malt };
