import { PersonalInfo, Project, Experience, Education, Skill, Article } from '../types'

// Base path for GitHub Pages deployment
const basePath = ''

export const personalInfo: PersonalInfo = {
  name: "Akinde Peter",
  title: "Senior Climate-tech Software Engineer",
  bio: "Innovative Software Engineer with over 7 years of combined experience in full-stack development, 3D visualization, and workflow automation. Expert in TypeScript, React.js, and Babylon.js, with a proven record of optimizing frontend performance and architecting scalable data management systems. Brings a unique competitive advantage in the PropTech and ClimateTech sectors, leveraging deep domain knowledge in Urban Energy Modelling to translate complex analytical requirements into robust, high-performance software solutions.",
  email: "akinde.peterr@gmail.com",
  github: "https://github.com/peteviz",
  linkedIn: "https://www.linkedin.com/in/akinde-peter/",
  phone: "+4917665177790",
  location: "Bavaria, Germany",
  profileImage: `${basePath}/images/profile.jpg`,
  resumeUrl: `${basePath}/resume/PETER%20AKINDE_Main_CV_en__.pdf`,
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
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "rechart", level: 85, category: "frontend", icon: "rechart" },
  { name: "Babylon.js", level: 80, category: "frontend", icon: "babylonjs" },

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
  { name: "Urban Energy Modelling", level: 95, category: "sustainability", icon: "city" },
  { name: "Life Cycle Assessment", level: 90, category: "sustainability", icon: "recycle" },

  { name: "Python", level: 75, category: "programming", icon: "python" },
  { name: "Java", level: 75, category: "programming", icon: "java" },
  { name: "NumPy", level: 70, category: "ML/AI", icon: "numpy" },
  { name: "Pandas", level: 72, category: "ML/AI", icon: "pandas" },
  { name: "AI Assisted Development", level: 90, category: "ML/AI", icon: "robot" },
  { name: "Prompt Engineering", level: 88, category: "ML/AI", icon: "terminal" },
  // { name: "Scikit-learn", level: 68, category: "ML/AI", icon: "sklearn" },
  // { name: "Matplotlib", level: 65, category: "ML/AI", icon: "matplotlib" },
  // { name: "Jupyter Notebooks", level: 80, category: "tools", icon: "jupyter" },
  // { name: "Linear Regression", level: 70, category: "ML/AI", icon: "chart-line" },
  // { name: "Data Preprocessing", level: 75, category: "ML/AI", icon: "database" },
  // { name: "Feature Engineering", level: 60, category: "ML/AI", icon: "settings" },
  // { name: "TensorFlow Basics", level: 45, category: "ML/AI", icon: "tensorflow" }
]

