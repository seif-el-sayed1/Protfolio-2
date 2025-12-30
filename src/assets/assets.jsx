import nextjs from './nextjs.svg'
import react from './react.svg'
import typescript from './typescript.svg'
import javascript from './javascript.svg'
import tailwind from './tailwind.svg'
import bootstrap from './bootstrap.svg'
import css from './css.svg'
import html from './html.svg'
import node from './node.svg'
import express from './express.svg'
import mongo from './mongo.svg'
import git from './git.svg'
import gitHub from './gitHub.svg'
import python from './python.svg'
import jwt from './jwt.svg'
import firebase from './firebase.svg'
import hotelBooking from './hotelBooking.webp'
import foodOrdering from './foodOrdering.webp'
import authentication from './authentication.webp'
import eCommerce from './eCommerce.webp' 
import crudSystem from './crudSystem.webp'
import dashboard from './dashboard.webp'
import landingPage from './landingPage.webp'
import weatherApp from './weatherApp.webp'
import techZone from './techZone.webp'
import oneFurever from './oneFurever.webp'
import greenZone from './greenZone.webp'
import stadiumEye from './stadiumEye.webp'

export const assets = {
    nextjs,
    react,
    typescript,
    javascript,
    tailwind,
    bootstrap,
    css,
    html,
    node,
    express,
    mongo,
    git,
    gitHub,
    python,
    jwt,
    firebase,
    hotelBooking,
    foodOrdering,    
    authentication,
    eCommerce,
    crudSystem,
    dashboard,
    landingPage,
    weatherApp,
    techZone,
    oneFurever,
    greenZone,
    stadiumEye
}

