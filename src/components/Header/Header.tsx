import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'user' },
    { id: 'portfolio', label: 'Projects', icon: 'briefcase' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`header ${isMenuOpen ? 'header--open' : ''}`}>
        <div className="header__content">
          <div className="header__profile">
            <div className="profile-image">
              <img 
                src="/Images/me.png" 
                alt="Dhruv Tikhande" 
                className="profile-image__img"
              />
              <div className="profile-image__ring"></div>
            </div>
            <h1 className="header__name">Dhruv Tikhande</h1>
            <p className="header__title">B.Tech IT | Aspiring Engineer</p>
          </div>

          <nav className="header__nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-list__item">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'nav-link--active' : ''}`}
                  >
                    <span className="nav-link__text">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__social">
            <a 
              href="https://github.com/Dhruv-Tikhande" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
            <a 
              href="mailto:dhruvtikhande23915@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/dhruv-tikhande-3010b8296/" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a 
              href="/Resume.pdf" 
              download 
              className="resume-btn"
              aria-label="Download Resume"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className="mobile-header">
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;