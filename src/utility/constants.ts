import { Project } from '../interfaces/project';
import { NavLink } from '../interfaces/nav-link';
import { Techstack } from '../interfaces/techstack';
import { LifePhase } from '../interfaces/work-experience';

import css from '../assets/skills/css.png';
import cpp from '../assets/skills/cpp.png';
import rtl from '../assets/skills/rtl.png';
import html from '../assets/skills/html.png';
import node from '../assets/skills/node.png';
import jest from '../assets/skills/jest.png';
import nextjs from '../assets/skills/nextjs.png';
import github from '../assets/skills/github.png';
import flutter from '../assets/skills/flutter.png';
import graphql from '../assets/skills/graphql.png';
import express from '../assets/skills/express.png';
import reactImage from '../assets/skills/react.png';
import tailwind from '../assets/skills/tailwind.png';
// import photoApp from "../assets/projects/photo-app.png";
import shery from '../assets/projects/shery.png';
import typescript from '../assets/skills/typescript.png';
import javascript from '../assets/skills/javascript.png';

import drawpad from '../assets/projects/drawpad.png';
import portfolio from '../assets/projects/portfolio.png';
import animations from '../assets/projects/animations.png';
import nextjsAuth from '../assets/projects/nextjs-auth.png';
import timelessLens from '../assets/projects/timelesslens.png';

export const navLinks: NavLink[] = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'projects' },
  { id: 4, link: 'journey' },
  { id: 5, link: 'skills' },
  { id: 6, link: 'contact' },
];

export const techs: Techstack[] = [
  {
    id: 0,
    src: reactImage,
    title: 'React',
    style: 'shadow-[#00D8FE]',
    docs: 'https://react.dev/learn',
  },
  {
    id: 1,
    src: nextjs,
    title: 'Next.js',
    style: 'shadow-white',
    docs: 'https://nextjs.org/docs/app',
  },
  {
    id: 2,
    src: typescript,
    title: 'Typescript',
    style: 'shadow-[#2D79C7]',
    docs: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 3,
    src: javascript,
    title: 'JavaScript',
    style: 'shadow-[#FFD600]',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 4,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 5,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 6,
    src: tailwind,
    title: 'Tailwind',
    style: 'shadow-sky-400',
    docs: 'https://tailwindcss.com/docs/installation',
  },
  {
    id: 7,
    src: jest,
    title: 'Jest',
    style: 'shadow-[#a0444c]',
    docs: 'https://jestjs.io/docs/getting-started',
  },
  {
    id: 8,
    src: rtl,
    title: 'React Testing Library',
    style: 'shadow-[#EF3C3B]',
    docs: 'https://testing-library.com/docs/react-testing-library/intro/',
  },
  {
    id: 9,
    src: flutter,
    title: 'Flutter',
    style: 'shadow-gray-300',
    docs: 'https://docs.flutter.dev/',
  },
  {
    id: 10,
    src: cpp,
    title: 'C++',
    style: 'shadow-[#659BD3]',
    docs: 'https://devdocs.io/cpp/',
  },
  {
    id: 11,
    src: github,
    title: 'GitHub',
    style: 'shadow-gray-400',
    docs: 'https://github.com/',
  },
  {
    id: 12,
    src: node,
    title: 'Node.js',
    style: 'shadow-[#90cc4c]',
    docs: 'https://nodejs.org/en/docs',
  },
  {
    id: 13,
    src: express,
    title: 'Express.js',
    style: 'shadow-gray-400',
    docs: 'https://expressjs.com/en/5x/api.html',
  },
  {
    id: 14,
    src: graphql,
    title: 'GraphQL',
    style: 'shadow-pink-400',
    docs: 'https://graphql.org/code/#javascript',
  },
];

