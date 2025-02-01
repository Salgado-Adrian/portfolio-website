import React from 'react';
import { Link, Element } from 'react-scroll';
import NameBanner from './components/NameBanner';

const App = () => {
  return (
    <div>
      <NameBanner />

      {/* Navigation Links for Scrolling */}
      <nav style={styles.nav}>
        <Link to="home" smooth duration={500}>Home</Link>
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </nav>

      {/* Sections */}
      <Element name="home" className="section">
        <h1>Welcome to My Portfolio</h1>
      </Element>
      
      <Element name="about" className="section">
        <h1>About Me</h1>
      </Element>

      <Element name="projects" className="section">
        <h1>Projects</h1>
      </Element>

      <Element name="contact" className="section">
        <h1>Contact</h1>
      </Element>
    </div>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    zIndex: 1000,
    display: 'flex',
    gap: '15px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)' 

  }
};

export default App;
