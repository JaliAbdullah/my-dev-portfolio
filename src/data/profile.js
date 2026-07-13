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
      title: 'LAB 1: Full-Stack Interface App',
      focus: 'Web App & Dynamic Interfaces',
      description:
        'Designed, structured, and executed dynamic web frontend view layers connected securely to specialized utility algorithms.',
      tasks: [
        'Engineered clean layouts and interactive components.',
        'Constructed custom Temperature Converter and standalone Discount Calculator models.',
      ],
      tech: ['React', 'Node.js', 'Express', 'Android XML'],
      repo: '#',
      accent: 'secondary-container',
    },
    {
      title: 'LAB 2: Infrastructure & Data Sandbox',
      focus: 'Automation & Database Operations',
      description:
        'Configured and managed an isolated local terminal workspace to safely test script automations, schema snapshots, and infrastructure monitoring.',
      tasks: [
        'Authored custom Bash terminal scripts for automated audits and log tracking.',
        'Deployed localized SQL instances for secure testing data matrices.',
      ],
      tech: ['Linux', 'Bash', 'SQL', 'MySQL', 'PostgreSQL'],
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
