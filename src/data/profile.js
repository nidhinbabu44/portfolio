// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Nidhin Babu',
  initials: 'NB',
  headline: 'Software Engineer',
  roles: ['MERN Stack Developer', 'LIMS Implementation Specialist', 'Full-Stack Engineer', 'AI & ML Enthusiast'],
  location: 'Dubai, United Arab Emirates',
  // Drop a photo in /public (e.g. /public/nidhin.jpg) and set photo: '/nidhin.jpg'
  photo: null,
  intro:
    'I build full-stack web and mobile apps with React, Node.js, Java and SQL. I also implement LabVantage LIMS, so I can turn laboratory and clinical workflows into software that people actually use.',
  about: [
    "I'm a detail-oriented software engineer. I design and build modern web and mobile applications, from responsive frontends to scalable backend services and database systems.",
    'I work mainly in full-stack development with React.js, Node.js, Core Java and MS-SQL. I also implement LabVantage LIMS as a Business Analyst and Implementation Specialist. Because I do both, I can build the application myself and also translate complex business and clinical workflows into systems that work.',
    "I've built full-stack applications, integrated payment gateways and RESTful APIs, written custom Java integrations for LIMS platforms and delivered responsive UI/UX on web and mobile. I also follow AI and machine learning closely and look for ways they can make software faster, smarter and easier to use.",
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/nidhinbabu44/',
    // Fill these in to show them on the site:
    email: '',
    github: 'https://github.com/nidhinbabu44',
    phone: '',
    resume: '', // e.g. '/Nidhin_Babu_CV.pdf' placed in /public
  },
  languages: [
    { name: 'English', level: 'Full professional' },
    { name: 'Hindi', level: 'Professional working' },
  ],
};

export const stats = [
  { value: '2019', label: 'Shipping code since' },
  { key: 'projects', value: '', label: 'Projects built' }, // value filled from projects below
  { value: '3', label: 'Countries worked in' },
  { value: '4', label: 'Certifications' },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Virtus Trading Limited',
    companyNote: 'A Virtus Holding Company',
    type: 'Full-time',
    period: 'Jan 2026 – Present',
    location: 'Dubai, UAE',
    groups: [
      {
        title: 'Software Development | MERN Stack',
        points: [
          'Full-stack development with MongoDB, Express.js, React.js and Node.js, building web applications for drug lab projects.',
        ],
      },
      {
        title: 'LIMS Implementation | LabVantage',
        points: [
          'Business Analyst and Implementation Specialist for LabVantage LIMS at Emirates Drug Establishment (EDE): requirements analysis, system configuration, UAT and go-live support.',
        ],
      },
    ],
    clients: ['Emirates Drug Establishment'],
    tags: ['React.js', 'Node.js', 'MongoDB', 'LabVantage', 'Project Management'],
  },
  {
    role: 'Software Engineer (LIMS Specialist), Full Stack',
    company: 'Al Essa Group',
    type: 'Full-time',
    period: 'Aug 2023 – Present',
    location: 'Kuwait',
    points: [
      'Developed and maintained full-stack web applications using React.js (Redux, Hooks, Context API) and Node.js (Express).',
      'Integrated the KNET payment gateway into a customer-facing web portal, enabling secure end-to-end online transactions.',
      'Designed and optimized MS-SQL databases: complex queries, stored procedures, query tuning and indexing.',
      'Extended LIMS functionality with custom Action classes in Core Java for seamless system integrations.',
      'Automated network-to-server file mapping with custom shell scripts, reducing manual effort and errors.',
      'Partnered with QA and DevOps to support CI/CD pipelines and stabilize deployment environments.',
      'Administered server operations: log monitoring, health checks, maintenance and remote access for internal users.',
    ],
    clients: ['Ministry of Health: Kuwait Drug Control Sample Portal', 'Ministry of Interior: Marshal App', 'Ministry of Electricity & Water: LIMS Balancing'],
    tags: ['React.js', 'Redux', 'Node.js', 'MS-SQL', 'Core Java', 'LIMS', 'KNET'],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Angles Tech Solutions',
    type: 'Internship',
    period: 'Jun 2023 – Aug 2023',
    location: 'Kerala, India · Remote',
    points: [
      'Developed a full-stack Reservation Management mobile app with Flutter on the frontend and Node.js + MySQL on the backend, covering the end-to-end booking workflow.',
    ],
    tags: ['Flutter', 'Node.js', 'MySQL'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Kyurius Tech Studios',
    type: 'Full-time',
    period: 'May 2022 – Jun 2023',
    location: 'Bengaluru, India',
    points: [
      'Built responsive, high-performance interfaces with React.js, Next.js and React Native across web and mobile.',
      'Integrated RESTful APIs and implemented robust client-side validation for data integrity.',
      'Optimized performance and cross-browser compatibility, improving load times and UI consistency.',
      'Delivered UI/UX enhancements that improved usability and visual polish.',
    ],
    clients: ['CLO Technologies', 'Art Of Living', 'Chempure'],
    tags: ['React.js', 'Next.js', 'React Native', 'Material-UI', 'REST APIs'],
  },
  {
    role: 'Java Developer Intern',
    company: 'AOL Solutions',
    type: 'Full-time',
    period: 'Feb 2020 – Aug 2020',
    location: 'Kerala, India',
    points: ['Developed and maintained ERP software solutions in Core Java supporting critical business operations.'],
    tags: ['Java', 'MySQL'],
  },
  {
    role: 'Android Developer Intern',
    company: 'Microtech Software Solutions',
    type: 'Full-time',
    period: 'Dec 2019 – Feb 2020',
    location: 'Kerala, India',
    points: ['Built native Android apps in Android Studio (Java) with SQLite for reliable local data management.'],
    tags: ['Android', 'Java', 'SQLite'],
  },
  {
    role: 'Web Developer',
    company: 'Rayuwa Home Health Solutions',
    type: 'Full-time',
    period: 'May 2019 – Nov 2019',
    location: 'Bengaluru, India',
    points: [
      'Designed and developed responsive pages with Bootstrap and CSS Flexbox, working mobile-first.',
      'Coordinated with backend teams for seamless API integration and deployments.',
    ],
    tags: ['HTML', 'CSS', 'Bootstrap', 'Photoshop'],
  },
];

