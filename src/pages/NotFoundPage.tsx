import { Link } from 'react-router-dom';
import { Container, SectionHeading } from '../components/Shared';
export default function NotFoundPage() { return <div className="legal-page not-found"><Container><span className="big-404">404</span><SectionHeading eyebrow="Page not found" title="This page took a wrong turn." copy="The page you are looking for does not exist or may have been moved." /><div><Link className="button" to="/">Go home</Link><Link className="button secondary" to="/#projects">View projects</Link></div></Container></div>; }
