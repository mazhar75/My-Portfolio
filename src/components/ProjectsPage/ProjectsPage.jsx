import React from 'react';
import { projects } from '../../data/projectData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectsPage.module.css';
import { useNavigate } from 'react-router-dom';

// Helper to group projects by type (if type exists)
const groupProjectsByType = (projects) => {
  const groups = {};
  projects.forEach((project) => {
    const type = project.icon || 'Other';
    if (!groups[type]) groups[type] = [];
    groups[type].push(project);
  });
  return groups;
};

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {project.icon && (
              <div className={styles.projectIcon}>{project.icon}</div>
            )}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <div className={styles.links}>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaGithub className={styles.icon} /> GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaExternalLinkAlt className={styles.icon} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className={styles.closeButton} onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default ProjectsPage;
