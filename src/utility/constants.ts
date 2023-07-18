import css from "../assets/css.png";
import cpp from "../assets/cpp.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import flutter from "../assets/flutter.png";
import graphql from "../assets/graphql.png";
import express from "../assets/express.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import { NavLink } from "../interfaces/nav-link";
import typescript from "../assets/typescript.png";
import javascript from "../assets/javascript.png";
import { Techstack } from "../interfaces/techstack";

export const navLinks: NavLink[] = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
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
