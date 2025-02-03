import React from "react";
import "./About.css"; // ✅ Add a CSS file for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      
      <p>
        I am a <span className="highlight">sophomore Computer Science student at the University of Central Florida (UCF)</span> with a passion for 
        <span className="highlight"> software development and problem-solving.</span> 
        My curiosity about how technology evolves and impacts our future drives me to continuously learn and improve my skills.
      </p>

      <p>
        I have previous work experience as a 
        <span className="highlight"> Garage Door Assistant Technician</span>, 
        where I developed problem-solving skills, hands-on experience with mechanical systems, and teamwork in a fast-paced environment.
      </p>

      <p>
        I am currently exploring different areas of 
        <span className="highlight"> software development</span>, particularly 
        <span className="highlight"> web development and system programming.</span> 
        I love learning how different technologies integrate and shape the world around us.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        <li>Programming Languages: Java, C, JavaScript</li>
        <li>Frontend: React, HTML, CSS</li>
        <li>Backend: Node.js (learning), API development</li>
        <li>Version Control: Git, GitHub</li>
        <li>Tools: VS Code, Linux, SSH</li>
      </ul>

      <h2>What I’m Looking For</h2>
      <p>
        I am actively looking for **internship opportunities** in software development.  
        My goal is to gain real-world experience in **full-stack development** and **backend systems**.
      </p>

      <h2>Find Me Online</h2>
      <p>
        - <a href="https://www.linkedin.com/in/adrian--salgado" target="_blank" rel="noopener noreferrer">LinkedIn</a>  
        - <a href="https://github.com/Salgado-Adrian" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </section>
  );
};

export default About;
