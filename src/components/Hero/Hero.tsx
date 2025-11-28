import React, { useEffect, useState } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Engineering student passionate about coding',
    'AI & ML enthusiast building the future',
    'Web developer creating digital experiences',
    'Always learning, building, and innovating'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts]);

  // const scrollToPortfolio = () => {
  //   const portfolioSection = document.getElementById('portfolio');
  //   if (portfolioSection) {
  //     portfolioSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__bg-image"></div>
        <div className="hero__bg-overlay"></div>
      </div>
      
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Hi! I'm <span className="hero__name">Dhruv Tikhande</span>
          </h1>
          <p className="hero__subtitle">
            <span className="typing-text">{displayText}</span>
            {/* <span className="cursor">|</span> */}
          </p>
        </div>
        
        <div className="hero__actions">
          {/* <button onClick={scrollToPortfolio} className="hero__cta">
            <span>View My Projects</span>
            <ArrowDown className="hero__cta-icon" size={20} />
          </button> */}
          <button onClick={scrollToAbout} className="hero__cta">
            <span>About Me</span>
            <ArrowDown className="hero__cta-icon" size={20} />
          </button>
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <ChevronDown className="scroll-arrow" size={24} />
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;