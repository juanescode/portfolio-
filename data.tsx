import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  SquareTerminal,
  BookText,
  Briefcase,
  Brush,
  GitBranchIcon,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experience",
    icon: <Briefcase />,
    description: "+1 year of experience in web development",
  },
  {
    id: 2,
    name: "Clients",
    icon: <UsersRound />,
    description: "+11 satisfied clients",
  },
  {
    id: 3,
    name: "Projects",
    icon: <Wrench />,
    description: "+23 completed projects",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Home",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/programar.jpg",
  },
  {
    id: 2,
    url: "/futbol.jpg",
  },
  {
    id: 3,
    url: "/canal.jfif",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development",
    experience: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "React",
      },
      {
        name: "Nextjs",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development  🥷",
    experience: [
      {
        name: "Node JS",
      },
      {
        name: "Mongo DB",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "MySQL",
      },
      {
        name: "Typescript",
      },
      {
        name: "Express JS",
      },
    ],
  },
  {
    id: 3,
    title: "Tools",
    experience: [
      {
        name: "Git",
      },
      {
        name: "VSCode",
      },
      {
        name: "Figma",
      },
      {
        name: "Postman",
      },
      {
        name: "Docker",
      },
      {
        name: "AWS",
      },
    ],
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "ScanOrderly",
    image: "/scanOrderly.png",
    urlDemo: "https://scanviking.netlify.app/",
  },
  {
    id: 2,
    title: "Landing Page ScanOrderly",
    image: "/landinpage.png",
    urlDemo: "https://scan-orderly.vercel.app/",
  },
  {
    id: 3,
    title: "The viking room",
    image: "/vikingroom.png",
    urlDemo: "https://viking-room.netlify.app/",
  },
  {
    id: 4,
    title: "Dashboard companies",
    image: "/darhboard.png",
    urlDemo: "https://dashboard-companies-juanescode.netlify.app/",
  },
  {
    id: 5,
    title: "Random password auth",
    image: "/passwordp.png",
    urlDemo:
      "https://password-generate-lzrh2jefp-juanescodes-projects.vercel.app/",
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Web development",
    icon: <PanelsTopLeft />,
    features: [
      {
        name: "React Development implementing dynamic interfaces with reusable components and efficient state management.",
      },
      {
        name: "Optimization with Next.js for faster loading.",
      },
      {
        name: "Styling with Tailwind CSS to obtain modern utility-first styles for rapid development.",
      },
      {
        name: "JavaScript Programming for all business logic and user interaction in robust web applications.",
      },
      {
        name: "API Integration & State Management using API connections and ensuring application consistency.",
      },
      {
        name: "Social Media Login Integration for Your Web Applications",
      },
      {
        name: "Continuous Maintenance and Support",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <SquareTerminal />,
    features: [
      {
        name: "Developing backend applications using Node.js for building fast and scalable solutions.",
      },
      {
        name: "Implementing TypeScript to enhance code quality and type safety in backend development.",
      },
      {
        name: "Designing and developing efficient and robust RESTful APIs for seamless communication between services.",
      },
      {
        name: "Managing and optimizing relational databases like PostgreSQL and MySQL, as well as NoSQL databases like MongoDB.",
      },
      {
        name: "Deploying web applications on modern platforms to ensure accessibility, reliability, and performance.",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <Brush />,
    features: [
      {
        name: "Intuitive Design for a Seamless User Experience",
      },
      {
        name: "Interactive Prototyping to Visualize the Interface",
      },
      {
        name: "User Research to Understand Needs and Expectations",
      },
      {
        name: "Usability Optimization to Enhance Accessibility",
      },
      {
        name: "Usability Testing to Evaluate the Experience",
      },
      {
        name: "Responsive Design to Adapt to Different Devices",
      },
      {
        name: "Information Architecture to Organize Content",
      },
      {
        name: "Visual Design to Create Aesthetic Appeal",
      },
      {
        name: "Interaction Design to Define User Interactions",
      },
      {
        name: "Typography to Enhance Readability and Color Theory to Create Visual Harmony",
      },
    ],
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+57 3206233559",
    link: "tel:+573206233559",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/juanescode",
    link: "https://github.com/juanescode",
    icon: <GitBranchIcon />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "juanestebanvilladagallego23@gmail.com",
    link: "mailto:juanestebanvilladagallego23@gmail.com",
    icon: <Inbox />,
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "Universidad libre ",
    description:
      "I am a 4th-year (8th semester) student of Systems Engineering, currently focused on acquiring deep knowledge in software development, system architecture, and emerging technologies. My university education has provided me with a solid foundation in programming, algorithms, databases, and system design, while my passion for technology drives me to constantly explore new tools and methodologies in the field of computer science. I am seeking opportunities to apply my skills in challenging projects that allow me to grow both professionally and personally",
    imageUrl: "unilibre.png",
  },
  {
    id: 2,
    name: "ScanOrderly",
    description:
      "ScanOrderly is a project I am developing with a friend. It is a management software for restaurants, bars, hotels, etc., that optimizes operations, from real-time order management to inventory control and detailed analysis of sales and expenses. With an intuitive interface and the ability to generate real-time reports, it allows owners to make informed decisions, helping to increase operational efficiency and business profitability.",
    imageUrl: "/ScanOrderlyL.png",
  },
  {
    id: 3,
    name: "Viking room",
    description:
      "The viking room, I developed the first functional prototype of an application that served as a virtual menu. Customers could access the menu by scanning a QR code, and it also included an admin panel where authorized accounts could add, publish, or unpublish products visible to customers. This experience was key, as it served as the inspiration for developing ScanOrderly, taking the initial ideas to a more advanced level of management and operational optimization.",
    imageUrl: "/viking.jpg",
  },
  {
    id: 4,
    name: "Ingaj",
    description:
      "Ingaj is a construction company established in the city of Pereira, specializing in infrastructure projects and civil works development. During my time with Ingaj, I contributed to the development of a custom application for managing and controlling material costs and inventories. This application was designed to optimize the tracking of resources used in the various stages of construction, allowing for precise monitoring of the flow of materials, from acquisition to their use on each project. Additionally, the tool provided detailed reports on associated costs, facilitating informed decision-making and improving budget management efficiency.",
    imageUrl: "/ingaj.jpeg",
  },
];
