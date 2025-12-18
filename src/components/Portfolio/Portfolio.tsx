import React, { useState, useMemo, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  categories: string[];
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleSkillFilterChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ filter: string }>;
      if (customEvent.detail && customEvent.detail.filter) {
        setActiveFilter(customEvent.detail.filter);
      }
    };

    window.addEventListener('skillFilterChange', handleSkillFilterChange as EventListener);
    return () => {
      window.removeEventListener('skillFilterChange', handleSkillFilterChange as EventListener);
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Time Table Buddy Web App',
      description: 'A web application that helps faculties create and manage lecture schedules while allowing students to easily view their class timetables.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      categories: ['web','software'],
      tags: ['TypeScript', 'Web App', 'Scheduling', 'Software'],
      //projectUrl: '',
      githubUrl: 'https://github.com/Dhruv-Tikhande/Timetable_Buddy',
      highlights: [
        'Faculty-based lecture scheduling system',
        'Student-friendly timetable view',
        'Prevents lecture time conflicts',
        'Simple and responsive web interface'
      ]
    },
    {
      id: 2,
      title: 'Super Store Analysis System',
      description: 'End-to-end analytics system for Super Store sales, combining ML-driven insights and a modern React UI.',
      image: '/Images/Store.png',
      //video: '/videos/store-demo.mp4', // optional
      categories: ['ml', 'web'],
      tags: ['Python', 'ML', 'React'],
      githubUrl: 'https://github.com/Dhruv-Tikhande/Super_Store_Analysis',
      highlights: [
        'ML-based sales prediction',
        'Interactive dashboards',
        'Actionable business insights'
      ]
    },
    {
      id: 3,
      title: 'Diamond Price Prediction',
      description: 'Machine learning model for predicting diamond prices using regression algorithms.',
      image: 'https://media.istockphoto.com/id/184303311/photo/three-beautiful-diamonds-on-a-black-background.jpg?s=612x612&w=0&k=20&c=_TUKoUkjTrsD78SHfFm4Oyy4r2RHv27-VczB-Zcxivo=',
      categories: ['ml'],
      tags: ['Python', 'ML', 'Regression'],
      githubUrl: 'https://github.com/Dhruv-Tikhande/Diamond_Price_Prediction',
      highlights: [
        'Feature engineering',
        'Regression model training',
        'Performance evaluation'
      ]
    },
    {
      id: 4,
      title: 'Mushroom Classification',
      description: 'ML classification model to identify edible vs poisonous mushrooms.',
      image: 'https://media.istockphoto.com/id/621261052/photo/amanita-muscaria-family.jpg?s=612x612&w=0&k=20&c=mvATY1PM8SaY99rE_wo2lURjW-Ggf99cePP59Vp1-8o=',
      categories: ['ml'],
      tags: ['Python', 'Classification'],
      githubUrl: 'https://github.com/Dhruv-Tikhande/Mushroom_Edibility_Prediction',
      highlights: [
        'Binary classification',
        'Multiple ML algorithms',
        'High accuracy model'
      ]
    },
    {
      id: 5,
      title: 'Unity Game Project - KickOff',
      description: 'Interactive football game built using Unity with 2D/3D mechanics.',
      image: '/Images/KickOff.png',
      categories: ['game'],
      tags: ['Unity','AR/VR','C#','Game Development',],
      githubUrl: 'https://github.com/Dhruv-Tikhande/KickOFF_UnityGame',
      highlights: [
        'Player control mechanics',
        'AI goalkeeping',
        'Unity physics integration'
      ]
    },
    {
      id: 6,
      title: 'Flight Management System',
      description: 'Database-backed system to manage flights, passengers, and bookings.',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg',
      categories: ['software'],
      tags: ['Java', 'MySQL'],
      githubUrl: 'https://github.com/Dhruv-Tikhande/Flight_Management_System__NetBeans',
      highlights: [
        'CRUD operations',
        'Database design',
        'Desktop UI'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.categories.includes('web')).length },
    { id: 'ml', label: 'ML & AI', count: projects.filter(p => p.categories.includes('ml')).length },
    { id: 'software', label: 'Software', count: projects.filter(p => p.categories.includes('software')).length },
    { id: 'game', label: 'Games', count: projects.filter(p => p.categories.includes('game')).length }
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all'
      ? projects
      : projects.filter(project => project.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <header className="portfolio__header">
          <h2 className="portfolio__title">My Projects</h2>
          <p className="portfolio__subtitle">
            Selected projects showcasing my skills in software development and machine learning.
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
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
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

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="project-modal">
          <div className="project-modal__overlay" onClick={() => setSelectedProject(null)} />
          <div className="project-modal__content">
            <button className="project-modal__close" onClick={() => setSelectedProject(null)}>
              <X size={22} />
            </button>

            <div className="project-modal__layout">
              <div className="project-modal__media">
                {selectedProject.video ? (
                  <video src={selectedProject.video} autoPlay muted loop controls />
                ) : (
                  <img src={selectedProject.image} alt={selectedProject.title} />
                )}
              </div>

              <div className="project-modal__info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>

                <div className="project-modal__tags">
                  {selectedProject.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {selectedProject.highlights && (
                  <ul className="project-modal__highlights">
                    {selectedProject.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                <div className="project-modal__actions">
                  {selectedProject.projectUrl && (
                    <a href={selectedProject.projectUrl} target="_blank" rel="noreferrer">
                      Live Project
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
