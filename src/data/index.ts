import { PersonalInfo, Project, Experience, Education, Skill, Article } from '../types'

export const personalInfo: PersonalInfo = {
  name: "Akinde Peter",
  title: "Frontend Developer & Sustainability Expert",
  bio: "Passionate about creating innovative web solutions while promoting sustainable practices in the construction industry. I bridge the gap between cutting-edge technology and environmental responsibility.",
  email: "akinde.peter@example.com",
    github: "https://github.com/peteviz",
    linkedIn: "https://www.linkedin.com/in/akinde-peter/",
  phone: "+4917665177790",
  location: "Bavaria, Germany",
  profileImage: "/images/profile.jpg",
  resumeUrl: "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKGmGc8CwennwAAAZlwClSdqfB4TKVONtAMt5RHZUz3Y8T_56O8aC9R5pG0DYHM3Vf8vZLyeDq63xXXnLWugX-BquxKnrGXeryZFMYaNDTf4-ObYtgoldC_lDTP5ToXlG2Q4n4D6iELhg-K94yPlWJgJ97hVCF-6DrfSG1yS6u3feQisg6ZxzJZ8B_ZZumYBmd7SgBAZYPK05oNiGKjqPucv4ytPElGvkh0zcVJj10F397AzA1v9ZO_uvE5-B1GFx742K5ANQ12jlvpCAoqTR4jpjIvtXJ2RK2qqqFVywkqBX0B9vMyz-1HE9OcC2eI9FnrfVKQ9Xgi0sVUdmlO_yxe_clSQjDpPCcupaxOE4yHK3Db87s1w54wZ5lXHO2FniJvIsrQIL9w5Bixteu_OJ97FpWyW0sWbvH2DQR4wR5Xm8nk1iDA-hgsonHCrDB0AA8D4Ki01WTMt-Maru0MJSD28ftxkwOVCwOuPu6deDJ55oegXnZqR7MYyqhWtRr9BQUogV4EIRnOZRrrIBh6JVCt6DIvQzkFpQk7XK-Jmf_o-tbN0J4wSidqQG51ag40lB00aQ",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akinde-peter/",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/peteviz",
      icon: "github"
    },
    {
      name: "Email",
      url: "mailto:akinde.peterr@gmail.com",
      icon: "mail"
    }
  ]
}

