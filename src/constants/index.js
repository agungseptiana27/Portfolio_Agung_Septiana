import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Kunci,
  jabar,
  masjid,
  starbucks,
  tesla,
  shopify,
  desaverse,
  holy,
  pemotda,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile App Developer",
    company_name: "PT Kunci Transformasi Digital",
    icon: Kunci,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Develop and maintain a mobile application for tourism promotion using Flutter, with gallery features, user authentication, and custom layouts.",
      "CImplemented BLoC for state management, improving performance and maintainability of the application.",
      "Integrated APIs for real-time data synchronization with cloud solutions, optimizing content delivery to users.",
      "Collaborated with design teams and product managers to ensure a seamless user experience.",
    ],
  },
  {
    title: "Flutter Developer Holy Al-Qur'an",
    company_name: "DKM Masjid Ulul Albaab",
    icon: masjid,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developed a Quran application using GetX for easy navigation and state management, providing Quran recitation and tafsir features.",
      "Optimized application performance with responsive and user-friendly design, used by university students for religious learning.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PEMOTDA Jawa Barat",
    icon: jabar,
    iconBg: "#383E56",
    date: "Jan 2022 - jun 2022",
    points: [
      "Building a web-based dashboard using laravel and filament",
      "Create requirements in accordance with functional user features consisting of, archives in and out of land and manage users.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "DESAVERSE",
    description:
      "Desaverse is a mobile application that promotes villages both in terms of culinary and tourist attractions that contain galleries, VODs and articles.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Rest-API",
        color: "green-text-gradient",
      },
      {
        name: "BLoC",
        color: "pink-text-gradient",
      },
    ],
    image: desaverse,
    source_code_link:
      "https://github.com/agungseptiana27/Desaverse_Mobile_Final",
  },
  {
    name: "Holy Al-Qur'an",
    description:
      "Holy AL-Qur'an is a mobile application for reading the Koran which is equipped with bookmarks, juz, and surah features.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "GetX",
        color: "pink-text-gradient",
      },
    ],
    image: holy,
    source_code_link: "https://github.com/agungseptiana27/Holy_AlQuran",
  },
  {
    name: "PEMOTDA",
    description:
      "Pemotda Web is a web with land archiving in jawabarat, with various activities to manage land in jawabarat with outgoing archive features and manage users.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: pemotda,
    source_code_link:
      "https://github.com/agungseptiana27/TA_Arsip_Pertanahan_Pemotda",
  },
];

export { services, technologies, experiences, testimonials, projects };
