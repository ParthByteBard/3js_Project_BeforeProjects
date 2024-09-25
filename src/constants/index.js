// Contains the constant data like client reviews,projects etc
// exported into the section we need it
// You need to modify these



import cpp from '../assets2/tech/cpp.png';
import c from '../assets2/tech/c.jpeg';
import python from '../assets2/tech/python.webp'
import javascript from '../assets2/tech/javascript.png'
import html from '../assets2/tech/html.png';
import css from '../assets2/tech/css.png';
import reactjs from '../assets2/tech/reactjs.png';
import tailwind from '../assets2/tech/tailwind.png';
import nodejs from '../assets2/tech/nodejs.png';
import git from '../assets2/tech/git.png';
import School from '../assets/School.png'
import School2 from '../assets/school2.png';
import VIT from '../assets/vitLogo.jpeg'
import spotlight1 from '../assets/spotlight1.png'
import spotlight2 from '../assets/spotlight2.png'
import spotlight3 from '../assets/spotlight3.png'
import spotlight4 from '../assets/spotlight4.png'

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#project',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const technologies = [
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
    name: "Cpp",
    icon: cpp,
  },
  {
    name: 'c',
    icon: c,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  }
];

export const myProjects = [
  {
    title: 'Freelancing Job Platform',
    desc: 'A React-based platform where recruiters can post job listings, including details like job type, requirements, company info, and contact details. Applicants can browse all job listings, and updates are displayed via React Toastify. Data is stored on a dummy backend running on port 8000.',
    subdesc:
      'The project demonstrates React fundamentals, including data handling from a backend, and is styled with vanilla CSS for simplicity and clarity.',
    href: 'https://drive.google.com/file/d/17T7P1qg_vQ1DEouOyMXgzPCHUZwsXbsA/view?usp=sharing',
    texture: '/textures/project/project1.mp4',
    // logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: reactjs,
      },
      {
        id: 2,
        name: 'CSS',
        path: css,
      },
      {
        id: 3,
        name: 'HTML',
        path: html,
      },
      {
        id: 4,
        name: 'JavaScript',
        path: javascript,
      },
    ],
  },
  {
    title: 'Real-Time ChatRoom',
    desc: 'A chat application built using Socket.io for full-duplex, real-time communication. Users can enter a username and room ID, and send messages in real-time to all participants in the room. The server broadcasts messages to everyone in the room, making it ideal for group chats.',
    subdesc:
      'The app is built with a React frontend styled using Tailwind CSS, and a Node.js + Express backend handles the server-side logic.',
    href: 'https://drive.google.com/file/d/15Mrzi90O1ZlmA-pWVE91J9Grzx4kJrpe/view?usp=sharing',
    texture: '/textures/project/project2.mp4',
    spotlight: spotlight2,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: reactjs,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: tailwind,
      },
      {
        id: 3,
        name: 'Node.js',
        path: nodejs,
      },
      {
        id: 4,
        name: 'JavaScript',
        path: javascript,
      },
    ],
  },
  {
    title: 'Movie Search Tool',
    desc: 'A React-based movie search application that integrates with the OMDB API to fetch movie data. Users can search for movies, and the app displays the results as cards with movie details like the title, release year, and poster image. If no poster is available, a placeholder image is used.',
    subdesc:
      'This project demonstrates fetching and handling API data and organizing it into a user-friendly card-based interface.',
    href: 'https://drive.google.com/file/d/1SPlwF8u9gE7jgKhrh4zvjnlQP1mJ_TqX/view?usp=sharing',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: spotlight3,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: reactjs,
      },
      {
        id: 2,
        name: 'CSS',
        path: css,
      },
      {
        id: 4,
        name: 'JavaScript',
        path: javascript,
      },
    ],
  },
  {
    title: 'Weather Forecast for Farmers',
    desc: 'A fully responsive weather forecast tool designed for farmers, built with HTML, CSS, and JavaScript. It fetches weather data from the OpenWeather API and provides actionable advice to farmers based on the current weather conditions. The app analyzes the weather and suggests farming tasks like watering or protecting crops.',
    subdesc:
      'The project focuses on delivering critical weather information in a simplified and practical manner for agricultural use.',
    href: 'https://drive.google.com/file/d/1K5APqoy3znytBjlYEdrtZ2-uhTqyLueT/view?usp=sharing',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: spotlight4,
    tags: [
      {
        id: 1,
        name: 'CSS',
        path: css,
      },
      {
        id: 2,
        name: 'HTML',
        path: html,
      },
      {
        id: 3,
        name: 'JavaScript',
        path: javascript,
      },
    ],
  },
];

// These are the sizes and scale of the hacker-room elements calculated according to
// the size of the display
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const experiences = [
  {
    title: "10th CBSE",
    company_name: "Atomic Energy Central School 6, BARC colony, Mumbai",
    icon: School,
    iconBg: "#383E56",
    date: "( 2019-2020 )",
    points: [
      "Passed out with 95.8% aggregate",
    ],
  },
  {
    title: "12th CBSE",
    company_name: "Ryan International School, Sanpada, Navi-Mumbai",
    icon: School2,
    iconBg: "#E6DEDD",
    date: "( 2021-2022 )",
    points: [
      "Passed out with 90% aggregate",
    ],
  },
  {
    title: "Btech Computer Engineering",
    company_name: "Vidyalankar Institute of Technology,Wadala, Mumbai",
    icon: VIT,
    iconBg: "#383E56",
    date: "( 2022-2026 )",
    points: [
      "Present",
    ],
  },
];


