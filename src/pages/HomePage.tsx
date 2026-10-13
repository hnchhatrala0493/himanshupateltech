import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, CalendarDays, Check, Code2, Download, ExternalLink, FolderKanban, Github, Mail, MapPin, Phone, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiAmazonwebservices, SiCss3, SiDocker, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiRedis, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { ContactForm } from '../components/ContactForm';
import { HeroPortrait } from '../components/hero/HeroPortrait';
import { ButtonLink, Container, Reveal, SectionHeading, SocialLinks } from '../components/Shared';
import { personalInfo } from '../config/personal';
import { experience, projects, skills, technologies } from '../data/portfolio';

const techIcons = [SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiGithub, SiPostgresql, SiDocker, SiAmazonwebservices, SiVercel, SiReact, SiNodedotjs];
const portfolioStats = [
  [BriefcaseBusiness, '1+', 'Years Experience'],
  [FolderKanban, '3+', 'Projects'],
  [Target, '100%', 'Dedication'],
  [Star, '4.5★', 'Rating'],
] as const;
const portfolioStack = [
  [SiMongodb, 'MongoDB', 'Database'],
  [SiExpress, 'Express.js', 'Backend'],
  [SiReact, 'React.js', 'Frontend'],
  [SiNodedotjs, 'Node.js', 'Runtime'],
  [SiTypescript, 'TypeScript', 'Language'],
  [SiTailwindcss, 'Tailwind CSS', 'Styling'],
  [SiPostgresql, 'PostgreSQL', 'Database'],
  [SiRedis, 'Redis', 'Database / Cache'],
] as const;

