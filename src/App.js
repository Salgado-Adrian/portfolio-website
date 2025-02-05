import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"; // ✅ Make sure About is imported!
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />

      {/* ✅ Home Section */}
      <section id="home" className="section">
        <Home />
      </section>

      {/* ✅ About Me Section (Ensure It's Included) */}
      <section id="about" className="section">
        <About /> {/* This should render the About section */}
      </section>

      {/* ✅ Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default App;
