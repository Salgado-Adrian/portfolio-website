import React from "react";
import { motion } from "framer-motion";
import NameBanner from "./components/NameBanner";

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const App = () => {
  return (
    <div>
      {/* Move NameBanner to a better position */}
      <div style={styles.nameBanner}>
        <NameBanner />
      </div>

      {/* Navigation Links for Scrolling */}
      <nav style={styles.nav}>
        {["home", "about", "projects", "contact"].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1, backgroundColor: "red", color: "white" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(section)}
            style={styles.navButton}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </nav>

      {/* Sections */}
      <section id="home" className="section">
        <h1>Welcome to My Portfolio</h1>
      </section>

      <section id="about" className="section">
        <h1>About Me</h1>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
      </section>

      <section id="contact" className="section">
        <h1>Contact</h1>
      </section>
    </div>
  );
};

/* Updated Styles */
const styles = {
  nameBanner: {
    position: "absolute",
    top: "10px",
    left: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "red",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
  nav: {
    position: "fixed",
    top: "50px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    zIndex: 1000,
    display: "flex",
    gap: "15px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    color: "black",
    cursor: "pointer",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    padding: "5px 10px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

export default App;