export const projects = [
    {
        id: 1,
        title: "Landing Page",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Responsive Landing Page with HTML and CSS",
        image: assets.landingPage,
        skills: [assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/project_2_HTML-CSS",
        link: "https://seif1.netlify.app/",
        demo: ""
    },
    {
        id: 2,
        title: "Dashboard",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Responsive Dashboard Website Dashboard, Profile, Setting and Project Sections",
        image: assets.dashboard,
        skills: [assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/project_3_HTML-CSS",
        link: "https://wheatherseif.netlify.app/",
        demo: ""
    },
    {
        id: 3,
        title: "Weather App",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "This project fetches real-time weather data from an API and displays it in a user-friendly interface, allowing users to search for weather information by city.",
        image: assets.weatherApp,
        skills: [assets.javascript, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/Weather-app",
        link: "https://wheatherseif.netlify.app/",
        demo: ""
    },
    {
        id: 4,
        title: "CRUD System",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "This project implements a simple CRUD (Create, Read, Update, Delete) system for managing user data with a user-friendly interface.",
        image: assets.crudSystem,
        skills: [assets.javascript, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/CRUD-system",
        link: "https://crud-seif.netlify.app/",
        demo: ""
    },
    {
        id: 5,
        title: "E-commerce Website",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "This project features a complete e-commerce solution with user authentication, product browsing, and cart management.",
        image: assets.eCommerce,
        skills: [assets.react, assets.javascript, assets.bootstrap, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/E-Commerce-Project",
        link: "https://seifstore.netlify.app/",
        demo: "https://drive.google.com/file/d/1iOfnRHO2fDgg6p4PkND5hmv3frvptE6G/view"
    },
    {
        id: 6,
        title: "Authentication System",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Secure user authentication system with JWT, password hashing, email verification, and reset password functionality. Includes user registration, login, and profile management.",
        image: assets.authentication,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.bootstrap, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/Authentication-System",
        link: "",
        demo: "https://drive.google.com/file/d/1p-lKUyuLDfGe_eg07P4Dg4iMIB-rqJFr/view"
    },
    {
        id: 7,
        title: "Food Ordering App",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Full-featured food ordering app with user authentication, admin panel for menu and order management, and a responsive interface for placing and tracking orders.",
        image: assets.foodOrdering,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.tailwind, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/food-ordering",
        link: "",
        demo: "https://drive.google.com/file/d/1eQKkVL4a3iiROa3WdLa8HOySwRmjPHUn/view"
    },
    {
        id: 8,
        title: "Hotel Booking App",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Hotel Booking App is a production-ready full-stack platform with user authentication, JWT-based secure login, OTP email verification, and email notifications to users. Includes room browsing with advanced filters, secure Stripe payment integration, and a dashboard for hotel owners to manage rooms, bookings, and track occupancy efficiently.",
        image: assets.hotelBooking,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt,  assets.tailwind, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/hotel-booking",
        link: "https://hotel-booking-frontend-sage.vercel.app/",
        demo: ""
    },
    {
        id: 9,
        title: "Tech Zone Project",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Tech Zone Project is a production-ready full-stack e-commerce platform featuring Google login, JWT-based protected routes, and a dynamic shopping cart. Includes email notifications to users, product search and filtering by price and category, secure Stripe payment integration, and an admin dashboard for managing products, users, and orders while tracking sales statistics. Fully responsive across all screen sizes.",
        image: assets.techZone,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.tailwind, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/Tech-Zone-E-Commerce-Project",
        link: "https://tech-zone-iota.vercel.app/",
        demo: "https://drive.google.com/file/d/1jPjVoeoPJV59Dvz1lREiKkXNyDNEe1-F/view?usp=drive_link"
    },
    {
        id: 10,
        title: "OneFurever Application",
        type: "Backend",
        contribution: true,
        repoPrivate: true,
        projectPrivate: false,
        inProgress: false,
        description: "OneFurever Application is a real-world platform connecting users with adoptable pets, helping manage adoptions and pet data efficiently. Backend system deployed in production with an admin panel for managing users and content. Includes role-based authorization for admins and users, secure JWT authentication, encrypted passwords, password recovery emails, Firebase integration for media storage, and robust REST APIs for seamless data interaction.",
        image: assets.oneFurever,
        skills: [assets.node, assets.express, assets.mongo, assets.javascript, assets.jwt, assets.firebase],
        github: "https://github.com/onefurever/oneFurever-BackEnd.git",
        link: "https://play.google.com/store/apps/details?id=com.neon.furreverapp",
        demo: ""
    },
    {
        id: 11,
        title: "Green Zone",
        type: "Backend",
        contribution: true,
        repoPrivate: true,
        projectPrivate: true,
        inProgress: true,
        description: "Green Zone is a private, client-only Farm Management System designed to manage multiple farms efficiently. Backend system with an admin panel for managing farms, workers, salaries, invoices, returns, and adding admins and engineers. Includes role-based authorization for different user types, secure JWT authentication, encrypted passwords, password recovery emails, Firebase integration for media storage, and robust REST APIs for seamless data interaction.",
        image: assets.greenZone,
        skills: [assets.node, assets.express, assets.mongo, assets.javascript, assets.jwt, assets.firebase],
        github: "https://github.com/kirollosrafik98/GreenZone-BackEnd.git",
        link: "PRIVATE",
        demo: ""
    },
    {
        id: 13,
        title: "Stadium Eye",
        type: "Backend",
        contribution: false,
        repoPrivate: true,
        projectPrivate: false,
        inProgress: true,
        // todo: change description
        description: "Stadium Eye is a private, client-only Stadium Management System designed to manage multiple stadiums efficiently. Backend system with an admin panel for managing stadiums, events, bookings, and staff. Includes role-based authorization for different user types, secure JWT authentication, encrypted passwords, password recovery emails, Firebase integration for media storage, and robust REST APIs for seamless data interaction.    ",
        image: assets.stadiumEye,
        skills: [assets.node, assets.express, assets.mongo, assets.javascript, assets.jwt, assets.firebase],
        github: "https://github.com/seif-el-sayed1/StadiumEye_Backend.git",
        link: "SOON",   
        demo: ""
    },
];

export const aboutMe = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 sm:size-10 text-[var(--secondary-color)]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>,    
        text: "Professional Full Stack Developer with strong expertise in backend development and real-world project experience."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13 sm:size-7 text-[var(--secondary-color)]"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>,
        text: "Specialized in creating efficient, scalable backend systems using Node.js, Express.js, and MongoDB."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13 sm:size-7 text-[var(--secondary-color)]"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>,
        text: "Proficient in frontend development with React, enabling full-stack solutions and seamless integration with backend APIs."
    },
    {
        icon: <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 sm:size-7 text-[var(--secondary-color)]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>,
        text: "Continuously learning and exploring new technologies, frameworks, and development best practices to deliver high-quality solutions."
    },
]

export const info = [
    "Professional backend developer with real-world experience in freelance and company projects.",
    "Expert in building robust and scalable backend systems using Node.js, Express.js, and MongoDB.",
    "Proficient in frontend development with React to deliver full-stack solutions when needed.",
    "Skilled in designing secure authentication, APIs, and database management for performance and reliability.",
]


export const frontendSkills = [
    {
        label: "Next.js",
        icon: assets.nextjs,
        bgColor: "#F2F2F2",
        shadow: "0 0 20px rgba(255, 255, 255, 0.9)",
        textColor: "#000"
    },
    {
        label: "React",
        icon: assets.react,
        bgColor: "rgba(97, 218, 251, 0.15)",       
        shadow: "0 0 20px rgba(97, 218, 251, 0.8)", 
        textColor: "#61DAFB"                       
    },
    {
        label: "TypeScript",
        icon: assets.typescript,
        bgColor: "rgba(49, 120, 198, 0.15)",      
        shadow: "0 0 20px rgba(49, 120, 198, 0.8)",
        textColor: "#3178C6"
    },
    {
        label: "JavaScript",
        icon: assets.javascript,
        bgColor: "rgba(247, 223, 30, 0.15)",
        shadow: "0 0 20px rgba(247, 223, 30, 0.8)",
        textColor: "#F7DF1E"
    },
    {
        label: "Tailwind",
        icon: assets.tailwind,
        bgColor: "rgba(56, 189, 248, 0.15)",
        shadow: "0 0 20px rgba(56, 189, 248, 0.8)",
        textColor: "#38BDF8"
    },
    {
        label: "Bootstrap",
        icon: assets.bootstrap,
        bgColor: "rgba(121, 82, 179, 0.15)",
        shadow: "0 0 20px rgba(121, 82, 179, 0.8)",
        textColor: "#CBA5FF" 
    },
    {
        label: "CSS",
        icon: assets.css,
        bgColor: "rgba(38, 77, 228, 0.15)",
        shadow: "0 0 20px rgba(38, 77, 228, 0.8)",
        textColor: "#80B3FF"
    },
    {
        label: "HTML",
        icon: assets.html,
        bgColor: "rgba(227, 79, 38, 0.15)",
        shadow: "0 0 20px rgba(227, 79, 38, 0.8)",
        textColor: "#FF8A65"
    }
]
export const backendSkills = [
    {
        label: "Node Js",
        icon: assets.node,
        bgColor: "rgba(83, 142, 64, 0.15)",
        shadow: "0 0 20px rgba(83, 142, 64, 0.8)",
        textColor: "#539E43"
    },
    {
        label: "Express Js",
        icon: assets.express,   
        bgColor: "#F2F2F2",
        shadow: "0 0 20px rgba(255, 255, 255, 0.9)",
        textColor: "#000"
    },
    {
        label: "MongoDB",
        icon: assets.mongo,
        bgColor: "rgba(69, 161, 73, 0.15)",
        shadow: "0 0 20px rgba(69, 161, 73, 0.8)",
        textColor: "#47A248"    
    }
]

export const additionalSkills = [
    {
        label: "Git",
        icon: assets.git,
        bgColor: "rgba(240, 80, 51, 0.15)",
        shadow: "0 0 20px rgba(240, 80, 51, 0.8)",
        textColor: "#F05033"
    },
    {
        label: "GitHub",
        icon: assets.gitHub,
        bgColor: "#F2F2F2",
        shadow: "0 0 20px rgba(255, 255, 255, 0.9)",
        textColor: "#000"
    },
    {
        label: "Python",
        icon: assets.python,
        bgColor: "rgba(49, 120, 198, 0.15)",
        shadow: "0 0 20px rgba(49, 120, 198, 0.8)",
        textColor: "#3178C6"
    }

]
export const navLinks = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Skills",
            path: "/skills",
        },
        {
            label: "Projects",
            path: "/projects",
        },
        {
            label: "About Me",
            path: "/aboutMe"
        },
        {
            label: "Contact Me",
            path: "/contact"
        },
    ]

export const sideLinks = [
    {
        label: "Home",
        path: "/",
        icon:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>

    },
    {
        label: "Skills",
        path: "/skills", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
    },
    {
        label: "Projects",
        path: "/projects",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><path d="M18 19c-2.8 0-5-2.2-5-5v8"></path><circle cx="20" cy="19" r="2"></circle></svg>    
    },
    {
        label: "About Me",
        path: "/aboutMe",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
    },
    {
        label: "Contact Me",
        path: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
    },
]
