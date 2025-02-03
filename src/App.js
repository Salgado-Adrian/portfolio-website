import React from "react";
import Header from "./components/Header";
import Home from "./components/Home"; // Import Home section

const App = () => {
  return (
    <div>
      <Header /> {/* ✅ Floating Navigation Bar */}

      {/* Render Home Section */}
      <Home />

      {/* Other Sections */}
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

export default App;
