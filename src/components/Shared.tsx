import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import type { ReactNode } from 'react';
import { personalInfo } from '../config/personal';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, copy, align = 'center' }: { eyebrow: string; title: string; copy?: string; align?: 'center' | 'left' }) {
  return (
    <div className={`section-heading ${align}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55 }}>{children}</motion.div>;
}

export function SocialLinks() {
  const links = [
    [personalInfo.socialLinks.github, Github, 'GitHub'],
    [personalInfo.socialLinks.linkedin, Linkedin, 'LinkedIn'],
    [personalInfo.socialLinks.youtube, Youtube, 'YouTube'],
    [`mailto:${personalInfo.email}`, Mail, 'Email'],
  ] as const;
  return <div className="social-links">{links.map(([href, Icon, label]) => <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon size={18} /></a>)}</div>;
}

export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? 'secondary' : ''}`} href={href}>{children}<ArrowUpRight size={17} /></a>;
}
