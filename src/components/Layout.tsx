import { useEffect, useState } from 'react';
import { ArrowUp, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigation } from '../config/personal';
import { Container, SocialLinks } from './Shared';

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches));
  const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1) || 'home');
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (location.pathname !== '/') { setActiveSection(''); return; }
    const sectionIds = navigation.map((item) => item.toLowerCase());
    let sectionObserver: IntersectionObserver | undefined;
    let mountObserver: MutationObserver | undefined;
    const observeSections = () => {
      const sections = sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
      if (!sections.length) return false;
      sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .1, .25, .5] });
      sections.forEach((section) => sectionObserver?.observe(section));
      return true;
    };
    if (!observeSections()) {
      const main = document.getElementById('main');
      if (main) {
        mountObserver = new MutationObserver(() => {
          if (observeSections()) mountObserver?.disconnect();
        });
        mountObserver.observe(main, { childList: true, subtree: true });
      }
    }
    return () => { sectionObserver?.disconnect(); mountObserver?.disconnect(); };
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    const id = location.hash.slice(1);
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (!section) return false;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      return true;
    };
    if (scrollToSection()) return;
    const main = document.getElementById('main');
    if (!main) return;
    const observer = new MutationObserver(() => {
      if (scrollToSection()) observer.disconnect();
    });
    observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location.hash, location.pathname]);
  const anchor = (item: string) => `/#${item.toLowerCase()}`;
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    event.preventDefault();
    const id = item.toLowerCase();
    setOpen(false);
    setActiveSection(id);
    navigate(anchor(item));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <header className="site-header">
      <Container className="nav-wrap">
        <Link className="logo" to="/"><span>H</span>Himanshu<i>.</i></Link>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {navigation.map((item) => { const id = item.toLowerCase(); return <Link className={activeSection === id ? 'active' : undefined} aria-current={activeSection === id ? 'location' : undefined} onClick={(event) => handleNavigation(event, item)} key={item} to={anchor(item)}>{item}</Link>; })}
          <Link className="button nav-cta" onClick={(event) => handleNavigation(event, 'Contact')} to="/#contact">Hire me</Link>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Use ${dark ? 'light' : 'dark'} theme`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </Container>
    </header>
  );
}

export function Footer() {
  return <footer><Container className="footer-grid"><div><Link className="logo" to="/"><span>H</span>Himanshu<i>.</i></Link><p>Building dependable digital products with care.</p></div><SocialLinks /><div className="legal"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></Container><Container className="copyright">© 2026 Himanshu Chhatrala. All rights reserved.</Container></footer>;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /><button className="back-top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={19} /></button></>;
}
