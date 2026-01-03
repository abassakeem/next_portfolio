import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiThreedotjs,
  SiPython,
  SiAmazon,
  SiSelenium,
  SiCypress,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const projectsSE: {
  id: number;
  title: string;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Apple 3D Clone",
    image: "/projects/apple.png",
    description:
      "A high-fidelity 3D immersive experience leveraging React, Three.js (WebGL), and GSAP. Focused on complex model orchestration, custom shaders, and fluid scroll-based animations.",
  },
  {
    id: 2,
    title: "BU-Power Utility",
    image: "/projects/bupower.png",
    description:
      "An enterprise-grade utility platform for electricity management. Features secure payment gateway integration, real-time usage analytics, and an optimized dashboard built with Next.js.",
  },
  {
    id: 3,
    title: "GetLinked Hackathon",
    image: "/projects/getlinked.png",
    description:
      "A collaborative platform for tech innovators. Implemented complex state-managed forms, dynamic countdown systems, and a fully responsive architectural design for high-traffic events.",
  },
  {
    id: 4,
    title: "PastQuest Education",
    image: "/projects/pastquest.png",
    description:
      "A data-centric educational resource hub. Focused on lightning-fast search indexing, optimized database queries (PostgreSQL), and a seamless UI for navigating large academic archives.",
  },
  {
    id: 5,
    title: "Intuitive Guess Logic",
    image: "/projects/guess.png",
    description:
      "A logic-based interactive application built with TypeScript. Used to demonstrate advanced state machine principles, DOM manipulation, and efficient algorithmic processing.",
  },
];
const projectsQA = [
  {
    id: 1,
    title: "PastQuest QA Framework",
    image: "/projects/pastquest.png", 
    description: "Developed 200+ automated tests across UI and API flows. Conducted JMeter performance testing for 1,000+ concurrent users, successfully reducing system response time by 35%.",
    keywords: ["Cypress", "JMeter", "Lighthouse", "Performance"],
    url: "https://pastquestabass.netlify.app/"
  },
  {
    id: 2,
    title: "Lezada E2E Strategy",
    image: "/projects/lezada.png",
    description: "Architected an end-to-end testing strategy for a scalable eCommerce platform, covering 300+ scenarios including Stripe payment processing and secure authentication.",
    keywords: ["Playwright", "Postman", "SQL", "Stripe API"],
    url: "https://Lezadashopping.app"
  },
  {
    id: 3,
    title: "BU-Power Security QA",
    image: "/projects/bupower.png",
    description: "Conducted rigorous security testing and payment gateway validation for a utility system, ensuring PCI compliance and 100% secure transaction integrity.",
    keywords: ["UAT", "SIT", "Security", "PCI Compliance"],
    url: "https://github.com/abassakeem/BabcockPower"
  },
  {
    id: 4,
    title: "Settul QA Automation",
    image: "/projects/settul.png",
    description: "Developed a comprehensive QA automation suite for a logistics platform, integrating API testing with real-time monitoring and alerting.",
    keywords: ["Cypress", "Postman", "Docker", "Kubernetes"],
    url: "https://github.com/abassakeem/SettulQA"
  }
];

export const portfolioData = {
  developer: {
    role: "Software Engineer",
    heroTitle: "Creative\nDeveloper",
    heroImage: "/cheats.gif",
    description:
      "Building high-performance digital solutions that bridge the gap between enterprise security and intuitive design.",
    skills: [
      { name: "React / Next.js", color: "#61DAFB", icon: SiReact },
      { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
      { name: "Node.js", color: "#339933", icon: SiNodedotjs },
      { name: "Three.js", color: "#FFFFFF", icon: SiThreedotjs },
      { name: "AWS / DevOps", color: "#FF9900", icon: SiAmazon },
    ],
    projects: projectsSE,
    about: {
      bio: "A Computer Science graduate from Babcock University, I am a Software Engineer bridging the gap between rigorous enterprise security and fluid, modern user interfaces.",
      skills: [
        { name: "React / Next.js", color: "#61DAFB", icon: SiReact },
        { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
        { name: "Node.js", color: "#339933", icon: SiNodedotjs },
        { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
        { name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql },
        { name: "Three.js", color: "#FFFFFF", icon: SiThreedotjs },
        { name: "Python", color: "#3776AB", icon: SiPython },
        { name: "AWS / DevOps", color: "#FF9900", icon: SiAmazon },
      ],
    },
  },
  qa: {
    role: "Quality Engineer",
    heroTitle: "Quality\nArchitect",
    heroImage: "/qa-cheats.gif",
    description:
      "Ensuring digital integrity through automated testing, vulnerability assessments, and CBN-compliant security protocols.",
    skills: [
      { name: "Automated Testing", color: "#C21325", icon: SiSelenium },
      { name: "Cypress / E2E", color: "#17202C", icon: SiCypress },
      { name: "Security Audits", color: "#000000", icon: MdSecurity },
      { name: "Jest / Unit", color: "#C21325", icon: SiJest },
      { name: "ISTQB Standards", color: "#E24E1B", icon: SiTestinglibrary },
    ],
    projects: projectsQA,
    about: {
      bio: "As a Quality Engineer, I specialize in end-to-end automation and security compliance. I ensure software resilience through rigorous testing frameworks and vulnerability assessments.",
      skills: [
        { name: "Selenium", color: "#43B02A", icon: SiSelenium },
        { name: "Cypress", color: "#17202C", icon: SiCypress },
        { name: "Jest", color: "#C21325", icon: SiJest },
        { name: "Manual Testing", color: "#E24E1B", icon: SiTestinglibrary },
        { name: "Node.js", color: "#339933", icon: SiNodedotjs },
        { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
        { name: "Python", color: "#3776AB", icon: SiPython },
        { name: "API Testing", color: "#FF9900", icon: SiAmazon },
      ],
    },
  },
};
