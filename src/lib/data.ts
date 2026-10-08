export const PROFILE = {
  name: 'Md. Hasibul Hossain', firstName: 'Hasibul', role: 'Front-End Developer',
  email: 'hasibhossain30293@gmail.com', phone: '01867769244', location: 'Dhaka, Bangladesh',
  github: 'https://github.com/Hasib30293', linkedin: 'https://linkedin.com/in/hasibul-hossain293', resume: '/resume.pdf',
  summary: 'CSE graduate skilled in building responsive, accessible web interfaces with HTML, CSS, JavaScript/TypeScript and React. I have taken three projects from Figma design to working code, including real-time messaging and Supabase authentication. Looking for a front-end internship where I can turn UI designs into clean interfaces, learn from code reviews, and work with backend teams.'
} as const;

export const SKILLS = [
  ['HTML', 'Frontend'], ['CSS', 'Frontend'], ['JavaScript', 'Languages'], ['TypeScript', 'Languages'], ['React', 'Frontend'], ['Tailwind CSS', 'Frontend'], ['Responsive design', 'Concepts'], ['Figma', 'Tools'], ['Node.js / Express', 'Backend'], ['MySQL', 'Databases'], ['Socket.IO', 'Backend'], ['SQL', 'Databases'], ['Git & GitHub', 'Tools'], ['MS Word / Excel / PowerPoint', 'Tools'], ['Java', 'Languages'], ['C', 'Languages'], ['C++', 'Languages'], ['Python', 'Languages'], ['OOP', 'Concepts'], ['Data Structures', 'Concepts'], ['Algorithms', 'Concepts']
].map(([name, family], index) => ({ name, family, number: String(index + 1).padStart(2, '0'), symbol: name.replace(/[^A-Za-z]/g, '').slice(0, 2) || '??' }));

export const PROJECTS = [
  { title: 'CookBook', kicker: 'Recipe Sharing Platform', date: 'Mar 2026 — Jun 2026', tech: 'React, TypeScript, Tailwind CSS', github: 'https://github.com/Tabassum-Sumaiya13/Online-Recipe-Sharing-Platform', video: 'https://www.youtube.com/watch?v=dbNmfc7hLMU', image: '', description: 'Designed the UI in Figma, then built it as a responsive, accessible React + TypeScript interface.', details: ['Recipe browsing', 'Step-by-step recipe views', 'User-submitted recipes', 'Supabase authentication'] },
  { title: 'Earn-N-Learn', kicker: 'Campus Skill-Share & Job Platform', date: 'Feb 2025 — Oct 2025', tech: 'React, TypeScript, Tailwind CSS, Node.js / Express, MySQL, Socket.IO', github: 'https://github.com/Hasib30293/Earn-N-Learn', video: 'https://www.youtube.com/watch?v=jBf_TcsDPIE', image: '', description: 'Built a full-stack marketplace for skill-sharing, job postings, and study-material exchange between students.', details: ['Skill-sharing marketplace', 'Job postings', 'Study-material exchange', 'Real-time messaging'] },
  { title: 'WorksLink', kicker: 'Collaborative Project Management Platform', date: 'Oct 2023 — Dec 2023', tech: 'Java, JavaFX, Maven, CSS', github: 'https://github.com/Hasib30293/WorksLink', video: '', image: '/workslink.png', description: 'Built a desktop app with customizable team workspaces, member management, and real-time progress indicators.', details: ['Team workspaces', 'Member management', 'Progress indicators', 'Applications, invoices and tasks'] }
];

export const EDUCATION = [
  { year: '2022 — 2026', title: 'BSc in Computer Science and Engineering', place: 'United International University', detail: 'CGPA: 3.8' },
  { year: '2019 — 2021', title: 'Higher Secondary Certificate', place: 'Nou-Bahini College, Chittagong', detail: 'GPA: 5.00' }
];

export const RESEARCH = [
  { title: 'Transferable Cell-Type Representation Framework Across Heterogeneous Spatial Proteomics Datasets', place: 'Bioinformatics · Ongoing' },
  { title: 'Low-Power Multi-Hop LoRa Network for Automated AWD Rice Irrigation', place: 'Wireless & Networking' }
];

export const NAV = ['about', 'skills', 'work', 'experience', 'achievements', 'contact'];
