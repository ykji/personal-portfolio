import css from "../assets/skills/css.png";
import cpp from "../assets/skills/cpp.png";
import html from "../assets/skills/html.png";
import node from "../assets/skills/node.png";
import { Project } from "../interfaces/project";
import nextjs from "../assets/skills/nextjs.png";
import github from "../assets/skills/github.png";
import { NavLink } from "../interfaces/nav-link";
import flutter from "../assets/skills/flutter.png";
import graphql from "../assets/skills/graphql.png";
import express from "../assets/skills/express.png";
import { Techstack } from "../interfaces/techstack";
import reactImage from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import typescript from "../assets/skills/typescript.png";
import javascript from "../assets/skills/javascript.png";
import portfolio from "../assets/projects/portfolio.png";
import { LifePhase } from "../interfaces/work-experience";

export const navLinks: NavLink[] = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "projects" },
  { id: 4, link: "journey" },
  { id: 5, link: "skills" },
  { id: 6, link: "contact" },
];

export const techs: Techstack[] = [
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next.js",
    style: "shadow-white",
  },
  {
    id: 11,
    src: typescript,
    title: "Typescript",
    style: "shadow-blue-300",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 12,
    src: flutter,
    title: "Flutter",
    style: "shadow-gray-300",
  },
  {
    id: 13,
    src: cpp,
    title: "C++",
    style: "shadow-cyan-300",
  },
  {
    id: 7,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 8,
    src: node,
    title: "Node.js",
    style: "shadow-green-400",
  },
  {
    id: 9,
    src: express,
    title: "Express.js",
    style: "shadow-gray-400",
  },
  {
    id: 10,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
];

export const lifePhases: LifePhase[] = [
  {
    id: 0,
    title: "Innovaccer",
    role: "SDE-1 Frontend",
    start: "Feb, 2022",
    end: "Present",
    details: [
      {
        id: 0,
        point:
          "Worked for InCare product. InCare is developed for care manager persona in the healthcare supply chain ecosystem.",
      },
      {
        id: 1,
        point:
          "Built high-quality, clean, scalable and reusable code with React, Redux, Javascript and Typescript.",
      },
      {
        id: 2,
        point:
          "Involved in developing unit and end-to-end tests and increasing module coverage to 95% using Jest and Cypress.",
      },
      {
        id: 3,
        point:
          "Handled analytics to measure user engagement and retention using Mixpanel.",
      },
      {
        id: 4,
        point:
          "Performed refactoring of code thereby delivering continuous improvement and enhancing the existing product suite.",
      },
      {
        id: 5,
        point:
          "Improved page speed and reduced latency by designing a smaller response payload and executing APIs in batches.",
      },
      {
        id: 6,
        point:
          "Worked closely with the Product Owners and Designers for the requirements and own the code from implementation.",
      },
      { id: 7, point: "Reviewing code for Interns and Associates" },
    ],
  },
  {
    id: 1,
    title: "Innovaccer",
    role: "SDE Frontend Intern",
    end: "July, 2021",
    start: "May, 2021",
    details: [
      {
        id: 0,
        point: "Created an end-to-end mobile application using Flutter.",
      },
      {
        id: 1,
        point:
          "Completed UI Development and Backend Integration of the application.",
      },
      {
        id: 2,
        point:
          "Exploited Local Storage in the application using Hive NoSQL database.",
      },
    ],
  },
  {
    id: 2,
    title: "WYT Community",
    role: "Flutter Intern",
    start: "Jan, 2021",
    end: "March, 2021",
    details: [
      {
        id: 0,
        point:
          "Lead the End-to-end product strategy and Wireframing for MVP of a social media platform.",
      },
      {
        id: 1,
        point:
          "Independently worked on the UI Development and Backend Integration of the MVP using Flutter, Provider, Dart.",
      },
    ],
  },
  {
    id: 3,
    title: "Btech - CSE",
    start: "2022",
    end: "2018",
    details: [
      {
        id: 0,
        point: "Jaypee Institute of Information Technology, Noida",
      },
      {
        id: 1,
        point: "CGPA - 7.3",
      },
    ],
  },
  {
    id: 4,
    title: "Class 12",
    start: "2016",
    end: "2017",
    details: [
      {
        id: 0,
        point: "RRK Senior Secondary School, Chandausi",
      },
      {
        id: 1,
        point: "Percentage - 91.6%",
      },
    ],
  },
  {
    id: 5,
    title: "Class 10",
    start: "2014",
    end: "2015",
    details: [
      {
        id: 0,
        point: "RRK Senior Secondary School, Chandausi",
      },
      {
        id: 1,
        point: "CGPA - 10",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    src: portfolio,
    name: "Personal Portfolio",
    demoUrl: "https://developer-portfolio-yash.vercel.app/",
    codeUrl: "https://github.com/ykji/personal-portfolio",
  },
];
