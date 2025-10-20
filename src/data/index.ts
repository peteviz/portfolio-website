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
    { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
    {name: "rechart", level: 85, category: "frontend", icon: "rechart"},
    {name: "Babylon.js", level: 80, category: "frontend", icon: "babylonjs"},

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
    // { name: "Jupyter Notebooks", level: 80, category: "tools", icon: "jupyter" },
    { name: "Linear Regression", level: 70, category: "ML/AI", icon: "chart-line" },
    { name: "Data Preprocessing", level: 75, category: "ML/AI", icon: "database" },
    { name: "Feature Engineering", level: 60, category: "ML/AI", icon: "settings" },
    { name: "TensorFlow Basics", level: 45, category: "ML/AI", icon: "tensorflow" }
]

export const projects: Project[] = [
    {
        "id": "1",
        "title": "Skill Sync",
        "description": "SkillsConnect is a dynamic web app empowering university students to share skills, collaborate on projects, and connect with recruiters through an AI-enhanced marketplace.",
        "longDescription": "SkillsConnect is an innovative web-based single-page application designed to revolutionize the university student experience by providing a comprehensive platform for skill-sharing, project collaboration, community building, and a student marketplace. Built with cutting-edge technologies like React 19, TypeScript, MongoDB with Mongoose, Next.js 14, Supabase, Tailwind CSS (featuring an aurora-inspired palette of Teal #00C4B4, Coral #FF6F61, Indigo #4B0082, and Cream #FFF8E7), and Framer Motion, the app integrates xAI’s Grok API to deliver AI-driven features. Students can showcase their skillsets, build ratings from peer interactions, and present CVs, portfolios, and interests, while recruiters discover and reach out based on sophisticated metrics. Launched in collaboration with Deggendorf Institute of Technology, SkillsConnect accelerates development with AI tools like Cursor, aiming to connect 500 students and 10 recruiters in its initial November 2025 pilot, with plans to scale globally by 2027.",
        "technologies": ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Tailwind CSS"],
        "category": "education",
        "image": "/images/projects/ecoconstruct.jpg",
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
        "image": "/images/projects/fin-ml-sentiment-predictor-dashboard.jpg",
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
        "title": "Abbreviation Extractor",
        "description": "This project is an Abbreviation Extractor application built using Next.js, React, and Tailwind CSS that allows users to upload a Word document (.doc or .docx) and extracts the abbreviations and their definitions using Artificial Intelligence.",
        "longDescription": "The Abbreviation Extractor is a web application designed to process uploaded Word documents and automatically identify abbreviations along with their contextual definitions through AI integration. Its purpose is to simplify the extraction of such information from documents, making it useful for tasks like document analysis or research. Key features include a user-friendly file upload interface on the main page, backend API processing for document handling, AI-driven extraction of abbreviations and meanings, and display of the results on the frontend. The workflow involves sending the uploaded document to the API, where it is analyzed by AI, and then returning the extracted data for user viewing. The application supports smooth interactions with animations and additional UI components for enhanced usability.",
        "technologies": ["Next.js", "React", "Tailwind CSS", "Material-UI", "Framer Motion", "Artificial Intelligence"],
        "category": "ML/AI",
        "image": "/images/projects/abbreviator-extractor-ai.jpg",
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
    position: "Frontend Developer & Sustainability Consultant",
    startDate: "2023-12",
    description: "Development of 3D Urban Planning and sustainability SaaS product.",
    technologies: ["React", "Java", "TypeScript", "Babylon.js", "Redux"],
    achievements: [
      "Directed web performance optimizations through strategic use of lazy loading, code splitting, and caching mechanisms, achieving a 40% reduction in load times and elevating Lighthouse scores to 95+, showcasing proficiency in performance tuning for high-traffic environments",
      "Took ownership of developing and maintaining critical front-end features, ensuring seamless functionality and high user satisfaction through rigorous testing and iterative improvements",
      "Championed a comprehensive refactor of the entire codebase, applying  great level of detail and expertise to enhance readability, scalability, tree shaking and overall performance.",
      "Pioneered enhancements to 3D modeling capabilities using Babylon.js, enabling real-time object manipulation and automated building simulations that reduced simulation times by 50% and improved project evaluation accuracy, highlighting advanced skills in interactive web graphics",
      "Designed and automated ESG-related workflows with custom algorithms for sustainability analysis, creating energy prediction tools requiring minimal user input and cutting manual labor, while leading initiatives to integrate these features into the core platform for greater operational efficiency."
    ],
    type: "hybrid"
  },
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
