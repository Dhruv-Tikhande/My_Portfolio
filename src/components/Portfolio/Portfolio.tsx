import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Quiz Web App',
      description: 'Interactive quiz application powered by AI with dynamic question generation and real-time scoring.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'web',
      tags: ['JavaScript', 'AI', 'Web App'],
      projectUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Flight Management System',
      description: 'Comprehensive flight management system with intuitive UI for booking, scheduling, and passenger management.',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'software',
      tags: ['Java', 'UI/UX', 'Database'],
      projectUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Diamond Price Prediction',
      description: 'Machine learning model for predicting diamond prices using regression algorithms and feature engineering.',
      image: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ml',
      tags: ['Python', 'ML', 'Regression'],
      projectUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Mushroom Classification',
      description: 'Classification model to identify edible vs poisonous mushrooms using various ML algorithms.',
      image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ml',
      tags: ['Python', 'Classification', 'Data Science'],
      projectUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Unity Game Projects',
      description: 'Collection of interactive games built with Unity engine featuring 2D/3D gameplay mechanics.',
      image: 'https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'game',
      tags: ['Unity', 'C#', 'Game Dev'],
      projectUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'web',
      tags: ['React', 'TypeScript', 'CSS'],
      projectUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ml', label: 'ML & AI', count: projects.filter(p => p.category === 'ml').length },
    { id: 'software', label: 'Software', count: projects.filter(p => p.category === 'software').length },
    { id: 'game', label: 'Games', count: projects.filter(p => p.category === 'game').length }
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <header className="portfolio__header">
          <h2 className="portfolio__title">My Projects</h2>
          <p className="portfolio__subtitle">
            Here are some of my works showcasing my skills in coding, machine learning, and web development.
          </p>
        </header>

        <div className="portfolio__filters">
          <div className="filters">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`filter-btn ${activeFilter === category.id ? 'filter-btn--active' : ''}`}
              >
                <Filter size={16} />
                <span>{category.label}</span>
                <span className="filter-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio__grid">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                  <div className="project-card__actions">
                    {project.projectUrl && (
                      <a 
                        href={project.projectUrl}
                        className="project-action"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="project-action"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;