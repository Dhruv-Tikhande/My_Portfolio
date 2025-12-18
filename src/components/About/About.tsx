import React from 'react';
import { Code, Globe, Brain, Gamepad2, Database, PenTool } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const handleSkillClick = (skillTitle: string) => {
    const skillToFilterMap: { [key: string]: string } = {
      'AI & Machine Learning': 'ml',
      'Web Development': 'web',
      'Game Development': 'game',
      'Database Management': 'software'
    };
    
    const filterValue = skillToFilterMap[skillTitle] || 'all';
    
    window.dispatchEvent(new CustomEvent('skillFilterChange', { detail: { filter: filterValue } }));
    
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      icon: Code,
      title: 'Programming',
      description: 'C, Java, JavaScript, Python',
      color: '#3B82F6'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript, React, Responsive Design',
      color: '#10B981'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Machine Learning, Data Analysis, AI Applications',
      color: '#8B5CF6'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Unity, C#, 2D/3D Game Design',
      color: '#F59E0B'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database Design, SQL, Data Modeling',
      color: '#EF4444'
    },
    {
      icon: PenTool,
      title: 'Design Tools',
      description: 'AutoCAD, UI/UX Basics, Prototyping',
      color: '#EC4899'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <header className="about__header">
          <h2 className="about__title">About Me</h2>
        </header>
        
        <div className="about__content">
          <div className="about__intro">
            <div className="about__image">
              <img 
                src="/Images/me2.png" 
                alt="Dhruv Tikhande" 
              />
              <div className="about__image-overlay"></div>
            </div>
            
            <div className="about__text">
              <p className="about__description">
                I'm a 3rd-year B.Tech IT student with a passion for technology and problem-solving.
                My journey in tech has been driven by curiosity and a desire to create meaningful solutions
                that make a real impact in the world.
              </p>
              
              <p className="about__description">
                From building AI-powered applications to developing interactive games, I love exploring
                different domains of technology. I believe in continuous learning and staying updated
                with the latest trends in software development.
              </p>
              <div className="about__resume">
                <a href="/Resume.pdf" download className="about-resume-btn">
                  <svg viewBox="0 0 24 24" className="about-resume-icon">
                    <path 
                      d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
              <div className="about__stats">
                <div className="stat">
                  <span className="stat__number">15+</span>
                  <span className="stat__label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat__number">6+</span>
                  <span className="stat__label">Technologies Mastered</span>
                </div>
                <div className="stat">
                  <span className="stat__number">3</span>
                  <span className="stat__label">Years Learning</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about__skills">
            <h3 className="skills__title">Technical Skills</h3>
            <div className="skills__grid">
              {skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="skill-card"
                  onClick={() => handleSkillClick(skill.title)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--skill-color': skill.color
                  } as React.CSSProperties}
                >
                  <div className="skill-card__icon">
                    <skill.icon size={32} />
                  </div>
                  <div className="skill-card__content">
                    <h4 className="skill-card__title">{skill.title}</h4>
                    <p className="skill-card__description">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about__closing">
            <p className="about__description">
              My goal is to keep learning, build impactful projects, and create solutions that make a difference.
              I'm always excited to take on new challenges and collaborate on innovative projects that push
              the boundaries of what's possible with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;