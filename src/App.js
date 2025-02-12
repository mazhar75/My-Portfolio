import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Link for navigation
import Header from './components/Header/Header';
import About from './components/About/About';
import ContentGrid from './components/ContentGrid/ContentGrid';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import EducationPage from './components/EducationPage/EducationPage'; // Import ProjectsPage
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
            {/* Projects route without About section */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            {/* Contact route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Button */}
        <Link to="/contact" className="floating-button">
          Contact Me
        </Link>
      </div>
    </Router>
  );
}

export default App;
