import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Container, SectionHeading } from '../components/Shared';
import { projects } from '../data/portfolio';

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return <div className="legal-page"><Container><SectionHeading eyebrow="404" title="Project not found" /><Link className="button" to="/#projects"><ArrowLeft />Back to projects</Link></Container></div>;
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <div className="project-page"><Helmet><title>{project.title} | Himanshu Chhatrala</title><meta name="description" content={project.description} /></Helmet><Container><Link className="back-link" to="/#projects"><ArrowLeft size={16} />All projects</Link><div className="project-hero" style={{ background: project.accent }}><span>{project.category}</span><h1>{project.title}</h1><p>{project.longDescription}</p></div><div className="case-grid"><article><SectionHeading eyebrow="The challenge" title="Problem and approach" align="left" /><p>{project.challenge}</p><h3>Proposed solution</h3><p>{project.longDescription}</p><h3>Outcome</h3><p>{project.result}</p></article><aside className="card"><h3>Core features</h3>{project.features.map((x) => <span key={x}><Check size={15} />{x}</span>)}<h3>Technology</h3><div className="tags">{project.technologies.map((x) => <span key={x}>{x}</span>)}</div></aside></div><div className="project-pager"><Link to={`/projects/${previous.slug}`}><ArrowLeft />{previous.title}</Link><Link to={`/projects/${next.slug}`}>{next.title}<ArrowRight /></Link></div></Container></div>;
}
