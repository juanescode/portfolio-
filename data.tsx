import { SquareTerminal, BookText, Briefcase, Brush, GitBranchIcon,CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

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
    // {
    //     id: 4,
    //     title: "Target",
    //     icon: <CodeSquare size={20} />,
    //     link: "#portfolio",
    // },
    {
        id: 5,
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
]


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development",
        experience: [
            {
                name: "HTML",
                subtitle: "intermediate",
                value: 60,
            },
            {
                name: "CSS",
                subtitle: "intermediate",
                value: 40,
            },
            {
                name: "JavaScript",
                subtitle: "intermediate",
                value: 70,
            },
            {
                name: "Tailwind CSS",
                subtitle: "intermediate",
                value: 40,
            },
            {
                name: "React",
                subtitle: "Experienced",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Experienced",
                value: 90,
            },
            {
                name: "Mongo DB",
                subtitle: "intermediate",
                value: 65,
            },
            {
                name: "PostgreSQL",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "MySQL",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "Typescript",
                subtitle: "Experienced",
                value: 75,
            },
            {
                name: "Express JS",
                subtitle: "Experienced",
                value: 80,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Web development",
        icon: <PanelsTopLeft />,
        features: [
            {
                "name": "React Development implementing dynamic interfaces with reusable components and efficient state management."
            },
            {
                "name": "Optimization with Next.js for faster loading."
            },
            {
                "name": "Styling with Tailwind CSS to obtain modern utility-first styles for rapid development."
            },
            {
                "name": "JavaScript Programming for all business logic and user interaction in robust web applications."
            },
            {
                "name": "API Integration & State Management using API connections and ensuring application consistency."
            },
            {
                "name": "Social Media Login Integration for Your Web Applications"
            },
            {
                "name": "Continuous Maintenance and Support"
            }
        ],        
    },
    {
        id: 2,
        title: "Backend Development",
        icon: <SquareTerminal />,
        features: [
            {
                "name": "Developing backend applications using Node.js for building fast and scalable solutions."
            },
            {
                "name": "Implementing TypeScript to enhance code quality and type safety in backend development."
            },
            {
                "name": "Designing and developing efficient and robust RESTful APIs for seamless communication between services."
            },
            {
                "name": "Managing and optimizing relational databases like PostgreSQL and MySQL, as well as NoSQL databases like MongoDB."
            },
            {
                "name": "Deploying web applications on modern platforms to ensure accessibility, reliability, and performance."
            }
            
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                "name": "Intuitive Design for a Seamless User Experience"
            },
            {
                "name": "Interactive Prototyping to Visualize the Interface"
            },
            {
                "name": "User Research to Understand Needs and Expectations"
            },
            {
                "name": "Usability Optimization to Enhance Accessibility"
            },
            {
                "name": "Usability Testing to Evaluate the Experience"
            },
            {
                "name": "Responsive Design to Adapt to Different Devices"
            }
            
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
        name: "Ingaj",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "/ingaj.jpeg",
    },
    {
        id: 3,
        name: "lorem",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "/viking.jpg",
    },
    {
        id: 4,
        name: "Viking room",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "/viking.jpg",
    },
];