export const skills: Skill[] = [
  // Frontend Technologies
  { name: "React", level: 95, category: "frontend", icon: "react" },
  { name: "Next.js", level: 90, category: "frontend", icon: "nextjs" },
  { name: "TypeScript", level: 88, category: "frontend", icon: "typescript" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "tailwind" },

  // Tools & Technologies
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "Vite", level: 88, category: "tools", icon: "vite" },

  // Backend (supporting skills)
  { name: "Node.js", level: 75, category: "backend", icon: "nodejs" },
  { name: "Express", level: 70, category: "backend", icon: "express" },

  // Sustainability Expertise
  // { name: "LEED Principles", level: 92, category: "sustainability", icon: "leaf" },
  // { name: "Green Building Design", level: 88, category: "sustainability", icon: "building" },
  // { name: "Environmental Assessment", level: 85, category: "sustainability", icon: "earth" },
  // { name: "Sustainable Materials", level: 90, category: "sustainability", icon: "recycle" },

    { name: "Python", level: 75, category: "programming", icon: "python" },
    { name: "Java", level: 75, category: "programming", icon: "java" },
    { name: "NumPy", level: 70, category: "ML/AI", icon: "numpy" },
    { name: "Pandas", level: 72, category: "ML/AI", icon: "pandas" },
    { name: "Scikit-learn", level: 68, category: "ML/AI", icon: "sklearn" },
    { name: "Matplotlib", level: 65, category: "ML/AI", icon: "matplotlib" },
    { name: "Jupyter Notebooks", level: 80, category: "tools", icon: "jupyter" },
    { name: "Linear Regression", level: 70, category: "ML/AI", icon: "chart-line" },
    { name: "Data Preprocessing", level: 75, category: "ML/AI", icon: "database" },
    { name: "Feature Engineering", level: 60, category: "ML/AI", icon: "settings" },
    { name: "TensorFlow Basics", level: 45, category: "ML/AI", icon: "tensorflow" }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "EcoConstruct Dashboard",
    description: "A comprehensive web application for monitoring and managing sustainable construction projects with real-time environmental impact tracking.",
    longDescription: "EcoConstruct Dashboard is a full-stack web application that helps construction companies track their environmental impact in real-time. The platform integrates IoT sensors, provides detailed analytics, and offers actionable insights for reducing carbon footprint.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    category: "sustainability",
    image: "/images/projects/ecoconstruct.jpg",
    liveUrl: "https://ecoconstruct-dashboard.vercel.app",
    githubUrl: "https://github.com/akinde-peter/ecoconstruct-dashboard",
    featured: true,
    year: 2024,
    challenges: "Integrating real-time IoT data streams with complex environmental calculations while maintaining high performance.",
    solution: "Implemented efficient data processing pipelines using WebSockets and optimized database queries with proper indexing.",
    impact: "Helped 15+ construction companies reduce their carbon footprint by an average of 25%."
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing advanced animations and interactive elements built with Next.js and Framer Motion.",
    longDescription: "This portfolio website demonstrates advanced frontend development skills with smooth animations, interactive elements, and optimized performance. Built with modern technologies and best practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "React Hook Form"],
    category: "frontend",
    image: "/images/projects/portfolio.jpg",
    liveUrl: "https://akinde-peter.vercel.app",
    githubUrl: "https://github.com/akinde-peter/portfolio-website",
    featured: true,
    year: 2024,
    challenges: "Creating smooth, performant animations while maintaining accessibility and mobile responsiveness.",
    solution: "Utilized Framer Motion for complex animations and implemented proper accessibility features with reduced motion preferences.",
    impact: "Achieved 95+ Lighthouse scores across all metrics and 40% increase in professional inquiries."
  },
  {
    id: "3",
    title: "Green Materials Database",
    description: "A comprehensive database and search platform for sustainable construction materials with detailed environmental impact ratings.",
    longDescription: "An extensive database of eco-friendly construction materials with detailed specifications, environmental ratings, and supplier information to help architects and engineers make informed decisions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI", "Elasticsearch"],
    category: "sustainability",
    image: "/images/projects/green-materials.jpg",
    liveUrl: "https://green-materials-db.com",
    githubUrl: "https://github.com/akinde-peter/green-materials-db",
    featured: true,
    year: 2023,
    challenges: "Managing large datasets and providing fast, accurate search functionality across multiple material categories.",
    solution: "Implemented Elasticsearch for powerful search capabilities and optimized database schemas for quick queries.",
    impact: "Used by 200+ architects and engineers, contributing to more sustainable material choices in construction projects."
  },
  {
    id: "4",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and productivity analytics.",
    technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
    category: "fullstack",
    image: "/images/projects/task-manager.jpg",
    liveUrl: "https://task-manager-pro.vercel.app",
    githubUrl: "https://github.com/akinde-peter/task-manager",
    featured: false,
    year: 2023
  },
  {
    id: "5",
    title: "Energy Efficiency Calculator",
    description: "A web tool that helps building owners calculate potential energy savings from various sustainability improvements.",
    technologies: ["Vue.js", "Node.js", "D3.js", "Bootstrap"],
    category: "sustainability",
    image: "/images/projects/energy-calculator.jpg",
    liveUrl: "https://energy-calc-tool.com",
    githubUrl: "https://github.com/akinde-peter/energy-calculator",
    featured: false,
    year: 2022
  }
]