export const projects: Project[] = [
  {
    "id": "1",
    "title": "Skill Sync",
    "description": "Developed a full-stack platform using React.js and Node.js facilitating skills acquisition through peer to peer project collaboration. Engineered the recruiter interface to filter candidates based on verified skills and metric-based achievement.",
    "longDescription": "SkillsConnect is an innovative web-based single-page application designed to revolutionize the university student experience by providing a comprehensive platform for skill-sharing, project collaboration, community building, and a student marketplace. Built with cutting-edge technologies like React 19, TypeScript, MongoDB with Mongoose, Next.js 14, Supabase, Tailwind CSS (featuring an aurora-inspired palette of Teal #00C4B4, Coral #FF6F61, Indigo #4B0082, and Cream #FFF8E7), and Framer Motion, the app integrates xAI’s Grok API to deliver AI-driven features. Students can showcase their skillsets, build ratings from peer interactions, and present CVs, portfolios, and interests, while recruiters discover and reach out based on sophisticated metrics. Launched in collaboration with Deggendorf Institute of Technology, SkillsConnect accelerates development with AI tools like Cursor, aiming to connect 500 students and 10 recruiters in its initial November 2025 pilot, with plans to scale globally by 2027.",
    "technologies": ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    "category": "education",
    "image": `${basePath}/images/projects/ecoconstruct.png`,
    "liveUrl": "",
    "githubUrl": "https://github.com/peteviz/skillSync",
    "featured": true,
    "year": 2025,
    "challenges": "",
    "solution": "",
    "impact": ""
  },
  {
    "id": "2",
    "title": "Financial Machine Learning Portfolio Projects",
    "description": "This repository contains two production-ready financial ML applications using the S&P 500 Stocks sentiment dataset from HuggingFace, demonstrating advanced skills in NLP, time-series analysis, and financial modeling.",
    "longDescription": "The repository features two comprehensive projects focused on financial machine learning applications leveraging sentiment analysis from news data. Project 1 is an end-to-end ML pipeline called the News Sentiment-Based Stock Price Predictor, which predicts next-day stock returns by integrating news sentiment analysis with historical price data and deploys it via an interactive Streamlit dashboard; it includes advanced feature engineering such as sentiment features (rolling averages, volatility, momentum), technical indicators (RSI, MACD, Bollinger Bands), text features (TF-IDF, BERT embeddings), and temporal/volume-weighted features, along with model architectures like LSTM with Multi-head Attention, GRU, Facebook Prophet with sentiment regressors, and an LSTM + XGBoost ensemble, evaluated using metrics including RMSE, MAE, MAPE, R², Sharpe Ratio, Maximum Drawdown, Hit Rate, Profit Factor, Win Rate, and Calmar Ratio, with dashboard features for real-time visualization, model training, prediction generation with confidence intervals, risk analysis, backtesting, and feature importance visualization. Project 2 is the Ticker-Specific Sentiment Trend Analyzer, an unsupervised learning system that clusters S&P 500 stocks by sentiment patterns, identifies anomalies, and provides a recommendation engine for similar-sentiment stocks; it incorporates a comprehensive feature matrix with 30+ sentiment-based features per ticker, time-series characteristics (trend, seasonality, autocorrelation), distribution properties (skew, kurtosis, extremes), and Fourier transform components, using clustering pipelines with dimensionality reduction (PCA, t-SNE, UMAP), algorithms (K-Means, DBSCAN, GMM, HDBSCAN), optimal cluster detection, and validation metrics, plus anomaly detection via Isolation Forest, Local Outlier Factor, statistical methods, and consensus identification, alongside a recommendation engine based on cosine similarity, cluster-aware suggestions, and similarity network visualization, with dashboard features including 3D cluster visualization, interactive ticker selection, anomaly alerts, stock recommendations, network graphs, and downloadable feature matrices. The projects aim to achieve performance targets such as R² > 0.65, MAPE < 5%, Sharpe > 1.5, Hit Rate > 55% for Project 1, and Silhouette Score > 0.45, Precision > 0.7, Recall > 0.6, and recommendation hit rate > 60% for Project 2, with expected results like LSTM RMSE ~0.025, Hit Rate ~58%, Sharpe Ratio ~1.2, R² ~0.72 for AAPL in Project 1, and 4-6 clusters, Silhouette Score ~0.52, 2-3 anomalies, and 85%+ recommendation accuracy for tech stocks in Project 2. Key innovations include multi-modal feature engineering, attention-based LSTM, ensemble learning, consensus anomaly detection, and interactive dashboards. The purpose is to showcase advanced quantitative finance applications through production-ready implementations.",
    "technologies": ["Python", "Streamlit", "HuggingFace", "TA-Lib", "PyTorch", "LSTM", "GRU", "Facebook Prophet", "XGBoost", "PCA", "t-SNE", "UMAP", "K-Means", "DBSCAN", "GMM", "HDBSCAN", "Isolation Forest", "Local Outlier Factor"],
    "category": "ML/AI",
    "image": `${basePath}/images/projects/fin-ml-sentiment-predictor-dashboard.png`,
    "liveUrl": "",
    "githubUrl": "https://github.com/peteviz/fin-ml-sentiment-predictor-dashboard",
    "featured": false,
    "year": 2025,
    "challenges": "HuggingFace dataset loading failures, PyTorch CUDA issues, Memory issues.",
    "solution": "For dataset loading: Export HF_DATASETS_CACHE. For CUDA issues: Set device to 'cpu'. For memory issues: Adjust batch_size and sequence_length. General installation and deployment solutions provided.",
    "impact": "Demonstrates production-ready applications for quantitative finance, enabling better stock return predictions, anomaly detection, and recommendation systems, potentially improving risk-adjusted returns and trading decisions."
  },
  {
    "id": "3",
    "title": "AI Abbreviator Extractor",
    "description": "Developed an AI-powered tool using Generative AI workflows to extract and expand abbreviations, demonstrating expertise in prompt engineering and agentic data processing.",
    "longDescription": "The Abbreviation Extractor is a web application designed to process uploaded Word documents and automatically identify abbreviations along with their contextual definitions through AI integration. Its purpose is to simplify the extraction of such information from documents, making it useful for tasks like document analysis or research. Key features include a user-friendly file upload interface on the main page, backend API processing for document handling, AI-driven extraction of abbreviations and meanings, and display of the results on the frontend. The workflow involves sending the uploaded document to the API, where it is analyzed by AI, and then returning the extracted data for user viewing. The application supports smooth interactions with animations and additional UI components for enhanced usability.",
    "technologies": ["Next.js", "React", "Tailwind CSS", "Material-UI", "Framer Motion", "Artificial Intelligence"],
    "category": "ML/AI",
    "image": `${basePath}/images/projects/abbreviator-extractor-ai.png`,
    "liveUrl": "",
    "githubUrl": "https://github.com/peteviz/Abbreviator_Extractor_AI",
    "featured": false,
    "year": 2025,
    "challenges": "",
    "solution": "",
    "impact": ""
  }
]

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Urbanistic GmbH",
    position: "Software Engineer & Sustainability Expert",
    startDate: "2023-12",
    description: "Development of 3D Urban Planning and sustainability SaaS product.",
    technologies: ["React", "Java", "TypeScript", "Babylon.js", "Redux"],
    achievements: [
      "Architected a scalable global state management system using Redux and Context API, significantly reducing data-fetching errors and decoupling complex UI logic from data layers to improve maintainability.",
      "Led a comprehensive codebase refactor and performance overhaul; implemented lazy loading, code splitting, and tree shaking, which drastically improved Lighthouse scores and reduced initial load times for data-heavy applications.",
      "Engineered interactive 3D simulation tools using Babylon.js, enabling real- time object manipulation and automated building simulations that reduced user workflow time and increased project evaluation accuracy.",
      "Built dynamic, real-time analytics dashboards using Recharts.js to render complex energy metrics, translating raw backend data into actionable user insights.",
      "Optimized the data ingestion layer by integrating RESTful APIs with client- side normalization, ensuring efficient handling of large-scale JSON payloads for energy metrics and minimizing network latency.",
      "Utilized Vibe Coding methodologies to rapidly iterate on complex 3D UI components and functionalities in Babylon.js, reducing the 'idea-to-prototype' phase by 30%.",
      "Led R&D team for Urban Building Energy Modelling (UBEM) and Life Cycle Assessment (LCA) solutions at city and national scale, developing scalable, data-driven tools for automated energy demand forecasting, embodied/operational carbon accounting, and decarbonization scenario analysis."

    ],
    type: "hybrid"
  },
  {
    id: "2",
    company: "Fiverr",
    position: "3D Automation Developer",
    startDate: "2016-06",
    endDate: "2022-10",
    description: "Specialized in automating design workflows and architectural simulations.",
    technologies: ["Ruby", "SketchUp API", "3D Simulation Tools"],
    achievements: [
      "Developed custom Ruby scripts within SketchUp to automate repetitive interior design workflows, successfully reducing average project turnaround time by 15%",
      "Delivered programmatic design solutions that integrated complex daylight and energy simulation parameters into architectural projects",
      "Conducted energy efficiency assessments with simulation tools, leading to a 20% improvement in project sustainability outcomes"
    ],
    type: "development"
  }
  // {
  //   id: "2",
  //   company: "BuildSmart Construction",
  //   position: "Frontend Developer & LEED Consultant",
  //   startDate: "2021-06",
  //   endDate: "2022-12",
  //   description: "Developed web applications for construction project management while providing LEED certification guidance.",
  //   technologies: ["React", "Vue.js", "SCSS", "Node.js", "MongoDB"],
  //   achievements: [
  //     "Built project management dashboard used by 20+ construction teams",
  //     "Assisted 10 building projects achieve LEED Gold certification",
  //     "Implemented responsive design principles reducing mobile bounce rate by 35%",
  //     "Created automated reporting system for sustainability metrics tracking"
  //   ],
  //   type: "hybrid"
  // },
  // {
  //   id: "3",
  //   company: "EcoArchitects Ltd",
  //   position: "Junior Web Developer & Sustainability Analyst",
  //   startDate: "2020-01",
  //   endDate: "2021-05",
  //   description: "Supported web development projects while analyzing environmental impact of building designs.",
  //   technologies: ["JavaScript", "HTML5", "CSS3", "WordPress", "MySQL"],
  //   achievements: [
  //     "Maintained and updated company website increasing organic traffic by 60%",
  //     "Conducted environmental impact assessments for 15+ building projects",
  //     "Developed custom WordPress plugins for project showcase functionality",
  //     "Created educational content about sustainable building practices"
  //   ],
  //   type: "hybrid"
  // }
]

export const education: Education[] = [
  {
    id: "1",
    institution: "Federal  University of Technology, Akure (FUTA)",
    degree: "Bachelor of Technology",
    field: "Building Technology",
    startDate: "2014",
    endDate: "2019",
    gpa: "1.5 (German scale)",
    description: "Bachelor Thesis: Assessment of BIM Adoption Among Construction Firms in Lagos State",
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
    gpa: "1.5 (German scale)",
    description: "Master's Thesis: Automating Carbon Risk Assessment of Residential Buildings Using Scalable Energy and Emissions Data In City Information Models",
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
    title: "Automating Carbon Risk Assessment of Residential Buildings",
    excerpt: "Developed an automated framework for carbon risk assessment that integrates scalable energy data into City Information Models (CIMs).",
    content: "Full paper available via external link.",
    category: "sustainability",
    tags: ["Carbon Risk", "City Information Models", "Automation", "Sustainability"],
    publishedAt: "2024-10-01",
    readingTime: 15,
    featuredImage: `${basePath}/images/articles/carbon-risk-assessment.png`,
    author: "Akinde Peter (Lead Author)",
    externalUrl: "https://www.techrxiv.org/1377171"
  }
]
