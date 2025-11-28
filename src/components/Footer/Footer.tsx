import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__copyright">
            <p>
              © {currentYear} Dhruv Tikhande. Made with <Heart size={16} className="heart" /> in India
            </p>
          </div>
          
          <div className="footer__links">
            <a 
              href="https://html5up.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__link"
            >
              Design Inspiration: HTML5 UP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;