export const lifePhases: LifePhase[] = [
  {
    id: 6,
    title: 'JULO',
    role: 'Software Engineer',
    start: 'Aug, 2023',
    end: 'Present',
    details: [
      {
        id: 1,
        point:
          'Headed the development of Julo Lite, a React-based PWA from scratch, resulting in a 20% increase in user migration from the Android application to the PWA, enhancing the overall user experience for the Indonesian customer base.',
      },
      {
        id: 2,
        point:
          'Collaborated with multiple squads as part of the App Engineering squad to develop and integrate over 12 webpages into the Android application’s webview, improving cross-team collaboration efficiency by 25%.',
      },
      {
        id: 3,
        point: 'Designed and implemented an internal Tagging Platform for the marketing team, accelerating tagging processes by 50%, enabling efficient customer, application, and loan tagging.',
      },
      {
        id: 4,
        point:
          'Successfully migrated the Grab Modal Domain from Create React App (CRA) to Vite React, reducing build times by 60% and improving runtime performance for over 10,000 active grab drivers.',
      },
      {
        id: 5,
        point: 'Improved UT coverage from 0% to 70% for critical components, leading to a 35% reduction in bugs and enhancing overall code stability.',
      },
      {
        id: 6,
        point: 'Authored comprehensive documentation for developers, streamlining development workflows.',
      },
      {
        id: 7,
        point: 'Conducted thorough code reviews, providing constructive feedback that led to a 20% increase in code quality and consistency across 6+ projects.',
      },
    ],
  },
  {
    id: 5,
    title: 'Innovaccer',
    role: 'SDE-1 Frontend',
    start: 'Feb, 2022',
    end: 'Jul, 2023',
    details: [
      {
        id: 1,
        point: 'Worked as a Frontend Developer for creating end-to-end features for the InCare product, leading to a 25% increase in user engagement and a 30% reduction in load times.',
      },
      {
        id: 2,
        point: 'Techstack - React, Typescript, Javascript, Redux, HTML, CSS, Styled-components.',
      },
      {
        id: 3,
        point: 'Developed a config-driven feature for Innovaccer that enabled the deployment of features to over 50,000 users based on feature flags, improving user personalization by 40%.',
      },
      {
        id: 4,
        point:
          'Involved in developing unit and end-to-end tests, increasing module coverage from 60% to 95% using Jest and Cypress, resulting in a 35% reduction in bugs and improved application stability.',
      },
      {
        id: 5,
        point: 'Performed refactoring of legacy code, which enhanced the existing product suite by improving performance by 20% and reducing technical debt by 50%.',
      },
    ],
  },
  {
    id: 4,
    title: 'Innovaccer',
    role: 'SDE Frontend Intern',
    end: 'July, 2021',
    start: 'May, 2021',
    details: [
      {
        id: 0,
        point: 'Created an end-to-end mobile application using Flutter.',
      },
      {
        id: 1,
        point: 'Completed UI Development and Backend Integration of the application.',
      },
      {
        id: 2,
        point: 'Exploited Local Storage in the application using Hive NoSQL database.',
      },
    ],
  },
  {
    id: 3,
    title: 'WYT Community',
    role: 'Flutter Intern',
    start: 'Jan, 2021',
    end: 'March, 2021',
    details: [
      {
        id: 0,
        point: 'Lead the End-to-end product strategy and Wireframing for MVP of a social media platform.',
      },
      {
        id: 1,
        point: 'Independently worked on the UI Development and Backend Integration of the MVP using Flutter, Provider, Dart.',
      },
    ],
  },
  {
    id: 2,
    title: 'Btech - CSE',
    start: '2018',
    end: '2022',
    details: [
      {
        id: 0,
        point: 'Jaypee Institute of Information Technology, Noida',
      },
      {
        id: 1,
        point: 'CGPA - 7.3',
      },
    ],
  },
  {
    id: 1,
    title: 'Class 12',
    start: '2016',
    end: '2017',
    details: [
      {
        id: 0,
        point: 'RRK Senior Secondary School, Chandausi',
      },
      {
        id: 1,
        point: 'Percentage - 91.6%',
      },
    ],
  },
  {
    id: 0,
    title: 'Class 10',
    start: '2014',
    end: '2015',
    details: [
      {
        id: 0,
        point: 'RRK Senior Secondary School, Chandausi',
      },
      {
        id: 1,
        point: 'CGPA - 10',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 5,
    src: drawpad,
    name: 'Drawpad',
    demoUrl: 'https://drawpad-lovat.vercel.app',
    codeUrl: 'https://github.com/ykji/drawpad',
  },

  {
    id: 0,
    src: portfolio,
    name: 'Personal Portfolio (React)',
    demoUrl: 'https://developer-portfolio-yash.vercel.app/',
    codeUrl: 'https://github.com/ykji/personal-portfolio',
  },
  {
    id: 6,
    src: shery,
    name: 'Shery Animations (Vannila)',
    demoUrl: 'https://shery-animations.vercel.app/',
    codeUrl: 'https://github.com/ykji/shery-animations',
  },
  {
    id: 4,
    src: animations,
    name: 'Cool Animations (CSS)',
    demoUrl: 'https://animations-seven-pi.vercel.app/',
    codeUrl: 'https://github.com/ykji/cool-animations',
  },
  {
    id: 3,
    src: timelessLens,
    name: 'Timeless Lens (Next.js, mongodb)',
    demoUrl: 'https://timeless-lens.vercel.app/',
    codeUrl: 'https://github.com/ykji/timeless-lens',
  },
  {
    id: 1,
    src: nextjsAuth,
    name: 'Next.js Auth',
    demoUrl: 'https://nextjs-auth-gules.vercel.app',
    codeUrl: 'https://github.com/ykji/nextjs-auth',
  },
  // {
  //   id: 2,
  //   src: photoApp,
  //   name: "Rick Morty Gallery",
  //   demoUrl:
  //     "https://drive.google.com/drive/u/2/folders/114y0xW_qZ_FGOI89kRSOXPLSEb1nJV0t",
  //   codeUrl: "https://github.com/ykji/photo-app",
  // },
];
