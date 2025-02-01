import React from "react";
import { motion } from "framer-motion";
import NameBanner from "./components/NameBanner";

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const App = () => {
  return (
    <div>
      <NameBanner />

      {/* Navigation Links for Scrolling */}
      <nav style={styles.nav}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("about")}
        >
          About
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </motion.button>
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

const styles = {
  nav: {
    position: "fixed",
    top: "10px",
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
};

export default App;
