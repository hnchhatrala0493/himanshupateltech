import type { Experience, Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'employee-management-system', title: 'Employee Management System', category: 'SaaS', label: 'Workforce operations',
    description: 'A complete platform for attendance, leave, tasks, roles, and company administration.',
    longDescription: 'A scalable employee operations platform designed to give HR teams and managers one reliable source of truth.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'], accent: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
    image: '/projects/ems-dashboard.webp', imageAlt: 'Employee Management System dashboard preview',
    features: ['Role-based workspaces', 'Attendance and leave workflows', 'Task tracking', 'Payroll-ready reporting'],
    challenge: 'Complex permissions and fragmented employee operations made everyday administration slow and error-prone.',
    result: 'A focused, responsive workflow that centralizes employee data and makes recurring actions easy to audit.',
  },
  {
    slug: 'ai-testpilot', title: 'AI TestPilot', category: 'AI Tools', label: 'AI quality platform',
    description: 'AI-powered repository analysis, test generation, execution, bug reports, and recommendations.',
    longDescription: 'A modern quality engineering workspace that turns source context into practical test coverage and trackable defects.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Playwright'], accent: 'linear-gradient(135deg,#050b1b,#4f46e5)',
    image: '/projects/ai-testpilot-dashboard.webp', imageAlt: 'AI TestPilot automation testing dashboard preview',
    features: ['Repository analysis', 'Test case generation', 'API and UI execution', 'Structured bug reporting'],
    challenge: 'Engineering teams lose time moving between code review, test planning, execution, and issue creation.',
    result: 'One workflow connects those stages and gives teams clear, actionable quality signals.',
  },
  {
    slug: 'visitor-management-system', title: 'Visitor Management', category: 'Mobile Apps', label: 'Mobile + Web',
    description: 'Guest registration, approval workflows, notifications, access tracking, and reporting.',
    longDescription: 'A secure visitor journey across reception, employee approvals, live access state, and compliance reporting.',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Socket.IO'], accent: 'linear-gradient(135deg,#312e81,#8b5cf6)',
    image: '/projects/vms-dashboard.webp', imageAlt: 'Visitor Management System web and mobile dashboard preview',
    features: ['Fast guest check-in', 'Real-time approvals', 'Employee notifications', 'Visit history'],
    challenge: 'Manual registers provide little security context and make visitor coordination difficult.',
    result: 'A clear live view of guests with faster approvals and more useful historical records.',
  },
];

export const skills = [
  ['React.js', 95], ['Node.js', 90], ['Express.js', 90],
  ['MongoDB', 85], ['TypeScript', 80], ['Tailwind CSS', 90],
] as const;

export const technologies = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'PostgreSQL', 'Docker', 'AWS', 'Vercel', 'React', 'Node.js'];

export const experience: Experience[] = [
  { role: 'MERN Stack Developer', company: 'Xpertnest Solution', duration: 'May 2025 — Present', description: 'Working as a MERN Stack Developer, developing and maintaining scalable web applications, REST APIs, frontend interfaces, backend services, database integrations, debugging, and application improvements.', technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST API'], current: true },
  { role: 'MERN Stack Developer Intern', company: 'Crest Infotech', duration: 'Nov 2024 — Apr 2025', description: 'Worked as a MERN Stack Developer Intern, gaining hands-on experience in developing modern web applications using MongoDB, Express.js, React.js, and Node.js.', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
];
