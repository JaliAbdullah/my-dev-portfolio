// Edit everything about your portfolio's content right here.
// The components just read from this file, so you never have to touch JSX
// to update your name, links, skills, certs, or projects.

const profile = {
  name: 'JALI ABDULLAH',
  tagline: "A DEVELOPER & CYBERSECURITY ENTHUSIAST.",
  motto: '"DO FIRST, LEARN LATER"',
  heroBlurb:
    'I am a highly motivated, hands-on builder who thrives on jumping head-first into complex technical environments, engineering end-to-end full-stack applications, and breaking down system architecture mechanics from the inside out.',

  // Images live in /public/images — swap the files there and these paths
  // stay the same.
  images: {
    logo: '/images/logo.png',
    profile: '/images/profile.png',
    techOrbit: '/images/tech-orbit.jpg',
  },

  marqueeItems: ['INTERN 2026', 'OPEN TO ROLES', 'ANDROID DEVELOPER', 'APP DEVELOPER', 'LINUX', 'CYBERSECURITY'],

  toolkit: [
    {
      title: 'Frontend Architecture',
      accent: 'secondary-container',
      items: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React', 'Axios'],
    },
    {
      title: 'Backend Logic',
      accent: 'primary-container',
      items: ['Node.js', 'Express.js', 'Java', 'Python'],
    },
    {
      title: 'Databases',
      accent: 'tertiary-container',
      items: ['SQL', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Systems & DevOps',
      accent: 'dark',
      items: ['Linux', 'Kubernetes', 'Git & GitHub'],
    },
  ],

  certifications: {
    completed: [
      {
        name: 'IBM Full-Stack Developer Professional Certificate',
        issuer: 'Coursera Verified Credential',
        focus:
          'Full-stack application layers, cloud-native deployment tracks, backend microservice integration, and dev pipelines.',
      },
      {
        name: 'JavaScript Professional Certificate',
        issuer: 'Meta',
        focus:
          'Advanced programming structures, complex object manipulation, document model scripting, and clean application runtime logic.',
      },
    ],
    active: [
      {
        name: 'Java Programming & Software Engineering Fundamentals',
        issuer: 'Duke University Specialization',
        focus:
          'Object-oriented programming principles, clean software architectural patterns, and systematic problem-solving logic.',
      },
      {
        name: 'IBM Linux Commands & Shell Scripting',
        issuer: 'Coursera Intensive',
        focus:
          'System administration workflows, terminal automation, advanced file hierarchy control, and custom Bash tracking script logic.',
      },
    ],
  },

  labs: [
    {
      title: 'LAB 1: ANDROID SAVINGS APPLICATION',
      focus: 'MOBILE APP & INTERACTIVE INTERFACES',
      description:
        'Designed, structured, and executed a vibrant, user-friendly Android application built to help children learn financial literacy through goal tracking.',
      tasks: [
        'Engineered structured XML layouts and interactive UI components optimized for a seamless mobile user experience.',
        'Implemented core logic to calculate weekly contributions and provide positive reinforcement for user saving goals.',
      ],
      tech: ['Android Studio', 'Java', 'Android XML', 'Gradle'],
      repo: '#',
      accent: 'secondary-container',
    },
    {
      title: 'LAB 2: REACT FRONT-END E-COMMERCE',
      focus: 'WEB APPLICATION & STATE MANAGEMENT',
      description:
        'Configured and managed a dynamic web frontend application featuring a fully functional houseplant e-commerce store.',
      tasks: [
        'Architected clean component views including an interactive landing page, product listings, and an integrated shopping cart.',
        'Implemented React Router for smooth client-side navigation and Redux for seamless, predictable global application state management.',
      ],
      tech: ['React', 'Redux', 'JavaScript', 'HTML/CSS'],
      repo: '#',
      accent: 'primary-container',
    },
  ],

  contact: {
    email: 'jalibinabdullah@gmail.com',
    emailHref: 'mailto:jalibinabdullah@gmail.com',
    github: 'github.com/JaliAbdullah',
    githubHref: 'https://github.com/JaliAbdullah',
    linkedin: 'linkedin.com/in/jali-bin-abdullah-58252541a',
    linkedinHref: 'https://www.linkedin.com/in/jali-bin-abdullah-58252541a/',
  },

  footerNote: 'BUILT WITH BRUTALISM.',
  sysLoc: 'MALAYSIA',
  resumePdfHref: '#',
}

export default profile