// category drives the filter chips on the Projects section
export const projects = [
  {
    title: 'Sample Request Form',
    period: 'Mar 2025 – May 2025',
    org: 'Al Essa Group · KNPC',
    category: 'LIMS',
    description:
      'A web-based form module for KNPC that handles internal sample submission, approval flows and attachment uploads. Integrated with backend APIs for automated notifications and status tracking.',
    tags: ['React', 'Node.js', 'REST APIs'],
    featured: true,
  },
  {
    title: 'Kuwait Drug Lab Sample Portal',
    period: 'Oct 2024 – Feb 2025',
    org: 'Al Essa Group · Ministry of Health',
    category: 'LIMS',
    description:
      'A central portal for submitting samples to the Kuwait Drug Lab with a seamless, secure submission workflow.',
    tags: ['React', 'Node.js', 'MS-SQL'],
    featured: true,
  },
  {
    title: 'Highcharts Lab Dashboard',
    period: 'Aug 2023 – Jan 2024',
    org: 'Al Essa Group · KNPC',
    category: 'Web',
    description:
      'An interactive dashboard of lab data trends, performance metrics and statistical summaries. Users can filter by date range, sample type and lab status.',
    tags: ['React', 'Highcharts', 'MS-SQL'],
    repo: 'https://github.com/nidhinbabu44/HighChartApp',
    featured: true,
  },
  {
    title: 'Web LIMS',
    period: 'Aug 2023 – Oct 2023',
    org: 'Al Essa Group',
    category: 'LIMS',
    description:
      'Tracks and manages laboratory samples, results and workflows, with real-time data entry and links to external instruments. It improves lab efficiency and regulatory compliance.',
    tags: ['React.js', 'Node.js', 'SQL'],
  },
  {
    title: 'Sample Point',
    period: 'Dec 2024 – Mar 2025',
    org: 'Al Essa Group',
    category: 'LIMS',
    description: 'Registers sampling points and their testing frequency.',
    tags: ['React', 'Node.js'],
  },
  {
    title: 'Corrolab Request',
    period: 'Dec 2024 – Feb 2025',
    org: 'Al Essa Group · WRDC',
    category: 'LIMS',
    description: 'Manages corrosion lab requests and test tracking for WRDC users.',
    tags: ['React', 'Node.js', 'MS-SQL'],
  },
  {
    title: 'Automated File Sorter',
    period: 'Jul 2024 – Nov 2024',
    org: 'Al Essa Group',
    category: 'Tools',
    description:
      'A utility that sorts large volumes of instrument-generated data files so they are easier to manage.',
    tags: ['Shell', 'Automation'],
  },
  {
    title: 'Reservation Management App',
    period: 'Jul 2023 – Aug 2023',
    org: 'Angles Tech Solutions',
    category: 'Mobile',
    description:
      'A Flutter mobile app with a Node.js backend for managing ticket reservations for a popular event series in Bahrain.',
    tags: ['Flutter', 'Node.js', 'MySQL'],
    repo: 'https://github.com/nidhinbabu44/ReservationApp_Flutter',
    repo2: { label: 'Backend', url: 'https://github.com/nidhinbabu44/Reservation_Backend' },
  },
  {
    title: 'IIQDSC: Depth Sensing QR Validator',
    period: 'May 2022 – Oct 2022',
    org: 'Mount Zion College · MCA Main Project',
    category: 'AI / ML',
    description:
      'Checks printed QR codes with a depth-sensing camera. It analyzes barcode depth and clarity to find printing defects such as damaged nozzles or misaligned prints.',
    tags: ['Computer Vision', 'Depth Sensing', 'Machine Learning'],
  },
  {
    title: 'CO-LIFE: Covid Life Management',
    period: 'May 2021 – Oct 2021',
    org: 'Mount Zion College · MCA Mini Project',
    category: 'Web',
    description:
      'A healthcare portal for patient records, vaccination history and dose tracking. Providers can register patients and manage COVID-related medical data.',
    tags: ['Web', 'Database'],
  },
  // Personal / open-source work from github.com/nidhinbabu44
  {
    title: 'IronGate Gym System',
    period: '2026',
    org: 'Personal project',
    category: 'Open Source',
    description: 'Software that fitness centres can use to run day-to-day operations.',
    tags: ['JavaScript'],
    repo: 'https://github.com/nidhinbabu44/irongate-gym-system',
  },
  {
    title: 'AI & ML Internship',
    period: '2025',
    org: 'Logix Space Technologies',
    category: 'Open Source',
    description: 'Code from my AI and machine learning internship.',
    tags: ['Python', 'Machine Learning'],
    repo: 'https://github.com/nidhinbabu44/AI-ML_Intership',
  },
  {
    title: 'Netflix Clone',
    period: '2024',
    org: 'Personal project',
    category: 'Open Source',
    description: "A complete clone of Netflix's app, built in React for learning.",
    tags: ['React', 'JavaScript'],
    repo: 'https://github.com/nidhinbabu44/NetFlix-App',
  },
  {
    title: 'Personal Website (v1)',
    period: '2025',
    org: 'Personal project',
    category: 'Open Source',
    description: 'The first version of my personal website, built for study purposes.',
    tags: ['React', 'Vercel'],
    repo: 'https://github.com/nidhinbabu44/My_Portfolio',
    live: 'https://my-portfolio-hazel-chi-86.vercel.app',
  },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Java', 'SQL', 'C++', 'C', 'HTML', 'CSS'] },
  {
    group: 'Frameworks & Libraries',
    items: ['React.js', 'Node.js', 'Express', 'Next.js', 'React Native', 'Redux', 'Flutter', 'Material UI', 'Bootstrap', 'Android'],
  },
  { group: 'Databases', items: ['MS-SQL', 'MySQL', 'MongoDB', 'SQLite'] },
  { group: 'Domain', items: ['LabVantage LIMS', 'Healthcare IT', 'Business Analysis', 'UAT & Go-live', 'Payment Gateways'] },
  { group: 'AI', items: ['Generative AI', 'Prompt Engineering', 'Machine Learning', 'LLMs', 'Automation'] },
  { group: 'Environments', items: ['Linux / Ubuntu', 'Windows', 'macOS', 'CI/CD', 'Shell Scripting'] },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Mount Zion College of Engineering and Technology',
    period: '2020 – 2022',
    grade: 'A (First Class)',
    note: 'Placed at Kyurius Tech Studios. Projects: CO-Life and a depth-sensing camera for industrial quality checks.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'St Thomas College, Thavalappara, Konni',
    period: '2016 – 2019',
    grade: 'A',
    note: 'Projects: Advanced Software Management System and Advanced Attendance Management System.',
  },
  {
    degree: 'Higher Secondary: Computer Science',
    school: 'NSS HSS Thattayil',
    period: '2014 – 2016',
    grade: 'A',
  },
];

export const certifications = [
  {
    title: 'One Million Prompters: AI, Generative AI & Prompt Engineering',
    issuer: 'Dubai Future Foundation',
    date: 'Jun 2026',
  },
  { title: 'AI & Machine Learning', issuer: 'Logix Space Technologies', date: 'Jul 2025', id: 'LUC05AI0788017' },
  { title: 'MERN Stack with AWS Hosting', issuer: 'Logix Space Technologies', date: 'May 2022', id: 'LST2022050029' },
  { title: 'Android App Development', issuer: 'Logix Space Technologies', date: 'Feb 2022' },
];

// Keep the projects stat in sync with the list above
stats.find((s) => s.key === 'projects').value = String(projects.length);
