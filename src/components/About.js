import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaChevronDown } from "react-icons/fa"; // Import Arrow Icon
import "./About.css"; // Import styles

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <p>
        I’m a <strong>Sophomore Computer Science student at UCF</strong> with a passion for{" "}
        <strong>software development</strong> and <strong>problem-solving</strong>. My curiosity about evolving technology
        drives me to continuously learn and improve my skills.
      </p>
      <p>
        Previously, I worked as a <strong>Garage Door Assistant Technician</strong>, where I honed my problem-solving
        abilities, hands-on experience with mechanical systems, and teamwork in a fast-paced environment.
      </p>
      <p>
        Currently, I’m exploring different areas of <strong>software development</strong>, with a strong interest in{" "}
        <strong>web development and system programming</strong>. I love learning how different technologies integrate and shape our world.
      </p>

      {/* ✅ Scroll Down Arrow (Positioned Closer) */}
      <motion.div 
        className="about-scroll-down"
        whileHover={{ scale: 1.2 }} 
        onClick={() => scrollToSection("projects")}
      >
        <FaChevronDown size={30} color="#ff4d4d" />
      </motion.div>
    </section>
  );
};

export default About;
