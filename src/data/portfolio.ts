export interface StatItem {
  id: string;
  target: number;
  suffix?: string;
  label: string;
  href: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  highlights: string[];
  tools: string[];
}

export interface ProjectMetaRow {
  key: string;
  value?: string;
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  period: string;
  summary: string;
  meta: ProjectMetaRow[];
  bullets: string[];
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  score: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  caption: string;
  imageSrc: string;
}

export const PUBLIC_SHARE_PORTFOLIO_URL =
  'https://ais-pre-himwb4wdzt7xwhitppqs57-365741469039.asia-southeast1.run.app';

export const PROFILE = {
  brandLeft: 'kartik',
  brandRight: 'patil',
  name: 'Kartik Patil',
  eyebrow: 'Portfolio / Build 2026',
  roles: [
    'Data Analyst',
    'AI & ML Developer',
    'B.Tech AI & Data Science Student',
    'Computer Vision Enthusiast',
    'NLP & Applied AI Builder',
  ],
  summary:
    'I turn raw, messy datasets into models and dashboards people can actually act on. Hands-on experience with Python, SQL and Power BI from my time at Skyhighes Technologies, paired with a steady stream of machine-learning side projects spanning computer vision, NLP and applied AI for wellness platforms.',
  email: 'kartikpatil0227@gmail.com',
  phoneDisplay: '+91 98239 62403',
  phoneHref: 'tel:+919823962403',
  linkedinDisplay: 'in/kartik-patil',
  linkedinFullDisplay: 'linkedin.com/in/kartik-patil',
  linkedinUrl: 'https://www.linkedin.com/in/kartik-patil-ba386927a',
  location: 'Wardha, India',
  roleSummary: 'Data Analyst · AI & ML Developer',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS: StatItem[] = [
  { id: 'projects', target: 4, label: 'ML / Web Projects ↗', href: '#projects' },
  { id: 'certs', target: 8, label: 'Certifications ↗', href: '#certifications' },
  {
    id: 'internship',
    target: 6,
    suffix: 'mo',
    label: 'Data Analyst Internship ↗',
    href: '#experience',
  },
  {
    id: 'grad',
    target: 2026,
    label: 'B.Tech Graduating Year ↗',
    href: '#education',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages & Querying',
    tags: ['Python', 'SQL (MySQL)', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'PHP'],
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Visualization',
    tags: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Power BI',
      'Excel (Pivot / VLOOKUP)',
    ],
  },
  {
    id: 'ml',
    title: 'ML / AI',
    tags: ['Scikit-learn', 'TensorFlow', 'YOLOv8', 'SwinV2', 'OpenCV', 'Hugging Face'],
  },
  {
    id: 'web',
    title: 'Web Development',
    tags: [
      'Responsive Design',
      'WordPress',
      'WooCommerce',
      'XAMPP',
      'REST APIs',
      'Bootstrap',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    tags: ['MySQL', 'MongoDB', 'Database Design', 'Query Optimization'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'VS Code', 'LaTeX', 'Linux', 'Core Web Vitals'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'skyhighes',
    role: 'Data Analyst Intern',
    organization: 'Skyhighes Technologies',
    period: 'April 2025 — October 2025',
    duration: '6 months',
    highlights: [
      'Analyzed structured and semi-structured datasets to identify trends and patterns, supporting data-driven decision-making across teams.',
      'Assisted in collecting, cleaning and validating datasets for multiple analytical projects, ensuring data accuracy and consistency for downstream analysis.',
      'Used Excel and SQL to perform data manipulation, generate reports, and support routine business analysis requirements.',
    ],
    tools: ['Excel', 'SQL', 'Power BI', 'Python'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fruit-plant-disease',
    name: 'Fruit & Plant Disease Detection System',
    tagline: 'Computer Vision · CNN / Transfer Learning',
    period: 'Nov 2025 – Feb 2026',
    summary:
      'An image-based deep learning system that classifies fruit and leaf samples as healthy or diseased, built to support early intervention for farmers.',
    meta: [
      { key: 'Task', value: 'Image Classification — multi-class disease detection' },
      {
        key: 'Pipeline',
        value:
          'Start → Data Collection → Preprocessing → Model Building → Prediction / Inference → UI → Deployment & Monitoring',
      },
      { key: 'Stack', tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'] },
    ],
    bullets: [
      'Designed and trained a CNN / transfer-learning model to extract features and distinguish healthy vs. diseased fruit and leaf images with high accuracy.',
      'Conducted exploratory data analysis on disease distribution and severity patterns to guide feature selection.',
      'Evaluated model performance using accuracy and training-vs-validation comparisons to ensure consistent predictions.',
      'Proposed a user-facing web/mobile interface so farmers can upload images and receive instant predictions.',
    ],
  },
  {
    id: 'ayurlife',
    name: 'AyurLife — AI Ayurvedic Wellness Platform',
    tagline: 'Applied AI · Personalized Health Recommendations',
    period: 'Apr 2025 – Oct 2025',
    summary:
      "An AI-powered platform that identifies a user's Ayurvedic dosha (Vata / Pitta / Kapha) through a guided assessment and connects them with verified Ayurvedic doctors for online consultation.",
    meta: [
      {
        key: 'Task',
        value: 'Rule-based + AI reasoning for personalized wellness recommendations',
      },
      {
        key: 'Flow',
        value:
          'User Registration → Dosha Quiz → Score Calculation → Personalized Report → Doctor Search & Booking → Follow-ups',
      },
      { key: 'Stack', tags: ['React', 'TypeScript', 'Vite', 'Gemini AI'] },
    ],
    bullets: [
      'Built a dosha assessment quiz that scores Vata, Pitta and Kapha and generates a personalized constitutional profile with diet and lifestyle guidance.',
      'Collected and structured lifestyle data — diet, sleep, stress, digestion and activity — into clean, analysis-ready inputs.',
      'Combined pattern recognition with rule-based reasoning inspired by Ayurvedic principles to personalize recommendations.',
      'Implemented a doctor directory, appointment booking and a live video-consultation dashboard for practitioners.',
    ],
  },
  {
    id: 'spamsensei',
    name: 'SpamSensei — Spam Detection ML App',
    tagline: 'NLP · Text Classification · Streamlit',
    period: 'Company Project',
    summary:
      'A Streamlit application that classifies SMS/email messages as spam or ham, comparing multiple machine learning models with live n-gram and TF-IDF analysis.',
    meta: [
      { key: 'Task', value: 'Binary Text Classification — Spam vs. Ham' },
      { key: 'Best Model', value: 'Naive Bayes — 84.6% accuracy (of 3 models trained)' },
      {
        key: 'Stack',
        tags: ['Python', 'Streamlit', 'Scikit-learn', 'NLTK', 'TF-IDF'],
      },
    ],
    bullets: [
      'Built a full pipeline: data collection → cleaning → preparation → visualization → insight generation, on the UCI SMS Spam Collection dataset.',
      'Applied text mining and NLP techniques including n-gram analysis (1–2 grams, up to 5,000 features) and TF-IDF vectorization.',
      'Trained and compared Naive Bayes, Logistic Regression and Random Forest, evaluated with accuracy, precision, recall and F1-score.',
      'Shipped a live prediction page with confidence gauges so users can classify any message in real time.',
    ],
  },
  {
    id: 'medicine-expiry',
    name: 'Medicine Expiry Reminder App',
    tagline: 'Android Application Development',
    period: 'Jul 2023 – Jan 2024',
    summary:
      'An Android app that helps users track medicine inventory and expiry dates, sending timely reminders to reduce waste and improve medication safety.',
    meta: [
      { key: 'Task', value: 'Inventory tracking + automated notification system' },
      { key: 'Stack', tags: ['Android', 'Java/Kotlin', 'Local Notifications'] },
    ],
    bullets: [
      'Designed inventory management for adding, updating and organizing medicines with manufacturing and expiry dates.',
      'Built an automated reminder system that alerts users before medicines expire.',
      'Created a clean, user-friendly interface for managing medicines and personalized reminders.',
      'Tested and validated expiry tracking accuracy and notification reliability end-to-end.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'btech',
    year: '2022–2026',
    degree: 'B.Tech, Artificial Intelligence & Data Science',
    institution: 'Datta Meghe Institute of Higher Education and Research (DMIHER), Wardha',
    score: 'CGPA 5.79 / 10',
  },
  {
    id: 'hsc',
    year: '2022',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Deepchand Choudhary Jr. College, Seloo',
    score: '59.33%',
  },
  {
    id: 'ssc',
    year: '2020',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Deepchand Chaudhari Vidyalaya, Seloo',
    score: '72.00%',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'edge-computing',
    name: 'Edge Computing',
    issuer: 'NPTEL · IIT Kanpur (Swayam)',
    date: 'Jan–Mar 2026 · 8-week course · Score 54% · 3 credits',
    caption: 'Edge Computing — NPTEL · IIT Kanpur (Swayam)',
    imageSrc: '/certificates/cert-1.jpg',
  },
  {
    id: 'nflq-2026',
    name: 'National Financial Literacy Quiz 2026 — College Round',
    issuer: 'NISM · SEBI',
    date: '2026 · Certificate of Participation (UG Category)',
    caption: 'National Financial Literacy Quiz 2026 — College Round — NISM · SEBI',
    imageSrc: '/certificates/cert-2.jpg',
  },
  {
    id: 'tata-cybersecurity',
    name: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Forage · Tata Group',
    date: 'Mar 2025 · IAM fundamentals, strategy & platform integration',
    caption: 'Cybersecurity Analyst Job Simulation — Forage · Tata Group',
    imageSrc: '/certificates/cert-3.jpg',
  },
  {
    id: 'tata-data-viz',
    name: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Forage · Tata Group',
    date: 'Mar 2025 · Framing, visuals & communicating insights',
    caption:
      'Data Visualisation: Empowering Business with Effective Insights — Forage · Tata Group',
    imageSrc: '/certificates/cert-4.jpg',
  },
  {
    id: 'vanderbilt-clinical',
    name: 'Data Management for Clinical Research',
    issuer: 'Vanderbilt University · Coursera',
    date: 'Oct 2025 · Course Certificate',
    caption: 'Data Management for Clinical Research — Vanderbilt University · Coursera',
    imageSrc: '/certificates/cert-5.jpg',
  },
  {
    id: 'imperial-r-health',
    name: 'Statistical Analysis with R for Public Health',
    issuer: 'Imperial College London · Coursera',
    date: 'Oct 2025 · Specialization · 4 courses',
    caption: 'Statistical Analysis with R for Public Health — Imperial College London · Coursera',
    imageSrc: '/certificates/cert-6.jpg',
  },
  {
    id: 'michigan-py4e',
    name: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan · Coursera',
    date: 'Mar 2024 · Course Certificate',
    caption:
      'Programming for Everybody (Getting Started with Python) — University of Michigan · Coursera',
    imageSrc: '/certificates/cert-7.jpg',
  },
  {
    id: 'michigan-py-funcs',
    name: 'Python Functions, Files, and Dictionaries',
    issuer: 'University of Michigan · Coursera',
    date: 'Mar 2024 · Course Certificate',
    caption: 'Python Functions, Files, and Dictionaries — University of Michigan · Coursera',
    imageSrc: '/certificates/cert-8.jpg',
  },
];
