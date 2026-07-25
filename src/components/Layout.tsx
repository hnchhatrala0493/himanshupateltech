import { useEffect, useState } from 'react';
import { ArrowUp, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../config/personal';
import { Container, SocialLinks } from './Shared';

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches));
  const location = useLocation();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => setOpen(false), [location]);
  const anchor = (item: string) => item === 'Home' ? '/' : `/#${item.toLowerCase()}`;
  return (
    <header className="site-header">
      <Container className="nav-wrap">
        <Link className="logo" to="/"><span>H</span>Himanshu<i>.</i></Link>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item} to={anchor(item)}>{item}</Link>)}
          <Link className="button nav-cta" to="/#contact">Hire me</Link>
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
