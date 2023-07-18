import css from "../assets/css.png";
import html from "../assets/html.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import { NavLink } from "../interfaces/nav-link";
import javascript from "../assets/javascript.png";
import { Techstack } from "../interfaces/techstack";

export const navLinks: NavLink[] = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "techstack" },
  { id: 6, link: "contact" },
];

export const techs: Techstack[] = [
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
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next JS",
    style: "shadow-white",
  },
  {
    id: 7,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 8,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
];