export const experiences: Experience[] = [
  {
    id: "1",
    company: "GreenTech Solutions",
    position: "Senior Frontend Developer & Sustainability Consultant",
    startDate: "2023-01",
    description: "Leading the development of web applications focused on environmental sustainability in construction while mentoring junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    achievements: [
      "Developed 3 major sustainability tracking applications serving 50+ construction companies",
      "Reduced application load times by 40% through optimization techniques",
      "Led a team of 4 developers in implementing sustainable development practices",
      "Collaborated with environmental engineers to translate complex sustainability metrics into user-friendly interfaces"
    ],
    type: "hybrid"
  },
  {
    id: "2",
    company: "BuildSmart Construction",
    position: "Frontend Developer & LEED Consultant",
    startDate: "2021-06",
    endDate: "2022-12",
    description: "Developed web applications for construction project management while providing LEED certification guidance.",
    technologies: ["React", "Vue.js", "SCSS", "Node.js", "MongoDB"],
    achievements: [
      "Built project management dashboard used by 20+ construction teams",
      "Assisted 10 building projects achieve LEED Gold certification",
      "Implemented responsive design principles reducing mobile bounce rate by 35%",
      "Created automated reporting system for sustainability metrics tracking"
    ],
    type: "hybrid"
  },
  {
    id: "3",
    company: "EcoArchitects Ltd",
    position: "Junior Web Developer & Sustainability Analyst",
    startDate: "2020-01",
    endDate: "2021-05",
    description: "Supported web development projects while analyzing environmental impact of building designs.",
    technologies: ["JavaScript", "HTML5", "CSS3", "WordPress", "MySQL"],
    achievements: [
      "Maintained and updated company website increasing organic traffic by 60%",
      "Conducted environmental impact assessments for 15+ building projects",
      "Developed custom WordPress plugins for project showcase functionality",
      "Created educational content about sustainable building practices"
    ],
    type: "hybrid"
  }
]

export const education: Education[] = [
  {
    id: "1",
    institution: "Federal  University of Technology, Akure (FUTA)",
    degree: "Bachelor of Technology",
    field: "Building Technology",
    startDate: "2014",
    endDate: "2019",
    gpa: "",
    description: "Focused on sustainable building practices, environmental impact assessment, and green construction technologies.",
    certificateUrl: "/documents/degree-certificate.pdf",
    coursework: [
      "Environmental Impact Assessment",
      "Sustainable Construction Materials",
      "Green Building Design",
      "Renewable Energy Systems",
      "Environmental Chemistry",
      "Project Management"
    ]
  },
    {
        id: "2",
        institution: "Deggendorf Institute of Technology",
        degree: "Master of Engineering",
        field: "Healthy and Sustainable Building",
        startDate: "2022",
        endDate: "2025",
        gpa: "1.9/4.0",
        description: "Focused on sustainable building practices, development of sustainable living concepts, and green construction technologies.",
        certificateUrl: "/documents/degree-certificate.pdf",
        coursework: [
            "Evidence Based Design",
            "Sustainable Construction Materials",
            "Green Building Design",
            "Renewable Energy Systems",
            "AI in Construction",
            "Project Management"
        ]
    },
  {
    id: "2",
    institution: "Coursera",
    degree: "Professional Certificate",
    field: "Google UX Design",
    startDate: "2021-01",
    endDate: "2021-06",
    description: "Comprehensive program covering user experience design principles and practical application.",
    certificateUrl: "/documents/google-ux-certificate.pdf"
  },
  {
    id: "3",
    institution: "freeCodeCamp",
    degree: "Certification",
    field: "Full Stack Web Development",
    startDate: "2019-06",
    endDate: "2020-12",
    description: "Intensive program covering frontend and backend web development technologies.",
    certificateUrl: "/documents/freecodecamp-certificate.pdf"
  }
]

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Sustainable Construction Technology",
    excerpt: "Exploring how digital tools and IoT are revolutionizing green building practices and environmental monitoring in construction.",
    content: "Full article content here...",
    category: "sustainability",
    tags: ["sustainability", "construction", "IoT", "green building"],
    publishedAt: "2024-08-15",
    readingTime: 8,
    featuredImage: "/images/articles/sustainable-construction-tech.jpg",
    author: "Akinde Peter"
  },
  {
    id: "2",
    title: "Building Responsive Web Applications with Next.js 14",
    excerpt: "A comprehensive guide to creating performant, accessible web applications using the latest Next.js features and best practices.",
    content: "Full article content here...",
    category: "technology",
    tags: ["nextjs", "react", "web development", "performance"],
    publishedAt: "2024-07-22",
    readingTime: 12,
    featuredImage: "/images/articles/nextjs-guide.jpg",
    author: "Akinde Peter"
  },
  {
    id: "3",
    title: "LEED Certification in the Digital Age",
    excerpt: "How modern web applications are streamlining the LEED certification process and making sustainable building more accessible.",
    content: "Full article content here...",
    category: "industry-insights",
    tags: ["LEED", "certification", "sustainability", "digital transformation"],
    publishedAt: "2024-06-10",
    readingTime: 10,
    featuredImage: "/images/articles/leed-digital.jpg",
    author: "Akinde Peter"
  }
]
