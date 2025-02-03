import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact"; // Import Contact Component

const App = () => {
  return (
    <div style={styles.app}>
      <Header /> {/* ✅ Floating Navbar */}

      {/* ✅ Home Section */}
      <section id="home" className="section" style={styles.section}>
        <Home />
      </section>

      {/* ✅ About Me Section */}
      <section id="about" className="section" style={styles.section}>
        <h1>About Me</h1>
        <p>
          I am a <strong>sophomore Computer Science student at the University of Central Florida (UCF)</strong>
          with a passion for <strong>software development and problem-solving</strong>. My curiosity about how technology evolves and impacts our future
          drives me to continuously learn and improve my skills.
        </p>
        <p>
          I have previous work experience as a <strong>Garage Door Assistant Technician</strong>, where I developed problem-solving skills, hands-on experience
          with mechanical systems, and teamwork in a fast-paced environment.
        </p>
        <p>
          I am currently exploring different areas of <strong>software development</strong>, particularly <strong>web development and system programming</strong>. 
          I love learning how different technologies integrate and shape the world around us.
        </p>
      </section>

      {/* ✅ Projects Section */}
      <section id="projects" className="section" style={styles.section}>
        <h1>Projects</h1>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="section" style={styles.section}>
        <Contact />
      </section>
    </div>
  );
};

// ✅ **Fix Spacing & Scrolling Issues**
const styles = {
  app: {
    scrollBehavior: "smooth",
  },
  section: {
    textAlign: "center",
    padding: "80px 20px", // ✅ Increase Padding to Avoid Overlapping
    maxWidth: "800px",
    margin: "auto",
  },
};

// ✅ **Fix Global CSS in index.css**
// Add this to your **index.css** file to fix scrolling
/*
html, body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  height: 100%;
}
*/

export default App;
