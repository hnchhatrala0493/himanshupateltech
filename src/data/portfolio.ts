import type { Experience, Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'employee-management-system', title: 'Employee Management System', category: 'SaaS', label: 'Workforce operations',
    description: 'A complete platform for attendance, leave, tasks, roles, and company administration.',
    longDescription: 'A scalable employee operations platform designed to give HR teams and managers one reliable source of truth.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'], accent: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
    features: ['Role-based workspaces', 'Attendance and leave workflows', 'Task tracking', 'Payroll-ready reporting'],
    challenge: 'Complex permissions and fragmented employee operations made everyday administration slow and error-prone.',
    result: 'A focused, responsive workflow that centralizes employee data and makes recurring actions easy to audit.',
  },
  {
    slug: 'ai-testpilot', title: 'AI TestPilot', category: 'AI Tools', label: 'AI quality platform',
    description: 'AI-powered repository analysis, test generation, execution, bug reports, and recommendations.',
    longDescription: 'A modern quality engineering workspace that turns source context into practical test coverage and trackable defects.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Playwright'], accent: 'linear-gradient(135deg,#050b1b,#4f46e5)',
    features: ['Repository analysis', 'Test case generation', 'API and UI execution', 'Structured bug reporting'],
    challenge: 'Engineering teams lose time moving between code review, test planning, execution, and issue creation.',
    result: 'One workflow connects those stages and gives teams clear, actionable quality signals.',
  },
  {
    slug: 'visitor-management-system', title: 'Visitor Management', category: 'Mobile Apps', label: 'Mobile + Web',
    description: 'Guest registration, approval workflows, notifications, access tracking, and reporting.',
    longDescription: 'A secure visitor journey across reception, employee approvals, live access state, and compliance reporting.',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Socket.IO'], accent: 'linear-gradient(135deg,#312e81,#8b5cf6)',
    features: ['Fast guest check-in', 'Real-time approvals', 'Employee notifications', 'Visit history'],
    challenge: 'Manual registers provide little security context and make visitor coordination difficult.',
    result: 'A clear live view of guests with faster approvals and more useful historical records.',
  },
  {
    slug: 'portfolio-website', title: 'Portfolio Website', category: 'Personal', label: 'Digital presence',
    description: 'A responsive, animated portfolio with SEO, project storytelling, and an accessible contact flow.',
    longDescription: 'A premium developer brand system built around clarity, proof of work, and effortless exploration.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'], accent: 'linear-gradient(135deg,#4c5cff,#7c3aed)',
    features: ['Responsive design system', 'Accessible interactions', 'Dynamic project routes', 'SEO metadata'],
    challenge: 'A developer portfolio must balance personality, technical detail, speed, and recruiter-friendly navigation.',
    result: 'A polished, fast experience that presents capabilities and project outcomes without visual clutter.',
  },
];

export const skills = [
  ['React.js', 95], ['Node.js', 90], ['Express.js', 90],
  ['MongoDB', 85], ['TypeScript', 80], ['Tailwind CSS', 90],
] as const;

export const technologies = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'PostgreSQL', 'Docker', 'AWS', 'Vercel', 'React', 'Node.js'];

export const experience: Experience[] = [
  { role: 'MERN Stack Developer', company: 'Technical Integration / AFT-MFT', duration: '2024 — Present', description: 'Building web applications and APIs, supporting technical integrations, production systems, and enterprise file-transfer workflows.' },
  { role: 'Junior Developer', company: 'IT Solutions', duration: '2023 — 2024', description: 'Developed and maintained applications with React, Node.js, Express, MongoDB, and modern frontend tooling.' },
  { role: 'Intern Developer', company: 'Web Development', duration: '2022 — 2023', description: 'Built full-stack foundations while contributing to frontend, backend, and database implementation.' },
];
