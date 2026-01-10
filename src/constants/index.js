import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  rails,
  postgresql,
  referralsafe,
  taskcompletor,
  nestorapp,
  innovans,
  titouan,
  kessel,
  kesselmedia,
  maltLogo,
  wedivepreview,
  kesselmediaLaptop,
  kesselmediaPhone,
  kesselmedia2Laptop,
  kesselmedia2Phone,
  wediveLaptop,
  nestorPhone,
  jobquest,
  contributeToIdeas,
} from "../assets";

// Navigation links with translation keys
export const navLinks = [
  {
    id: "work",
    titleKey: "nav.work",
  },
  {
    id: "experiences",
    titleKey: "nav.experiences",
  },
  {
    id: "contact",
    titleKey: "nav.contact",
  },
];

const services = [];

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

// Experiences with translation keys
export const experiences = [
  {
    id: 1,
    posKey: "experiences.innovans.position",
    name: "Innovans",
    icon: innovans,
    phonePreview: jobquest,
    laptopPreview: contributeToIdeas,
    durationKey: "experiences.innovans.duration",
    titleKey: "experiences.innovans.title",
    animation: "fight",
    testimonial: {
      authorKey: "experiences.innovans.testimonial.author",
      textKey: "experiences.innovans.testimonial.text",
    },
    skills: [
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    id: 2,
    posKey: "experiences.kesselStage.position",
    name: "Kessel Media",
    phonePreview: kesselmediaPhone,
    laptopPreview: kesselmediaLaptop,
    icon: kessel,
    durationKey: "experiences.kesselStage.duration",
    titleKey: "experiences.kesselStage.title",
    animation: "burpee",
    testimonial: {
      authorKey: "experiences.kesselStage.testimonial.author",
      textKey: "experiences.kesselStage.testimonial.text",
    },
    skills: [
      { name: "Nuxt 3", level: 90 },
      { name: "Vue 2 & Vue 3", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CMS", level: 80 },
    ],
  },
  {
    id: 3,
    posKey: "experiences.kesselFreelance.position",
    name: "Kessel Media",
    icon: kessel,
    phonePreview: kesselmedia2Phone,
    laptopPreview: kesselmedia2Laptop,
    durationKey: "experiences.kesselFreelance.duration",
    titleKey: "experiences.kesselFreelance.title",
    animation: "workingOnDevice",
    testimonial: {
      authorKey: "experiences.kesselFreelance.testimonial.author",
      textKey: "experiences.kesselFreelance.testimonial.text",
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
    posKey: "experiences.autoEntrepreneur.position",
    name: "Auto-Entrepreneur",
    icon: titouan,
    phonePreview: nestorPhone,
    laptopPreview: wediveLaptop,
    durationKey: "experiences.autoEntrepreneur.duration",
    titleKey: "experiences.autoEntrepreneur.title",
    animation: "rumbaDancing",
    testimonial: {
      authorKey: "experiences.autoEntrepreneur.testimonial.author",
      textKey: "experiences.autoEntrepreneur.testimonial.text",
    },
    skills: [
      { name: "Next.js 13-16", level: 100 },
      { name: "Node.js", level: 88 },
      { name: "Flutter", level: 85 },
      { name: "Supabase, Mango DB, AWS", level: 90 },
    ],
  },
];

// Projects with translation keys
export const projects = [
  {
    nameKey: "projects.wedive.name",
    descriptionKey: "projects.wedive.description",
    tags: [
      {
        nameKey: "tags.flutter",
        color: "blue-text-gradient",
      },
      {
        nameKey: "tags.firebase",
        color: "green-text-gradient",
      },
    ],
    image: wedivepreview,
    inprocess: true,
    inProcessLabelKey: "projects.wedive.inProcessLabel",
  },
  {
    nameKey: "projects.kesselMedia.name",
    descriptionKey: "projects.kesselMedia.description",
    tags: [
      {
        nameKey: "tags.nuxt3",
        color: "blue-text-gradient",
      },
      {
        nameKey: "tags.typescript",
        color: "green-text-gradient",
      },
      {
        nameKey: "tags.cms",
        color: "pink-text-gradient",
      },
    ],
    image: kesselmedia,
    inprocess: false,
    website_link: "https://www.kessel.media/",
  },
  {
    nameKey: "projects.nestorApp.name",
    descriptionKey: "projects.nestorApp.description",
    tags: [
      {
        nameKey: "tags.nextjs",
        color: "blue-text-gradient",
      },
      {
        nameKey: "tags.nodejs",
        color: "green-text-gradient",
      },
      {
        nameKey: "tags.supabase",
        color: "pink-text-gradient",
      },
    ],
    image: nestorapp,
    inprocess: false,
    source_code_link: "https://github.com/titou974/valetappv1",
    website_link: "https://valetappv1.vercel.app/",
  },
  {
    nameKey: "projects.taskCompletor.name",
    descriptionKey: "projects.taskCompletor.description",
    tags: [
      {
        nameKey: "tags.nextjs",
        color: "blue-text-gradient",
      },
      {
        nameKey: "tags.nodejs",
        color: "green-text-gradient",
      },
      {
        nameKey: "tags.gpt4api",
        color: "pink-text-gradient",
      },
    ],
    image: taskcompletor,
    inprocess: false,
    source_code_link: "https://github.com/titou974/taskcompletor",
    website_link: "https://www.taskcompletor.app/",
  },
  {
    nameKey: "projects.referralSafe.name",
    descriptionKey: "projects.referralSafe.description",
    tags: [
      {
        nameKey: "tags.rails",
        color: "blue-text-gradient",
      },
      {
        nameKey: "tags.postgresql",
        color: "green-text-gradient",
      },
      {
        nameKey: "tags.stimulusjs",
        color: "pink-text-gradient",
      },
    ],
    image: referralsafe,
    source_code_link: "https://github.com/titou974/referral-safe",
    website_link: "https://referralsafeapp-156a896d1d00.herokuapp.com/",
  },
];

// About section with translation keys
export const aboutSection = {
  subtitleKey: "about.subtitle",
  titleKey: "about.title",
};

// Malt with translation keys
export const malt = {
  subtitleKey: "malt.subtitle",
  titleKey: "malt.title",
  descriptionKey: "malt.description",
  image: maltLogo,
};

export const socialsLinks = {
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

export { services, technologies };
