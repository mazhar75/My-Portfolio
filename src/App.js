import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import ContentGrid from './components/ContentGrid/ContentGrid';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import EducationPage from './components/EducationPage/EducationPage';
import LeadershipPage from './components/LeadershipPage/LeadershipPage';
import { cards } from './data/portfolioData';
import CompetitiveProgrammingBar from './components/CompetitiveProgrammingBar/CompetitiveProgrammingBar';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './components/Card/Card.module.css';
import MinAssistant from './components/MinAssistant/MinAssistant';

function ProjectBar() {
  // Project info from resume and portfolioData.js
  const projects = [
    {
      name: 'CareerSync',
      desc: 'AI-Powered Job Matching and Resume Analysis.',
      features: [
        'Full-stack web app leveraging semantic similarity and BERT',
        'Hybrid recommendation logic: semantic + rule-based skill extraction',
        'Personalized resume improvement suggestions',
      ],
      tech: 'Node.js, Express, React.js, TypeScript, MongoDB, Render, Vercel, Hugging Face API',
      link: 'https://github.com/mazhar75/CareerSync-Backend',
    },
    {
      name: 'mongo-rest-api',
      desc: 'RESTful API in Go with MongoDB, JWT authentication, CORS, CRUD.',
      features: [
        'JWT-based authentication',
        'CORS support and full CRUD',
        'Modular codebase, .env config, Postman validation',
      ],
      tech: 'Golang, JWT, CORS, MongoDB, Postman',
      link: 'https://github.com/mazhar75/mongo-rest-api',
    },
    {
      name: 'Course Management System',
      desc: 'Role-based access, course registration, dashboards.',
      features: [
        'Teacher/student dashboards',
        'Course registration and management',
        'Developed for Web Technology course',
      ],
      tech: 'HTML, CSS, Java Servlet, MySQL, Apache Tomcat',
      link: 'https://github.com/mazhar75/UniversityCourseManagementSystem',
    },
    {
      name: 'Automated Mess System App',
      desc: 'Android app to automate mess calculations.',
      features: [
        'Automates mess calculations',
        'Flutter frontend, MongoDB backend',
        'User-friendly Android interface',
      ],
      tech: 'Flutter, MongoDB',
      link: 'https://github.com/mazhar75/Flutter',
    },
  ];
  return (
    <div>
      <h2 style={{
        textAlign: 'center',
        color: '#00bcd4',
        fontWeight: 700,
        fontSize: '2rem',
        margin: '2.5rem 0 1.2rem 0',
        letterSpacing: '1px',
        textShadow: '0 2px 8px rgba(0,188,212,0.10)'
      }}>
        Featured Projects
      </h2>
      <div className={styles.projectBarContainer} style={{flexWrap: 'nowrap', justifyContent: 'center'}}>
        {projects.map(project => (
          <div className={styles.projectBarCard} key={project.name}>
            <div className={styles.projectBarCardTitle}>{project.name}</div>
            <div className={styles.projectBarCardDesc}>{project.desc}</div>
            <ul style={{margin: '0 0 0.3rem 1.1rem', padding: 0, color: '#e0e0e0', fontSize: '0.93rem', fontFamily: 'Segoe UI, Arial, sans-serif', listStyle: 'disc'}}>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className={styles.projectBarCardTech}>{project.tech}</div>
            <div className={styles.projectBarCardFooter}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectBarCardLink}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home route with About section */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <ContentGrid />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <CompetitiveProgrammingBar />
        <ProjectBar />
        <Footer />
        <MinAssistant />
        <Link to="/contact" className="floating-button">
          Contact Me
        </Link>
      </div>
    </Router>
  );
}

export default App;