export default function HomePage() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return <>
    <Helmet><title>Himanshu Chhatrala | MERN Stack Developer</title><meta name="description" content="Portfolio of Himanshu Chhatrala, a MERN Stack Developer specializing in React, Node.js, MongoDB, TypeScript, SaaS, and scalable web development." /><link rel="canonical" href="https://himanshuchhatrala.dev/" /></Helmet>

    <section id="home" className="hero">
      <div className="hero-orb one" /><div className="hero-orb two" />
      <Container className="hero-grid">
        <Reveal className="hero-copy">
          <span className="hello"><span>👋</span> Hello, I’m</span>
          <h1>{personalInfo.firstName}<br /><em>{personalInfo.lastName}</em></h1>
          <p className="role">{personalInfo.role} <i /> {personalInfo.tagline}</p>
          <p className="hero-lede">I build scalable, user-friendly web applications with clean code, modern architecture, and excellent user experiences.</p>
          <div className="hero-buttons"><ButtonLink href={personalInfo.resumeUrl}><Download size={17} /> Download CV</ButtonLink><ButtonLink href="#contact" secondary>Let’s talk</ButtonLink></div>
          <div className="connect"><span>Connect with me</span><SocialLinks /></div>
        </Reveal>
        <HeroPortrait />
      </Container>
      <Container><Reveal className="portfolio-stats">{portfolioStats.map(([Icon, value, label]) => <div className="portfolio-stat" key={label}><span className="stat-icon"><Icon size={20} /></span><div><strong>{value}</strong><span>{label}</span></div></div>)}</Reveal></Container>
      <Container><div className="tech-stack-panel"><div className="tech-stack-heading"><span className="eyebrow"><i />Tech stack</span><h2>Technologies I work with</h2><p>Modern tools and technologies I use to build scalable and efficient solutions.</p></div><Reveal className="portfolio-stack">{portfolioStack.map(([Icon, name, category]) => <div className="stack-card" tabIndex={0} key={name}><span><Icon /></span><div><strong>{name}</strong><small>{category}</small></div></div>)}</Reveal></div></Container>
    </section>

    <section id="about"><Container className="about-grid"><Reveal><SectionHeading eyebrow="About me" title="I make complex ideas feel simple." copy="I am a MERN Stack Developer with a passion for building modern, responsive, scalable, and user-friendly web applications." align="left" /><p>I enjoy converting complex requirements into reliable, intuitive digital solutions—from precise interfaces to dependable APIs and data models.</p><div className="checks">{['Clean Code and Best Practices', 'RESTful API Development', 'Database Design and Optimization', 'Responsive UI Development', 'Problem Solving and Debugging', 'SaaS Application Architecture'].map((x) => <span key={x}><Check size={15} />{x}</span>)}</div><ButtonLink href={personalInfo.resumeUrl} secondary>View my resume</ButtonLink></Reveal><Reveal className="about-visual"><img src="/images/developer-workspace.png" alt="Professional developer desk with code interfaces" loading="lazy" /><div><BriefcaseBusiness /><strong>Product-minded</strong><span>From idea to reliable release</span></div></Reveal></Container></section>

    <section id="skills" className="tinted"><Container><SectionHeading eyebrow="Technical toolkit" title="Skills that turn ideas into products" copy="A practical full-stack toolkit, grounded in strong frontend craft and reliable backend engineering." /><div className="skills-grid"><Reveal className="proficiency card">{skills.map(([name, percent]) => <div className="skill" key={name}><div><span>{name}</span><strong>{percent}%</strong></div><div className="bar"><motion.i initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} viewport={{ once: true }} transition={{ duration: .8 }} /></div></div>)}</Reveal><Reveal className="technology-grid">{technologies.map((tech, index) => { const Icon = techIcons[index]; return <div className="technology card" key={tech}><Icon /><span>{tech}</span></div>; })}</Reveal></div></Container></section>

    <section id="projects"><Container><SectionHeading eyebrow="Featured projects" title="Selected work, built with purpose" copy="Products shaped around real workflows, thoughtful architecture, and measurable usefulness." /><div className="filters" role="group" aria-label="Filter projects">{['All', 'SaaS', 'AI Tools', 'Mobile Apps', 'Personal'].map((x) => <button onClick={() => setFilter(x)} className={filter === x ? 'active' : ''} key={x}>{x}</button>)}</div><motion.div layout className="project-grid">{visible.map((project) => <motion.article layout className="project-card card" key={project.slug}><div className="project-art"><img src={project.image} alt={project.imageAlt} loading="lazy" /><span>{project.label}</span></div><div className="project-body"><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div><div className="project-actions"><Link to={`/projects/${project.slug}`}>View case study <ArrowRight size={15} /></Link><a href={personalInfo.socialLinks.github} aria-label={`${project.title} on GitHub`}><Github size={18} /></a></div></div></motion.article>)}</motion.div></Container></section>

    <section className="dark-showcase"><Container className="showcase-grid"><Reveal><span className="eyebrow light"><i />Behind the build</span><h2>Engineering clarity into every layer.</h2><p>From accessible interfaces to secure APIs and deliberate data models, I build systems that are easier to use, maintain, and grow.</p><ButtonLink href="#contact">Start a conversation</ButtonLink></Reveal><Reveal><img src="/images/developer-workspace.png" alt="Indigo developer workspace showcase" loading="lazy" /></Reveal></Container></section>

    <section id="experience"><Container><SectionHeading eyebrow="Experience" title="My professional journey" /><div className="timeline">{experience.map((item) => <Reveal className="timeline-item" key={item.role}><div className="timeline-dot" /><article className="experience-card card"><div className="experience-meta"><span className="experience-date"><CalendarDays size={14} />{item.duration}</span>{item.current && <span className="current-badge"><i />Current</span>}</div><small>{item.company}</small><h3>{item.role}</h3><p>{item.description}</p><div className="experience-tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></article></Reveal>)}</div></Container></section>

    <section className="cta-section"><Container><div className="cta"><div><span>Have a project in mind?</span><h2>Let’s build something meaningful together.</h2><p>Tell me what you’re working on, and let’s find the clearest path from idea to a dependable product.</p></div><ButtonLink href="#contact">Get in touch</ButtonLink><div className="cta-shape"><Code2 /></div></div></Container></section>

    <section id="contact"><Container><SectionHeading eyebrow="Contact" title="Let’s start with a conversation" copy="Have a project, role, or collaboration in mind? Send a note and I’ll get back to you." /><div className="contact-grid"><Reveal className="contact-details"><h3>Contact details</h3><p>I’m based in Ahmedabad and open to thoughtful product work, full-stack roles, and technical collaborations.</p>{[[Mail, 'Email', personalInfo.email, `mailto:${personalInfo.email}`], [Phone, 'Phone', personalInfo.phone, 'tel:+918780870844'], [MapPin, 'Location', personalInfo.location, '#']].map(([Icon, label, value, href]) => <a href={String(href)} key={String(label)}><span><Icon size={19} /></span><div><small>{String(label)}</small><strong>{String(value)}</strong></div><ExternalLink size={15} /></a>)}</Reveal><Reveal><ContactForm /></Reveal></div></Container></section>
  </>;
}
