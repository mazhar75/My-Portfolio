import React from 'react';
import { projects } from '../../data/projectData'; // Import the projects data
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons
import styles from './ProjectsPage.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ProjectsPage = () => {
  const navigate = useNavigate(); // Use the hook to get the navigate function

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectDescription}>{project.description}</p>
          <h3>Technologies:</h3>
          <ul className={styles.technologies}>
            {project.technologies.map((tech, index) => (
              <li key={index} className={styles.techItem}>{tech}</li>
            ))}
          </ul>
          <div className={styles.links}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaGithub className={styles.icon} /> View on GitHub
              </a>
            )}
            <br />
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaExternalLinkAlt className={styles.icon} /> View Demo
              </a>
            )}
          </div>

          {/* Extra details for projects that provide them */}
          {project.details && (
            <div className={styles.details}>
              <h3>Project Details:</h3>
              {Object.entries(project.details).map(([key, value], idx) => (
                <div key={idx}>
                  <h4>{key}:</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          )}
          {project.overview && (
            <div className={styles.overview}>
              <h3>Project Overview:</h3>
              <p>{project.overview}</p>
            </div>
          )}
          {project.requirements && project.requirements.length > 0 && (
            <div className={styles.requirements}>
              <h3>Requirements:</h3>
              <ul>
                {project.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          {project.features && project.features.length > 0 && (
            <div className={styles.features}>
              <h3>Features:</h3>
              <ul>
                {project.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <button className={styles.closeButton} onClick={() => navigate('/')}>Close</button>
    </div>
  );
};

export default ProjectsPage;
